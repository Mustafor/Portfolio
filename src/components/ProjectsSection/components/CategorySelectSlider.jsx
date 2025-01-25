"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function CategorySelectSlider({
  selectedCategory,
  setSelectedCategory,
}) {
  const categories = [
    {
      animation: "fade-right",
      category: "all",
    }
  ];

  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);

  return (
    <div className="relative w-full mt-6 py-2">
      <div className="flex items-center gap-4 justify-center px-4 dark:bg-primaryDarkGray rounded-lg">
        {categories.map((category) => (
          <button
            key={category.category}
            className={`relative px-4 py-2 cursor-pointer text-sm md:text-base font-semibold rounded-full transition-all duration-300 z-20
              ${
                selectedCategory === category.category
                  ? "bg-primaryPurple text-white shadow-md scale-105"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-primaryGray hover:bg-indigo-100 dark:hover:bg-indigo-900 hover:text-primaryPurple dark:hover:text-white"
              }`}
            onClick={() => setSelectedCategory(category.category)}
            data-aos={category.animation}
          >
            {category.category.charAt(0).toUpperCase() +
              category.category.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}
