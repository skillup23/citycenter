import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

const SliderVipAvenue = ({ data }) => {
  const settings = {
    dots: true,
    arrows: true,
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
          padding: '0px',
        }}
      >
        <ul style={{ margin: '10px' }}> {dots} </ul>
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
          <div key={id} className="relative">
            <Image
              src={src}
              alt={alt}
              width="0"
              height="0"
              sizes="100vw"
              // sizes="(max-width: 768px) 100vw,
              // (max-width: 1200px) 100vw,
              // 100vw"
              className="w-full sm:w-2/5 h-auto mx-auto"
              priority
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default SliderVipAvenue;
