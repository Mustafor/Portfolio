import Image from "next/image";
import React from "react";

export default function AboutImage() {
  return (
    <div className="relative w-full max-w-[550px] h-[375px] md:h-[475px] lg:h-[550px] rounded-xl shadow-2xl hover:shadow-indigo-600 duration-300 ease-out border border-primaryGray hover:border-none dark:border-none cursor-pointer">
      <Image
        src="/about-image.png"
        alt="Image of monoblock with some items on the desk"
        className="object-cover rounded-xl"
        draggable="false"
        fill
        sizes="auto"
      />
    </div>
  );
}
