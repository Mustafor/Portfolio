import React from "react";

export default function FormLabel({ htmlfor, children }) {
  return (
    <label
      htmlFor={htmlfor}
      className="block font-medium text-primaryDarkGray dark:text-white"
    >
      {children}
    </label>
  );
}
