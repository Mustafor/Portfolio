import React from "react";

export default function StatusMsg({ statusMessage, isSuccess }) {
  return (
    <div
      className={`mt-4 p-3 rounded-lg text-center text-white absolute right-0 ${
        isSuccess ? "bg-green-600" : "bg-red-600"
      }`}
    >
      {statusMessage}
    </div>
  );
}
