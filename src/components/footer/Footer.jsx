"use client";
import React, { useEffect } from "react";
import LogoMD from "./components/LogoMD";
import CopyrightText from "./components/CopyrightText";
import Aos from "aos";
import "aos/dist/aos.css";
import ContactLinks from "./components/ContactLinks";
import Link from "next/link";

export default function Footer() {
  const footerStyles =
    "pb-5 border-t pt-8 md:pb-2 md:pt-7 dark:border-[#33353F] border-primaryGray overflow-hidden";
  const footerWrapperStyle =
    "mx-auto text-primaryDarkGray container pb-5 px-8 flex flex-col gap-3 md:flex-row text-center items-center md:justify-between relative bg-opacity-100 z-50 h-52 text-white";

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <footer className={footerStyles}>
      <div className={footerWrapperStyle}>
        <div data-aos="fade-right">
          <LogoMD />
        </div>

        <div data-aos="fade-up" className="md:pt-20 md:pl-24">
          <CopyrightText />
        </div>

        <div data-aos="fade-left" className="flex gap-3 items-center">
          <ContactLinks />

          <a
            className="text-primaryDarkGray dark:text-primaryGray dark:hover:text-white"
            href="tel:+998938043090"
          >
            +998 94 007 13 63
          </a>
        </div>
      </div>
    </footer>
  );
}
