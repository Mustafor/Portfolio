import Link from "next/link";
import React from "react";
import { ThemeToggle } from "@/components";

export default function SmallScreenNav({ navLinks, listStyles }) {
  return (
    <div className="md:hidden">
      <div className="flex p-2">
        <div className="flex flex-col mx-auto">
          <ul className="flex flex-col py-4 items-center">
            {navLinks.map((link) => (
              <li key={link.id} className={listStyles}>
                <Link href={`#${link.href}`}>{link.title}</Link>
              </li>
            ))}
          </ul>

          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
