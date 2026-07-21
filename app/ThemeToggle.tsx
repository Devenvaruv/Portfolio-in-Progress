"use client";

import { useEffect, useState } from "react";

type Theme = "day" | "night";

const storageKey = "deven-portfolio-theme";

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme === "night" ? "dark" : "light";
}

function getInitialTheme(): Theme {
  const activeTheme = document.documentElement.dataset.theme;

  if (activeTheme === "day" || activeTheme === "night") {
    return activeTheme;
  }

  const savedTheme = window.localStorage.getItem(storageKey);

  if (savedTheme === "day" || savedTheme === "night") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "night" : "day";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") {
      return "day";
    }

    return getInitialTheme();
  });

  useEffect(() => {
    applyTheme(theme);
    window.localStorage.setItem(storageKey, theme);
  }, [theme]);

  function toggleTheme() {
    const nextTheme = theme === "night" ? "day" : "night";

    setTheme(nextTheme);
    applyTheme(nextTheme);
    window.localStorage.setItem(storageKey, nextTheme);
  }

  const isNight = theme === "night";

  return (
    <button
      aria-label={isNight ? "Switch to day mode" : "Switch to night mode"}
      aria-pressed={isNight}
      className={`theme-toggle${isNight ? " is-night" : ""}`}
      onClick={toggleTheme}
      suppressHydrationWarning
      type="button"
    >
      <span className="theme-toggle-icons" aria-hidden="true">
        <SunIcon />
        <MoonIcon />
      </span>
    </button>
  );
}

function SunIcon() {
  return (
    <svg className="theme-icon theme-icon-sun" fill="none" height="38" viewBox="0 0 64 64" width="38">
      <circle cx="32" cy="32" r="9" />
      <path d="M32 8v8M32 48v8M8 32h8M48 32h8M15 15l6 6M43 43l6 6M49 15l-6 6M21 43l-6 6" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg className="theme-icon theme-icon-moon" fill="none" height="38" viewBox="0 0 64 64" width="38">
      <path d="M45 47c-4 3-9 5-15 5-12 0-22-10-22-22 0-9 6-17 14-20-2 16 10 30 26 28-1 3-2 6-3 9Z" />
      <path d="M43 16l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5Z" />
    </svg>
  );
}
