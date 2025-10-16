import Layout from '@/components/Layout';
import Popup from '@/components/Popup';
import noimg from '@/public/butiks/loaderImg.png';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BsFilePdf } from 'react-icons/bs';
import { FaPhoneAlt } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';
import { MdEmail } from 'react-icons/md';

function Rent() {
  const [isOpen, setOpen] = useState(false);
  const [isModal, setIsModal] = useState({
    id: 1,
    src: noimg,
    alt: 'Описание',
  });

  function test(id, src, alt) {
    setIsModal({ id, src, alt });
    setOpen(true);
  }

  const foto = [
    {
      id: 1,
      src: '/rent_img/1-5-floor.jpg',
      alt: '1 этаж',
    },
    {
      id: 2,
      src: '/rent_img/2-7-floor.jpg',
      alt: '2 этаж',
    },
    {
      id: 3,
      src: '/rent_img/3-7-floor.jpg',
      alt: '3 этаж',
    },
  ];

  return (
    <Layout title="Арендаторам">
      <section className="mt-10">
        <div className="lg:container mx-auto px-4 lg:px-0">
          <h1 className="title_main mt-10">Арендаторам</h1>
          <div className="text-lg sm:text-2xl md:text-3xl text-justify tracking-wide indent-8">
            <p>
              ТРК «СИТИ ЦЕНТР» — это сочетание изысканного шопинга, ярких
              впечатлений и эстетики. Торговый центр отличается особым составом
              арендаторов, эксклюзивно представленных в городе в премиальном
              сегменте. Показатель среднего чека ТРК «СИТИ ЦЕНТР» является самым
              высоким в городе. Нас посещают около 3500 человек в будний день и
              5000 в выходной. Также отличительной особенностью ТРК является
              высокий показатель конверсии.
            </p>
            <Link href="/rent#rent-contact">
              <div className="w-fill mt-20 py-6 bg-white text-black text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center indent-0">
                <h5>
                  ТРК «СИТИ ЦЕНТР» приглашает к&nbsp;сотрудничеству цветочные
                  магазины, кафе&nbsp;и&nbsp;рестораны
                </h5>
              </div>
            </Link>
          </div>
          <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-0 mt-10 sm:mt-20">
            {foto.map(({ id, src, alt }) => (
              <li
                onClick={() => test(id, src, alt)}
                key={id}
                className="h-full w-full relative overflow-hidden cursor-pointer"
              >
                <h3 className="text-2xl sm:text-3xl md:text-4xl text-center">
                  {alt}
                </h3>
                <Image
                  src={src}
                  alt={alt}
                  width={420}
                  height={200}
                  sizes="100%"
                  className="object-cover ease-in duration-200 hover:scale-105 m-auto mt-4"
                  priority
                />
              </li>
            ))}
          </ul>
          <h3 className="text-xl text-center sm:text-3xl md:text-4xl my-10">
            БОНУС: бесплатная рекламная поддержка в течении 2 месяцев для новых
            Арендаторов
          </h3>

          <div className="flex flex-wrap gap-6 justify-center">
            <Link
              href="/docs/Презентация СИТИЦЕНТР 26.07.2025.pdf"
              target="_blank"
              className="text-xl sm:text-3xl md:text-4xl border-2 p-2 border-zinc-300 inline-flex items-center"
            >
              <BsFilePdf className="mr-4 text-3xl" />
              Презентация ТРК «СИТИ ЦЕНТР»
            </Link>
            <Link
              href="/docs/Правила для Арендаторов ТРК «Сити Центр». Версия от 04.09.2025.pdf"
              target="_blank"
              className="text-xl sm:text-3xl md:text-4xl border-2 p-2 border-zinc-300 inline-flex items-center"
            >
              <BsFilePdf className="mr-4 text-3xl" />
              Правила для Арендаторов
            </Link>
            <Link
              href="/docs/РЕГЛАМЕНТ РАБОТ ДЛЯ АРЕНДАТОРОВ ТРК СИТИЦЕНТР. ВЕРСИЯ ОТ 25.02.2025 в2.pdf"
              target="_blank"
              className="text-xl sm:text-3xl md:text-4xl border-2 p-2 border-zinc-300 inline-flex items-center"
            >
              <BsFilePdf className="mr-4 text-3xl" />
              Регламент работ
            </Link>
          </div>

          <h2 className="title_main mt-10">Контакты</h2>
          <div className="mt-10 w-fill md:w-11/12 m-auto inline-flex flex-row flex-wrap justify-between px-6 md:px-0">
            <div className="flex flex-col w-full sm:w-1/2 md:w-1/3">
              <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:h-[100px] lg:h-[120px]">
                ТРК «СИТИ ЦЕНТР»
              </h4>
              <ul>
                <li className="flex flex-row w-fill items-center mt-1">
                  <HiLocationMarker className="text-xl mr-5" />
                  <h4 className="text-lg md:text-xl lg:text-2xl">
                    350007, Г. КРАСНОДАР, УЛ. ИНДУСТРИАЛЬНАЯ, 2
                  </h4>
                </li>
                <li className="flex flex-row w-fill items-center mt-1">
                  <FaPhoneAlt className="text-xl mr-5" />
                  <Link
                    href="tel:88612134700"
                    className="text-lg md:text-xl lg:text-2xl"
                  >
                    +7 (861) 213 47 00
                  </Link>
                </li>
                {/* <li className="flex flex-row w-fill items-center mt-1">
                  <FaPhoneAlt className="text-xl mr-5" />
                  <h4 className="text-lg md:text-xl lg:text-2xl">
                    +7 (861) 213 47 06 (ФАКС)
                  </h4>
                </li> */}
                <li className="flex flex-row w-fill items-center mt-1">
                  <MdEmail className="text-xl mr-5" />
                  <Link
                    href="mailto:INFO@CITYCENTER.RU"
                    className="text-lg md:text-xl lg:text-2xl"
                  >
                    INFO@CITYCENTER.RU
                  </Link>
                </li>
              </ul>
            </div>

            <div
              className="flex flex-col w-full sm:w-1/2 md:w-1/3 mt-10 sm:mt-0"
              id="rent-contact"
            >
              <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:h-[100px] lg:h-[120px]">
                ОТДЕЛ АРЕНДНЫХ <br></br>ОТНОШЕНИЙ
              </h4>
              <ul>
                <li className="flex flex-row w-fill items-center mt-1">
                  <FaPhoneAlt className="text-xl mr-5" />
                  <Link
                    href="tel:88612134844"
                    className="text-lg md:text-xl lg:text-2xl"
                  >
                    +7 (861) 213 48 44
                  </Link>
                </li>
                <li className="flex flex-row w-fill items-center mt-1">
                  <FaPhoneAlt className="text-xl mr-5" />
                  <Link
                    href="tel:89183500771"
                    className="text-lg md:text-xl lg:text-2xl"
                  >
                    +7 (918) 350 07 71
                  </Link>
                </li>
                <li className="flex flex-row w-fill items-center mt-1">
                  <MdEmail className="text-xl mr-5" />
                  <Link
                    href="mailto:INFO@CITYCENTER.RU"
                    className="text-lg md:text-xl lg:text-2xl"
                  >
                    INFO@CITYCENTER.RU
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col w-full sm:w-1/2 md:w-1/3"></div>
          </div>
        </div>
      </section>
      <Popup isOpen={isOpen} setOpen={setOpen}>
        <div className="flex flex-col justify-center font-classic w-full p-4 sm:p-10 bg-[#1e191a] ">
          <Image
            src={isModal.src}
            alt={isModal.alt}
            width={1100}
            height={0}
            className="w-11/12 sm:w-11/12 m-auto"
          />
        </div>
      </Popup>
    </Layout>
  );
}

export default Rent;
