"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import {
  Paragraph,
  Heading,
  Buttons,
  MotionContainer,
} from "./components/index";
import Aos from "aos";
import "aos/dist/aos.css";

export default function HeroSection() {
  const motionContainerStyles =
    "flex-shrink-0 rounded-full bg-transparent border-2 p-7 relative before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-md before:bg-indigo-600 before:duration-300 before:ease-out shadow-2xl hover:shadow-indigo-600 hover:before:h-full hover:before:w-full hover:before:opacity-80 before:hover:rounded-full border-primaryPurple size-80 md:w-[450px] md:h-[450px]";

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <section
      data-aos="fade-down"
      className="flex gap-10 flex-col lg:flex-row md:gap-16 items-center"
    >
      <MotionContainer styles="md:mr-2 text-center md:text-left">
        <Heading />

        <Paragraph />

        <Buttons />
      </MotionContainer>

      <MotionContainer styles={motionContainerStyles}>
        <Image
          src="/hero-image.png"
          alt="Avatar"
          className="p-10 md:p-16 relative z-10 cursor-pointer "
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
          draggable="false"
          priority
        />
      </MotionContainer>
    </section>
  );
}
