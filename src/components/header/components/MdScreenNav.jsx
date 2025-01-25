import Link from "next/link";
import React from "react";
import { ThemeToggle } from "@/components";

export default function MdScreenNav({ navLinks, listStyles }) {
  return (
    <div className="hidden md:block md:w-auto" id="navbar">
      <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 items-center">
        {navLinks.map((link) => (
          <li key={link.id} className={listStyles}>
            <Link href={`#${link.href}`}>{link.title}</Link>
          </li>
        ))}

        <ThemeToggle />
      </ul>
    </div>
  );
}
