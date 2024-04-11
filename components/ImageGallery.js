import Layout from '@/components/Layout';
import Popup from '@/components/Popup';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';

function ImageGallery({ title, array, linkBegin, linkEnd, linkCloud }) {
  //открытие и закрытие попапа
  const [isOpen, setOpen] = useState(false);
  //показ выбранной фотографии в попапе
  const [isModal, setIsModal] = useState(1);
  //первоначальная загрузка blur
  const [isReady, setIsReady] = useState(false);

  //фкц срабатывает во время onLoadingComplete компонента Image, после которой происходит анимация появления всех фото
  const onLoadCallback = () => {
    setIsReady(true);
  };

  //фнц открытия попапа, так же задает какое фото подгружать
  function openPopup(item) {
    setIsModal(item);
    setOpen(true);
  }

  return (
    <Layout title={title}>
      <section className="mt-10">
        <div className="container mx-auto">
          <h2 className="title_main mt-10">{title}</h2>

          <ul className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 px-4 sm:px-0 mt-4">
            {array.map((item) => (
              <li
                onClick={() => openPopup(item)}
                key={item}
                className="h-80 sm:h-96 w-full relative overflow-hidden cursor-pointer"
              >
                <Image
                  src={`${linkBegin}${item}${linkEnd}`}
                  alt="Фото"
                  fill
                  sizes="(max-width: 768px) 40vw, 30vw"
                  //в классах дополнительно прописываются анимации blur и смена их при изменении стейта isReady
                  className={`object-cover ease-in hover:scale-105 bg-gray-400 transition duration-1000 ${
                    isReady
                      ? 'scale-100 bg-gray-400 blur-0'
                      : 'scale-120 blur-2xl'
                  }`}
                  loading="lazy"
                  //запуск анимации blur
                  onLoadingComplete={onLoadCallback}
                />
              </li>
            ))}
          </ul>

          <Link href={linkCloud} target="_blank">
            <h4 className="text-4xl mt-12">
              СКАЧАТЬ ФОТОГРАФИИ В ХОРОШЕМ КАЧЕСТВЕ
            </h4>
          </Link>
        </div>
      </section>

      <Popup isOpen={isOpen} setOpen={setOpen}>
        <div className="flex flex-col justify-center font-classic w-[100vw] h-[100vh] p-2 sm:p-10 bg-[#1e191a]">
          {/* анимация загрузчика, как при переходе по страницам. Находиться за основным контентом */}
          <div className="absolute text-3xl inset-x-0 z-[56]">
            <div className="preloader-4">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <Image
            src={`${linkBegin}${array[isModal - 1]}${linkEnd}`}
            alt="Фото"
            width="0"
            height="0"
            sizes="(max-width: 768px) 95vw, 90vw"
            className="m-auto w-auto max-h-[90vh] z-[57]"
          />
        </div>
        <AiOutlineArrowRight
          className="absolute right-5 top-1/2 text-3xl cursor-pointer z-[57]"
          onClick={() => setIsModal(isModal + 1)}
        />
        <AiOutlineArrowLeft
          className={`absolute left-5 top-1/2 text-3xl cursor-pointer z-[57] ${
            isModal === 1 ? 'hidden' : 'block'
          }`}
          onClick={() => setIsModal(isModal - 1)}
        />
      </Popup>
    </Layout>
  );
}

export default ImageGallery;
