import Link from "next/link";
import React from "react";

export default function LogoMD() {
  return (
    <Link href="/" aria-label="Home">
      <span className="text-lg lg:text-xl font-semibold text-primaryDarkGray dark:text-white hover:text-primaryPurple transition-colors duration-300">
        RM
      </span>
    </Link>
  );
}
