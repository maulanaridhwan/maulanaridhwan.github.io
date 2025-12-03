import { useEffect, useRef, useState } from "react";

export default function ProjectSlider({ images = [], interval = 3000 }) {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const isHoverRef = useRef(false);
  const touchStartX = useRef(0);

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  useEffect(() => {
    if (!images || images.length <= 1) return;

    const play = () => {
      if (isHoverRef.current) return;
      timeoutRef.current = setTimeout(() => {
        setIndex((i) => (i + 1) % images.length);
      }, interval);
    };

    play();
    return () => clearTimeout(timeoutRef.current);
  }, [index, images, interval]);

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  function handleMouseEnter() {
    isHoverRef.current = true;
    clearTimeout(timeoutRef.current);
  }

  function handleMouseLeave() {
    isHoverRef.current = false;
    // start next cycle immediately
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIndex((i) => (i + 1) % images.length), interval);
  }

  function onTouchStart(e) {
    handleMouseEnter();
    touchStartX.current = e.touches[0].clientX;
  }

  function onTouchEnd(e) {
    handleMouseLeave();
    const dx = (e.changedTouches[0].clientX || 0) - touchStartX.current;
    if (Math.abs(dx) > 50) {
      if (dx < 0) next(); else prev();
    }
  }

  return (
    <div
      className="relative overflow-hidden rounded-lg"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div
        className="flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <div key={i} className="flex-shrink-0 w-full flex justify-center items-center p-2">
            <img
              src={src}
              alt={`slide-${i}`}
              className="max-w-full h-auto object-contain bg-gray-100"
              onError={(e) => {
                try {
                  if (images && images[0] && e.currentTarget.src !== images[0]) e.currentTarget.src = images[0];
                } catch (err) {}
              }}
            />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-3 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-2 h-2 rounded-full ${i === index ? 'bg-emerald-600' : 'bg-emerald-300'}`}
            onClick={(e) => { e.stopPropagation(); e.preventDefault(); setIndex(i); }}
          />
        ))}
      </div>

      {/* Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); e.preventDefault(); prev(); }}
            aria-label="Previous"
            className="hidden md:flex items-center justify-center absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/80 hover:bg-white rounded-full shadow"
          >
            ‹
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); e.preventDefault(); next(); }}
            aria-label="Next"
            className="hidden md:flex items-center justify-center absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/80 hover:bg-white rounded-full shadow"
          >
            ›
          </button>
        </>
      )}
    </div>
  );
}
