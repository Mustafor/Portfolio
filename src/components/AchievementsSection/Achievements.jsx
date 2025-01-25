"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import achievementsList from "./achievementsList";
import Aos from "aos";
import "aos/dist/aos.css";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const AchievementsSection = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div data-aos="fade-down" className="py-8 px-4 xl:px-16 mt-24">
      <div className="sm:border-[#33353F] sm:border rounded-md p-8 flex flex-col sm:flex-row items-center justify-center sm:justify-between sm:gap-8">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center my-4 sm:my-0 w-full sm:w-auto p-4"
            >
              <h2 className="dark:text-white text-primaryDarkGray text-3xl sm:text-3xl font-bold flex flex-row text-center justify-center items-center">
                {achievement.prefix}

                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className=" text-3xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}
              </h2>

              <p className="text-gray-500 dark:text-primaryGray text-lg text-center">
                {achievement.metric}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
