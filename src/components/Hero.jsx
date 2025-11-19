export default function Hero() {
  return (
    <section
  id="hero"
  className="
    relative h-[90vh] flex items-center
    overflow-hidden bg-accent-50 dark:bg-gray-900">
  {/* Layer 1 */}
  <div
    className="absolute inset-0 parallax-layer-1 opacity-30 bg-[url('https://media.geeksforgeeks.org/wp-content/uploads/20240227132415/bg-pattern.png')]"
  />

  {/* Layer 2 */}
  <div
    className="absolute inset-0 parallax-layer-2 opacity-20 bg-[url('https://media.geeksforgeeks.org/wp-content/uploads/20240227110042/geeks-gradient.jpg')]"
  />

  {/* Layer 3 */}
  <div className="absolute inset-0 parallax-layer-3 opacity-10 bg-black" />

  <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col lg:flex-row gap-8 items-center">
    
    <div className="flex-1">
      <h1 className="text-4xl font-extrabold dark:text-white">Hi! I'm Lana</h1>
      <p className="mt-4 text-lg dark:text-gray-300">
        AI Engineer & Fullstack Developer
      </p>
    </div>

    <div className="flex-1">
      <img
        src="./img/profile-2.png"
        alt="hero"
        className="w-64 h-64 float-slow rounded-xl shadow-xl"
      />
    </div>

  </div>
</section>
  );
}
