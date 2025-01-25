import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function ContactLinks() {
  return (
    <div className="flex gap-6">
      <Link
        href="https://github.com/Mustafor"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-[#171515] text-white rounded-full hover:scale-110 transition-transform duration-200"
      >
        <FaGithub className="text-3xl" />
      </Link>
    </div>
  );
}
