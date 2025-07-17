import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";

import React from "react";

function FileInput({ label, className, errors, name, type, value, onChange }) {
  return (
    <>
      <label
        htmlFor="file-input"
        className={`cursor-pointer gap-x-3 p-2 text-primary-900 border-primary-900 border-2 rounded-lg flex ${className} justify-center`}
      >
        {label}
        <ArrowUpTrayIcon className="w-5 h-5" />
        <input
          name={name}
          id="file-input"
          onChange={onChange}
          className="sr-only"
          type={type}
          value={value}
        />
      </label>
      {errors && errors[name] && (
        <span className="text-red-600 block text-xs mt-2">
          {errors[name]?.message}
        </span>
      )}
    </>
  );
}

export default FileInput;
