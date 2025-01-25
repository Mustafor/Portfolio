"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { FaCode } from "react-icons/fa6";
import { IoMdEye } from "react-icons/io";
import { HoverIcon } from "./index";
import Aos from "aos";
import "aos/dist/aos.css";

export default function ProjectCard({ img, name, github, demo, description }) {
  const cardStyles =
    "relative group rounded-lg overflow-hidden shadow-2xl dark:bg-[#050505] h-96 pb-7 hover:shadow-primaryPurple duration-300 ease-out border border-primaryGray hover:border-none dark:border-none";
  const imageStyles =
    "transition-transform duration-500 transform group-hover:scale-105 object-cover";
  const overlayStyles =
    "overlay flex items-center justify-center absolute top-0 left-0 w-full h-full bg-black bg-opacity-0 -z-10 group-hover:bg-opacity-70 group-hover:z-10 transition-opacity duration-500";
  const textContainerStyles = "p-4 text-primaryDarkGray dark:text-primaryGray";
  const titleStyles = "text-2xl font-semibold";
  const descriptionStyles = "mt-2 text-gray-600 dark:text-gray-400 ";

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div data-aos="zoom-in-up" className={cardStyles}>
      <div className="relative w-full h-3/4 overflow-hidden">
        <Image
          src={img}
          alt={description}
          className={imageStyles}
          fill
          sizes="auto"
        />

        <div className={overlayStyles}>
          <HoverIcon link={github} label="GitHub" Icon={FaCode} />
          <HoverIcon link={demo} label="Demo" Icon={IoMdEye} />
        </div>
      </div>

      <div className={textContainerStyles}>
        <h3 className={titleStyles}>{name}</h3>
        <p className={descriptionStyles}>{description}</p>
      </div>
    </div>
  );
}
