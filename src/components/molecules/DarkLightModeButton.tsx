"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react"; // Import ikon dari lucide-react

const DarkLightModeButton: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // Mengambil preferensi tema pengguna pada saat pertama kali render
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    } else {
      // Menyimpan preferensi tema default jika tidak ada
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      setDarkMode(prefersDark);
    }
  }, []);

  // Mengubah tema dan menyimpannya di localStorage
  const toggleTheme = () => {
    const newTheme = !darkMode ? "dark" : "light";
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-3 rounded-full flex justify-items-center border-2 border-transparent transition-all duration-300 border-primary outline"
    >
      {/* Ikon untuk menggambarkan light/dark mode */}
      {darkMode ? (
        <Moon className="w-6 h-6" /> // Ikon untuk dark mode
      ) : (
        <Sun className="w-6 h-6" /> // Ikon untuk light mode
      )}
    </button>
  );
};

export { DarkLightModeButton };
