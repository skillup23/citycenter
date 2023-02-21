import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

const SliderMain = ({ data, dots }) => {
  const settings = {
    dots: dots,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <section>
      <Slider {...settings}>
        {data.map(({ id, src, alt }) => (
          <div key={id}>
            <Image
              src={src}
              alt={alt}
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto"
              priority
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default SliderMain;
