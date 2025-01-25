import Link from "next/link";
import React from "react";

export default function HeaderLogo() {
  return (
    <Link
      className="text-2xl md:text-5xl text-primaryDarkGray hover:text-primaryPurple dark:text-white font-semibold transition-colors duration-300"
      href="/"
    >
      RM
    </Link>
  );
}
