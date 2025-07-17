import { CameraIcon } from "@heroicons/react/24/solid";

import React from "react";

function UploadAvatar({ className, name,label, type, value, onChange }) {
  return (
    <>
      <label
        htmlFor="avatar"
        className={`cursor-pointer gap-x-3 p-2 mt-4 text-secondary-0 max-w-sm font-semibold rounded-full bg-primary-600 flex ${className} justify-center`}
      >
        {label}
        <CameraIcon className="w-6 text-secondary-0 h-6" />
        <input
          name={name}
          id="avatar"
          onChange={onChange}
          className="sr-only"
          type={type}
          value={value}
        />
      </label>
    </>
  );
}

export default UploadAvatar;
