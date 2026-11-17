import React from 'react';
import { useRouter } from 'next/router';
import { useRef, useEffect } from 'react';
import Image from 'next/image';
import SliderBytik from '@/components/SliderBytik';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { BiFoodMenu } from 'react-icons/bi';
import { FiExternalLink } from 'react-icons/fi';
// import { BsInstagram } from 'react-icons/bs';
import Layout from './Layout';

function Butik(butik) {
  const videoRef = useRef(null);
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
    name,
    site,
  } = butik.butik || {};

  useEffect(() => {
    const el = videoRef.current;
    if (el && video) {
      el.defaultMuted = true;
      el.muted = true;
      el.play().catch(() => {
        // Игнорируем блокировку автоплея в режиме энергосбережения
      });
    }
  }, [video]);

  // 1. Нормализуем саму ссылку (добавляем https://, если забыли, и убираем пробелы)
  const normalizedSite = site
    ? site.trim().startsWith('http')
      ? site.trim()
      : `https://${site.trim()}`
    : '';

  // 2. Получаем красивый текст без протокола, www и пути
  let displayText = normalizedSite;
  if (normalizedSite) {
    try {
      displayText = new URL(normalizedSite).hostname.replace(/^www\./, '');
    } catch {
      displayText = site.trim();
    }
  }

  //Если объекта нет, то указать что Бутика не существует и предложить вернуться назад
  if (!butik?.butik) {
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
      <section className="mt-2">
        <div className="lg:container mx-auto flex flex-wrap md:flex-nowrap gap-10 px-5 md:px-0">
          <div className="w-full md:w-1/2 order-last md:order-first">
            {!video ? (
              <SliderBytik data={image} dots={true} />
            ) : (
              <video
                controls
                autoPlay
                loop
                muted
                playsInline
                ref={videoRef}
                className="w-full h-full object-cover"
              >
                <source src={video} type="video/mp4" />
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
              className="self-center w-36 h-auto"
            />
            <h1 className="text-2xl sm:text-3xl font-bold uppercase tracking-wide mt-6 mb-2 self-center md:self-start ">
              {name || url}
            </h1>

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
              <div className="flex flex-row w-full items-center mt-6">
                <FaMapMarkerAlt className="text-2xl sm:text-2xl mr-5" />
                <h4 className="text-xl sm:text-2xl">{floor}</h4>
              </div>
              {telUrl && (
                <div className="flex flex-row w-full items-center mt-2">
                  <FaPhoneAlt className="text-xl sm:text-2xl mr-5 shrink-0" />
                  <a
                    href={`tel:${telUrl}`}
                    className="text-xl sm:text-2xl hover:underline"
                  >
                    {tel}
                  </a>
                </div>
              )}

              {otherInfo && (
                <div className="flex flex-row w-full items-center mt-2">
                  <BiFoodMenu className="text-xl sm:text-2xl mr-5 shrink-0" />
                  <a
                    href={otherInfo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl sm:text-2xl hover:underline"
                  >
                    {textOtherInfo}
                  </a>
                </div>
              )}

              {normalizedSite && (
                <div className="flex flex-row w-full items-center mt-2">
                  <FiExternalLink className="text-xl sm:text-2xl mr-5 shrink-0" />
                  <a
                    href={normalizedSite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl sm:text-2xl hover:underline break-all"
                  >
                    {displayText}
                  </a>
                </div>
              )}

              {/* {!instagram ? (
                ''
              ) : (
                <div className="flex flex-row w-full items-center mt-2">
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
