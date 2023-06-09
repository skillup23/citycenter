import Layout from '@/components/Layout';
import Popup from '@/components/Popup';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { june } from '@/public/data/data';

function June() {
  const [isOpen, setOpen] = useState(false);
  const [isModal, setIsModal] = useState(1);

  function openPopup(item) {
    setIsModal(item);
    setOpen(true);
  }

  return (
    <Layout title="ДЕНЬ ЗАЩИТЫ ДЕТЕЙ">
      <section className="mt-10">
        <div className="container mx-auto">
          <h2 className="title_main mt-10">ДЕНЬ ЗАЩИТЫ ДЕТЕЙ</h2>

          <ul className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 px-8 sm:px-0 mt-4">
            {june.map((item) => (
              <li
                onClick={() => openPopup(item)}
                key={item}
                className="h-80 sm:h-96 w-full relative overflow-hidden cursor-pointer"
              >
                <Image
                  src={`https://thumb.cloud.mail.ru/weblink/thumb/xw1/Ru3j/CZ6AJNw8A/foto%20%28${item}%29.jpg`}
                  alt="Фото"
                  fill
                  sizes="100%"
                  className="object-cover ease-in duration-200 hover:scale-105"
                  priority
                />
              </li>
            ))}
          </ul>

          <Link href="https://disk.yandex.ru/d/2friRrVMLOp54Q" target="_blank">
            <h4 className="text-4xl mt-12">
              СКАЧАТЬ ФОТОГРАФИИ В ХОРОШЕМ КАЧЕСТВЕ
            </h4>
          </Link>
        </div>
      </section>

      <Popup isOpen={isOpen} setOpen={setOpen}>
        <div className="flex flex-col justify-center font-classic max-w-4xl p-10 bg-[#1e191a]">
          <Image
            src={`https://thumb.cloud.mail.ru/weblink/thumb/xw1/Ru3j/CZ6AJNw8A/foto%20%28${isModal}%29.jpg`}
            alt="Фото"
            width="0"
            height="0"
            sizes="100%"
            className="m-auto w-auto max-h-[80vh]"
          />
        </div>
      </Popup>
    </Layout>
  );
}

export default June;
