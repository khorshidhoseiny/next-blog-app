import Image from "next/image";
import Link from "next/link";
import React from "react";

function CoverImage({ coverImageUrl, title, slug }) {
  return (
    <div className="relative mb-3 rounded-md overflow-hidden aspect-video">
      <Link href={`/blogs/${slug}`}>
        <Image
          fill
          src={coverImageUrl}
          alt={title}
          quality={90}
          className="object-cover object-center transition-all  duration-300 hover:scale-110 ease-out"
        />
      </Link>
    </div>
  );
}

export default CoverImage;
