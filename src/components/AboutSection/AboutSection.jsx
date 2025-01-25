"use client";
import React, { useEffect, useState } from "react";
import {
  Paragraph,
  TabSelectors,
  TabSelections,
  AboutImage,
  Heading,
  datas,
} from "./components/index";
import Aos from "aos";
import "aos/dist/aos.css";

export default function AboutSection() {
  const { skills, education, certification } = datas;
  const [active, setActive] = useState("skills");

  useEffect(() => {
    const storedActive = localStorage.getItem("active");

    if (storedActive) setActive(storedActive);
  }, []);

  useEffect(() => {
    localStorage.setItem("active", active);
  }, [active]);

  const skillsPerColumn = 6;
  const skillsColumn = [];

  for (let i = 0; i < skills.length; i += skillsPerColumn) {
    skillsColumn.push(skills.slice(i, i + skillsPerColumn));
  }

  const TabDatas = {
    skills: skillsColumn,
    education,
    certification,
  };

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <section
      className="flex flex-col lg:flex-row gap-4 py-8 px-2 xl:gap-16 sm:py-16 xl:px-16"
      id="about"
    >
      <div
        data-aos="fade-right"
        className="flex-shrink-0 flex justify-center items-center w-full max-w-[550px]"
      >
        <AboutImage />
      </div>

      <div
        data-aos="fade-left"
        className="flex flex-col text-primaryDarkGray dark:text-white w-full"
      >
        <Heading />
        <Paragraph />

        <div className="mt-7">
          <TabSelectors active={active} setActive={setActive} />

          <ul className="list-disc pl-7 pt-3 flex flex-col gap-1 text-[17px]">
            <TabSelections
              active={active}
              activeTab="skills"
              list={TabDatas[active]}
            />

            <TabSelections
              active={active}
              activeTab="education"
              list={education}
            />

            <TabSelections
              active={active}
              activeTab="certification"
              list={certification}
            />
          </ul>
        </div>
      </div>
    </section>
  );
}
