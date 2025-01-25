import React from "react";

export default function FormInput({
  type,
  name,
  value,
  handleFunc,
  placeholder,
}) {
  const inputStyle =
    "w-full p-3 rounded-lg dark:bg-[#18191E] border border-[#33353F] focus:border-none text-sm text-primaryDarkGray dark:text-gray-100 placeholder-primaryGray focus:outline-none focus:ring-2 focus:ring-primaryPurple dark:border-[#444950] dark:placeholder-[#d0d4d9]";

  return (
    <>
      {name !== "message" ? (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={handleFunc}
          required
          className={inputStyle}
          placeholder={placeholder}
        />
      ) : (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={handleFunc}
          required
          className={`resize-none ${inputStyle}`}
          placeholder={placeholder}
          rows={3}
        />
      )}
    </>
  );
}
