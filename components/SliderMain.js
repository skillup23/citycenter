import React, { Component } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import slide1 from '@/public/slide_main/сайт_1-2022.jpg';
import slide2 from '@/public/slide_main/сайт_2-2022.jpg';
import slide3 from '@/public/slide_main/сайт_3-2022.jpg';

export default class SliderMain extends Component {
  render() {
    const settings = {
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
          <div>
            <Image
              src={slide3}
              alt="slide1"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto"
              priority
            />
          </div>
          <div>
            <Image
              src={slide2}
              alt="slide2"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto"
              priority
            />
          </div>
          <div>
            <Image
              src={slide1}
              alt="slide3"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto"
              priority
            />
          </div>
        </Slider>
      </section>
    );
  }
}
