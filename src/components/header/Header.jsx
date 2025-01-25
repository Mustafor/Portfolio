"use client";
import React, { useState } from "react";
import {
  MdScreenNav,
  SmallScreenNav,
  HeaderLogo,
  HamburgerMenuBtn,
} from "./components";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const listStyles =
    "block py-2 pl-3 pr-4 dark:text-primaryGray text-primaryDarkGray text-lg sm:text-xl rounded md:p-0 dark:hover:text-white hover:text-primaryPurple";

  const navLinks = [
    { id: 1, title: "About", href: "about" },
    { id: 2, title: "Projects", href: "projects" },
    { id: 3, title: "Contact", href: "contact" },
  ];

  return (
    <header className="fixed overflow-hidden top-0 left-0 right-0 z-50 max-w-screen-2xl mx-auto">
      <nav className="mx-auto border-b dark:border-[#33353F] border-primaryGray dark:bg-primaryDarkGray bg-opacity-100 bg-white ">
        <div className="flex container flex-wrap items-center justify-between mx-auto px-4 py-4 lg:py-4">
          <HeaderLogo />

          <div className="block md:hidden">
            <HamburgerMenuBtn setState={setMenuOpen} state={menuOpen} />
          </div>

          <MdScreenNav listStyles={listStyles} navLinks={navLinks} />
        </div>

        {menuOpen && (
          <SmallScreenNav navLinks={navLinks} listStyles={listStyles} />
        )}
      </nav>
    </header>
  );
}
