import Link from "next/link";
import React from "react";

export default function ProjectIconHover({ link, Icon, label }) {
  return (
    <Link
      className="h-14 w-14 border-2 rounded-full border-primaryGray hover:border-white flex items-center justify-center mx-2"
      href={link}
      aria-label={label}
    >
      <Icon className="size-8 text-primaryGray group-hover:text-white" />
    </Link>
  );
}
