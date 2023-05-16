import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

function ImageLink({ href, src, alt, width, cssClass }) {
  const widthImg = width ? `w-36 sm:w-48 md:w-56` : 'w-36 sm:w-48 md:w-56';
  // const widthImg = width ? `w-${width}` : 'w-36 sm:w-56';
  const otherClass = cssClass
    ? `ease-in duration-200 hover:scale-105 ${cssClass}`
    : `ease-in duration-200 hover:scale-105`;

  return (
    <Link href={href} className={widthImg}>
      <Image
        src={src}
        alt={alt}
        // width={width ? width : '300'}
        width="0"
        height="0"
        sizes="100%"
        // className="ease-in duration-200 hover:scale-105"
        className={otherClass}
        style={{ width: 'auto', height: 'auto' }}
        priority
      />
    </Link>
  );
}

export default ImageLink;
