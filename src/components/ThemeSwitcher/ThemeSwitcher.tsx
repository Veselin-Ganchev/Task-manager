import { useState, useEffect } from "react";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme") as "light" | "dark";
    if (currentTheme) {
      setTheme(currentTheme);
      document.documentElement.setAttribute("data-theme", currentTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "light" ? "Dark" : "Light"} Theme
    </button>
  );
};

export default ThemeSwitcher;
