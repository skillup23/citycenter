import React from 'react';
import { useRouter } from 'next/router';
import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SliderBytik from '@/components/SliderBytik';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { BiFoodMenu } from 'react-icons/bi';
// import { BsInstagram } from 'react-icons/bs';
import Layout from './Layout';

function Butik(butik) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef && videoRef.current) {
      videoRef.current.play();
    }
  }, [videoRef]);
  //используется для кнопки назад
  const router = useRouter();
  //вытаскиваем данные из объекта
  const {
    url,
    logo,
    description1,
    description2,
    description3,
    floor,
    tel,
    telUrl,
    // instagram,
    image,
    video,
    otherInfo,
    textOtherInfo,
  } = butik.butik || {};

  //Если объекта нет, то указать что Бутика не существует и предложить вернуться назад
  if (!butik) {
    return (
      <Layout title={url}>
        <h2 className="text-3xl text-center mt-20">
          Данного бутика не существует...
        </h2>
        <div className="flex">
          <button
            type="button"
            className="bg-white py-3 px-6 text-black m-auto mt-10 text-2xl"
            onClick={() => router.back()}
          >
            Вернуться назад
          </button>
        </div>
      </Layout>
    );
  } else {
    //Возвращаем бутик
    return (
      <section className="mt-10">
        <div className="lg:container mx-auto flex flex-wrap md:flex-nowrap gap-10 px-5 md:px-0">
          <div className="w-full md:w-1/2 order-last md:order-first">
            {!video ? (
              <SliderBytik data={image} dots={true} />
            ) : (
              <video
                controls
                ref={videoRef}
                loop
                muted
                playsinline
                style={{ width: '100%', height: '100%' }}
                type="video/mp4"
                className=""
              >
                <source src={video} />
              </video>
            )}
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-between items-start pr-0 md:pr-8 pb-2">
            <Image
              src={logo}
              alt={url}
              width={200}
              height={0}
              sizes="100%"
              className="self-center w-52 h-auto"
            />
            <div className="mt-5 md:mt-0">
              <p className="text-lg sm:text-xl text-justify tracking-wide">
                {!description1
                  ? 'Описание временно отсутствует'
                  : `${description1}`}
              </p>
              <p className="text-lg sm:text-xl text-justify tracking-wide mt-6">
                {!description2 ? '' : `${description2}`}
              </p>
              <p className="text-lg sm:text-xl text-justify tracking-wide mt-6">
                {!description3 ? '' : `${description3}`}
              </p>
            </div>
            <div>
              <div className="flex flex-row w-fill items-center mt-6">
                <FaMapMarkerAlt className="text-2xl sm:text-3xl mr-5" />
                <h4 className="text-xl sm:text-2xl">{floor}</h4>
              </div>
              <div className="flex flex-row w-fill items-center mt-2">
                <FaPhoneAlt className="text-xl sm:text-2xl mr-5" />
                <Link href={telUrl} className="text-xl sm:text-2xl">
                  {tel}
                </Link>
              </div>
              {!otherInfo ? (
                ''
              ) : (
                <div className="flex flex-row w-fill items-center mt-2">
                  <BiFoodMenu className="text-xl sm:text-2xl mr-5" />
                  <Link
                    href={otherInfo}
                    className="text-xl sm:text-2xl"
                    target="_blank"
                  >
                    {textOtherInfo}
                  </Link>
                </div>
              )}

              {/* {!instagram ? (
                ''
              ) : (
                <div className="flex flex-row w-fill items-center mt-2">
                  <BsInstagram className="text-2xl sm:text-3xl mr-5" />
                  <Link
                    href={`https://www.instagram.com/${instagram}`}
                    target="_blank"
                    className="text-xl sm:text-2xl"
                  >
                    @{instagram}
                  </Link>
                </div>
              )} */}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Butik;
