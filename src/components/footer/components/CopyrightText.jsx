import Link from "next/link";
import React from "react";

export default function CopyrightText() {
  return (
    <p className="dark:text-primaryGray text-primaryDarkGray md:text-lg">
      Crafted with passion by{" "}
      {/* <Link
        href="https://t.me/Musayev_Doniyor"
        className="underline hover:no-underline hover:text-primaryPurple"
      >
      </Link> */}
      Mustafo. <br /> <span>© 2025.</span>
    </p>
  );
}
