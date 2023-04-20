import Image from 'next/image';
import { useState } from 'react';

const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

function ImageGallery() {
  const [isLoading, setLoading] = useState(false);

  return (
    <div
      onClick={() => setLoading(true)}
      className="w-full cursor-pointer aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8"
    >
      <Image
        alt=""
        src="https://bit.ly/placeholder-img"
        width="0"
        height="0"
        sizes="60%"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
        style={{ width: 'auto', height: 'auto' }}
        className="group-hover:opacity-75"
      />
      <div className="">
        <Image
          alt=""
          src="https://bit.ly/placeholder-img"
          width="0"
          height="0"
          sizes="100%"
          className="group-hover:opacity-75"
        />
      </div>
    </div>
  );
}

export default ImageGallery;
