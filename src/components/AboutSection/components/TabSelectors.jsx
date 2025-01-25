import React from "react";

export default function TabSelectors({ setActive, active }) {
  const tabs = ["skills", "education", "certification"];

  return (
    <div
      role="tablist"
      className="flex gap-4 mb-4 text-base md:text-lg text-primaryDarkGray dark:text-primaryGray"
    >
      {tabs.map((tab) => {
        const isActive = active === tab;

        return (
          <span
            key={tab}
            role="tab"
            aria-selected={isActive}
            onClick={() => setActive(tab)}
            className={`relative cursor-pointer font-semibold transition-all duration-300 ease-in-out ${
              isActive
                ? "text-primaryPurple dark:text-white"
                : "hover:text-primaryPurple dark:hover:text-white"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}

            <span
              className={`absolute top-6 right-0 left-0 bottom-0  h-1 bg-primaryPurple rounded-full transform ${
                isActive ? "scale-x-100" : "scale-x-0"
              } transition-transform duration-300 ease-in-out`}
            />
          </span>
        );
      })}
    </div>
  );
}
