import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

//Прелоадер изображений svg
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

//разобраться что это, к Прелоадеру
const toBase64 = (str) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

const SliderBytik = ({ data, dots }) => {
  const settings = {
    dots: dots,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: '10px',
          padding: '10px',
        }}
      >
        <ul style={{ margin: '30px' }}> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div
        style={{
          width: '5px',
          height: '5px',
          borderRadius: '50px',
          backgroundColor: '#ddd',
        }}
      ></div>
    ),
  };
  return (
    <section>
      <Slider {...settings}>
        {data.map(({ id, src, alt }) => (
          <div
            key={id}
            className="h-[30vh] sm:h-[50vh] md:h-[70vh] relative overflow-hidden"
          >
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 100vw,
              100vw"
              className="object-cover"
              priority
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(700, 475)
              )}`}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default SliderBytik;
