"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");

    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  function toggleTheme() {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDark(true);
    }
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Tema değiştir"
      className="
        group
        relative
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-full
        border
        border-white/10
        bg-white/10
        backdrop-blur-xl
        text-slate-700
        dark:text-white
        shadow-lg
        transition-all
        duration-300
        hover:scale-110
        hover:border-blue-400/40
        hover:bg-white/20
      "
    >
      <div className="transition-transform duration-500 group-hover:rotate-180">
        {dark ? (
          <Sun
            size={20}
            className="text-yellow-400"
            strokeWidth={2.2}
          />
        ) : (
          <Moon
            size={20}
            className="text-slate-700 dark:text-white"
            strokeWidth={2.2}
          />
        )}
      </div>
    </button>
  );
}