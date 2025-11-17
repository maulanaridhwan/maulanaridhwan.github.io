import { useEffect, useState } from "react";
import { SunMoon } from "lucide-react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="p-2 hover:text-emerald-800 dark:hover:text-emerald-400 
             transition-all"
      title="Toggle Dark Mode"
    >
      <SunMoon size={25} />
       {dark ? " " : " "}
    </button>
  );
}
