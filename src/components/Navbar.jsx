import { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/30 border-b border-white/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 
                flex items-center justify-between h-20">

        {/* Logo */}
        <a href="#hero" className="flex items-center">
            <img 
            src="./img/RQZ.png"
            alt="Logo"
            className="h-20 w-auto"
            />
        </a>

          {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
            <li key={item.href}>
                <a
                href={item.href}
                className="relative px-4 py-2 transition-all duration-300 hover:text-emerald-700
                            after:content-[''] after:absolute after:left-0 after:bottom-0 
                            after:w-0 after:h-[2px] after:bg-emerald-700 
                            after:transition-all after:duration-300
                            hover:after:w-full"
                >
                {item.label}
                </a>
            </li>
            ))}
            {/* Dark Mode - moved to the right side with menu */}
            <li>
            <button
                className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-400 
             hover:bg-gray-200 dark:hover:bg-gray-600
             transition-all duration-200"
            >
                <DarkModeToggle />
            </button>
            </li>
        </ul>
          {/* <div className="hidden md:flex items-center gap-4">
            <DarkModeToggle />
            </div> */}

          {/* Mobile icon */}
          <button
            className="md:hidden px-4 py-2 text-emerald-700 font-semibold"
            onClick={() => setOpen(true)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      {open && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] animate-fadeIn">
          <div className="absolute right-0 top-0 h-full w-64 bg-white shadow-xl p-6 animate-slideIn">
            {/* Close button */}
            <button
              className="text-xl font-bold text-emerald-600 mb-6"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>

            {/* Menu items */}
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block px-2 py-2 text-lg font-semibold text-emerald-700 hover:bg-emerald-100 rounded"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8">
                <button
                    className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-400 
                hover:bg-gray-200 dark:hover:bg-gray-600
                transition-all duration-200"
                >
                    <DarkModeToggle />
                </button>
                </div>
          </div>
        </div>
      )}
    </>
  );
}
