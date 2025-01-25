import React from "react";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

export default function HamburgerMenuBtn({ setState, state }) {
  return (
    <button
      onClick={() => {
        setState(!state);
      }}
      className="flex items-center px-3 py-2 border-2 rounded border-primaryDarkGray text-primaryDarkGray hover:text-primaryPurple hover:border-primaryPurple dark:border-slate-200 dark:text-slate-200 dark:hover:text-white dark:hover:border-white"
    >
      {state ? <RxCross2 /> : <FiMenu />}
    </button>
  );
}
