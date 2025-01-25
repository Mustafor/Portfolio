"use client";
import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const initialTheme = storedTheme || "dark";

    setTheme(initialTheme);
    document.documentElement.classList.add(initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      // className="relative h-10 w-10 overflow-hidden border-2 border-primaryPurple text-primaryPurple font-semibold dark:text-primaryGray dark:hover:text-white  shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-indigo-600 before:duration-300 before:ease hover:text-white hover:shadow-indigo-600 hover:before:h-40 hover:before:w-10 hover:before:opacity-80 rounded-md flex justify-center items-center"
      className="text-3xl mx-auto"
    >
      <span className="relative z-10">
        {/* {theme === "light" ? "Switch to Dark" : "Switch to Light"} */}
        {theme === "light" ? (
          <FaMoon className="hover:text-blue-500 transition-colors duration-300" />
        ) : (
          <FaSun className="hover:text-yellow-400 transition-colors duration-300" />
        )}
      </span>
    </button>
  );
}
