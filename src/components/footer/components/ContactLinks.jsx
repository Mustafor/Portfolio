import Link from "next/link";
import React from "react";
import { FaInstagram, FaTelegram } from "react-icons/fa6";

export default function ContactLinks() {
  return (
    <div className="flex gap-5 items-center">
      <Link
        href="https://t.me/rmustafo7"
        className="group"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Telegram Profile"
      >
        <span className="relative top-1 inline-block bg-transparent dark:bg-white rounded-full transition-all duration-400">
          <FaTelegram className="text-3xl transform transition-transform duration-500 group-hover:scale-110 text-[#0088cc] dark:hover:text-[#0088cc]" />
        </span>
      </Link>
    </div>
  );
}
