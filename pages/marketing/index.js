import Layout from '@/components/Layout';
import Popup from '@/components/Popup';
import Image from 'next/image';
import React, { useState } from 'react';
import noimg from '@/public/butiks/loaderImg.png';
import Link from 'next/link';
import { BsFilePdf } from 'react-icons/bs';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Marketing() {
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
      src: '/butiks/loaderImg.png',
      alt: 'Изображение 1',
    },
    {
      id: 2,
      src: '/butiks/loaderImg.png',
      alt: 'Изображение 2',
    },
    {
      id: 3,
      src: '/butiks/loaderImg.png',
      alt: 'Изображение 3',
    },
  ];

  return (
    <Layout title="Рекламодателям">
      <section className="mt-10">
        <div className="lg:container mx-auto px-4 lg:px-0">
          <h1 className="title_main mt-10">Рекламодателям</h1>
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
            <p>Приглашаем Вас стать частью ТРК «СИТИ ЦЕНТР».</p>
          </div>
          <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-8 sm:px-0">
            {foto.map(({ id, src, alt }) => (
              <li
                onClick={() => test(id, src, alt)}
                key={id}
                className="h-full w-full relative overflow-hidden cursor-pointer"
              >
                <Image
                  src={src}
                  alt={alt}
                  width={420}
                  height={200}
                  sizes="100%"
                  className="object-cover ease-in duration-200 hover:scale-105 m-auto"
                  priority
                />
              </li>
            ))}
          </ul>

          <Link
            href="#"
            target="_blank"
            className="text-xl sm:text-3xl md:text-4xl border-2 p-2 border-zinc-300 inline-flex my-10 items-center mx-4 sm:mx-0"
          >
            <BsFilePdf className="mr-4 text-3xl" />
            Презентация по рекламным возможностям ТРК «СИТИ ЦЕНТР»
          </Link>

          <h2 className="title_main mt-10">Контакты</h2>
          <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 mt-5 md:mt-0">
            <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:h-[100px] lg:h-[120px]">
              ОТДЕЛ РЕКЛАМЫ,<br></br> МАРКЕТИНГА И PR
            </h4>
            <ul>
              <li className="flex flex-row w-fill items-center mt-1">
                <FaPhoneAlt className="text-xl mr-5" />
                <Link href="tel:88612134844" className="text-lg md:text-xl">
                  +7 (861) 213 48 44
                </Link>
              </li>
              <li className="flex flex-row w-fill items-center mt-1">
                <FaPhoneAlt className="text-xl mr-5" />
                <Link href="tel:89189370965" className="text-lg md:text-xl">
                  +7 (918) 937 09 65
                </Link>
              </li>
              <li className="flex flex-row w-fill items-center mt-1">
                <MdEmail className="text-xl mr-5" />
                <Link
                  href="mailto:ADMINCC@CITYCENTER.RU"
                  className="text-lg md:text-xl"
                >
                  ADMINCC@CITYCENTER.RU
                </Link>
              </li>
              <li className="flex flex-row w-fill items-center mt-1">
                <h4 className="text-lg md:text-xl">
                  ОТДЕЛ РЕКЛАМЫ, МАРКЕТИНГА И PR ГОТОВ ПРЕДОСТАВИТЬ САМЫЕ
                  ШИРОКИЕ ВОЗМОЖНОСТИ ДЛЯ ПРОДВИЖЕНИЯ ВАШЕГО БРЕНДА НА
                  ТЕРРИТОРИИ ТРК «СИТИ ЦЕНТР»
                </h4>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Popup isOpen={isOpen} setOpen={setOpen}>
        <div className="flex flex-col justify-center font-classic w-full p-4 sm:p-10 bg-[#1e191a] ">
          <Image
            src={isModal.src}
            alt={isModal.alt}
            width={1200}
            height={0}
            className="w-11/12 sm:w-11/12 m-auto"
          />
        </div>
      </Popup>
    </Layout>
  );
}

export default Marketing;
