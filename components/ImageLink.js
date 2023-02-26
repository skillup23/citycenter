import Link from "next/link";
import React from "react";
import Image from "next/image";

function ImageLink({ href, src, alt }) {
  return (
    <Link href={href}>
      <Image
        src={src}
        alt={alt}
        width='300'
        height='0'
        sizes='100%'
        className='ease-in duration-200 hover:scale-105'
      />
    </Link>
  );
}

export default ImageLink;
