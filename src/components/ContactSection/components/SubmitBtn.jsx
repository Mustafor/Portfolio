import React from "react";

export default function SubmitBtn() {
  return (
    <button
      type="submit"
      className="w-full px-6 py-3 relative rounded-lg overflow-hidden border-2 font-bold border-primaryPurple text-primaryPurple dark:text-white shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-md before:bg-indigo-600 before:duration-300 before:ease hover:text-white hover:shadow-indigo-600 hover:before:h-full hover:before:w-full hover:before:opacity-80"
    >
      <span className="relative z-10">Send Message</span>
    </button>
  );
}
