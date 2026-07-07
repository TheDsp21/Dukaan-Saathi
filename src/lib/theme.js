import { useState, useEffect } from "react";

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("dukaan_theme");
    const explicitChoice = localStorage.getItem("dukaan_theme_explicit");

    if (saved === "light") return "light";
    if (saved === "dark" && explicitChoice === "dark") return "dark";
    return "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("dukaan_theme", theme);
    localStorage.setItem("dukaan_theme_explicit", theme === "dark" ? "dark" : "light");
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      localStorage.setItem("dukaan_theme_explicit", next === "dark" ? "dark" : "light");
      return next;
    });
  };

  return { theme, toggleTheme, setTheme };
}
