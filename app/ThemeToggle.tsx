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
      <path d="M44 51c-15 5-31-6-31-22 0-9 5-17 13-21-2 15 9 29 24 29-1 6-3 11-6 14Z" />
      <path d="M45 13l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5ZM52 32l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3Z" />
    </svg>
  );
}
