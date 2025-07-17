import Image from "next/image";
import React from "react";

function Avatar({ alt, src, size = 24 }) {
  return (
    <Image
      alt={"user-avatar"}
      src={src || "/images/avatar.png"}
      width={size}
      height={size}
      className="rounded-full ring-1 ring-secondary-200"
    />
  );
}

export default Avatar;
