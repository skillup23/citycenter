import Image from 'next/image';
import Slider from 'react-slick';

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
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: '10px',
          padding: '10px',
        }}
      >
        <ul style={{ margin: '15px' }}> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div
        style={{
          width: '8px',
          height: '8px',
          borderRadius: '50px',
          backgroundColor: '#ddd',
        }}
      ></div>
    ),
  };
  return (
    <section className="mt-2">
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
