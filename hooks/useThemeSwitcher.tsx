"use client";

import React, { useEffect, useState } from "react";

const useThemeSwitcher = (): [string, (theme: string) => void] => {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" ? localStorage.theme : "",
  );
  const [activeTheme, setActiveTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      setActiveTheme("light");
    } else if (theme === "light") {
      setActiveTheme("dark");
    }
  }, [theme]);

  useEffect(() => {
    const root: HTMLElement = window.document.documentElement;

    root.classList.remove(activeTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, activeTheme]);

  return [activeTheme, setTheme];
};

export default useThemeSwitcher;
