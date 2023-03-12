import React from "react";
import Slider from "react-slick";
import Image from "next/image";

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
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul style={{ margin: "30px" }}> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div
        style={{
          width: "5px",
          height: "5px",
          borderRadius: "50px",
          backgroundColor: "#ddd",
        }}
      ></div>
    ),
  };
  return (
    <section>
      <Slider {...settings}>
        {data.map(({ id, src, alt }) => (
          <div key={id} className='h-[70vh] relative overflow-hidden'>
            <Image
              src={src}
              alt={alt}
              fill
              cover
              sizes='100vw'
              className='object-cover'
              priority
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default SliderBytik;
