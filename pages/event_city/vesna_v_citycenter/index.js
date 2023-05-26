import Layout from '@/components/Layout';
import Popup from '@/components/Popup';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { galleryVesna } from '@/public/data/data';

function VesnaVCitycenter() {
  const [isOpen, setOpen] = useState(false);
  const [isModal, setIsModal] = useState({
    id: 1,
    img: 'https://bit.ly/placeholder-img',
  });

  function test(img, title, text) {
    setIsModal({ img, title, text });
    setOpen(true);
  }

  return (
    <Layout title="МЕРОПРИЯТИЯ">
      <section className="mt-10">
        <div className="container mx-auto">
          <h2 className="title_main mt-10">ВЕСНА В ТРК «СИТИ ЦЕНТР»</h2>

          {/* <div className="w-full">
            <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-3 gap-x-6 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8">
              <Image
                src="https://bit.ly/placeholder-img"
                alt="Событие 1"
                width={500}
                height={500}
                sizes="100%"
                className="w-full"
              />
              
            </div>
          </div> */}

          <ul className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 px-8 sm:px-0">
            {galleryVesna.map(({ id, src }) => (
              <li
                onClick={() => test(src)}
                key={id}
                className="h-80 sm:h-96 w-full relative overflow-hidden cursor-pointer"
              >
                <Image
                  src={src}
                  alt="Фото"
                  fill
                  sizes="100%"
                  className="object-cover ease-in duration-200 hover:scale-105"
                  priority
                />
              </li>
            ))}
          </ul>

          <Link href="https://disk.yandex.ru/d/dns2FAWwmw680w" target="_blank">
            <h4 className="text-4xl mt-12">
              СКАЧАТЬ ФОТОГРАФИИ В ХОРОШЕМ КАЧЕСТВЕ
            </h4>
          </Link>
        </div>
      </section>

      <Popup isOpen={isOpen} setOpen={setOpen}>
        <div className="flex flex-col justify-center font-classic max-w-4xl p-10 bg-[#1e191a]">
          <Image
            src={isModal.img}
            alt="Фото"
            width={500}
            height={0}
            className="m-auto"
          />
        </div>
      </Popup>
    </Layout>
  );
}

export default VesnaVCitycenter;
