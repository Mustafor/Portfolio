import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function AnimationHeading() {
  return (
    <h1 className="dark:text-white text-primaryDarkGray mb-4 text-4xl lg:text-7xl lg:leading-normal font-extrabold">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
        Hello, I&apos;m
      </span>

      <br />

      <span>
        <TypeAnimation
          sequence={[
            "Mustafo",
            1000,
            "Web Developer",
            1000,
            "Creative Thinker",
            1000,
          ]}
          wrapper="span"
          repeat={Infinity}
        />
      </span>
    </h1>
  );
}
