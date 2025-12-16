import Layout from '@/components/Layout';
import Popup from '@/components/Popup';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useCallback, useEffect } from 'react';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';

function ImageGallery({ title, array, linkBegin, linkEnd, linkCloud }) {
  //открытие и закрытие попапа
  const [isOpen, setOpen] = useState(false);
  //показ выбранной фотографии в попапе
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  //первоначальная загрузка blur
  const [loadedImages, setLoadedImages] = useState({});
  //прелоадером для изображения в модалке
  const [modalImageLoaded, setModalImageLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  //фкц срабатывает во время onLoadingComplete компонента Image, после которой происходит анимация появления всех фото
  const onLoadCallback = useCallback((index) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  }, []);

  //фнц открытия попапа, так же задает какое фото подгружать
  function openPopup(index) {
    setCurrentImageIndex(index);
    setOpen(true);
    setModalImageLoaded(false);
  }

  function nextImage() {
    if (currentImageIndex + 1 >= array.length) return;
    setIsLoading(true);
    setModalImageLoaded(false);
    setCurrentImageIndex((prev) => {
      if (prev + 1 >= array.length) {
        return 0;
      }
      return prev + 1;
    });
  }

  function prevImage() {
    if (currentImageIndex - 1 < 0) return;
    setIsLoading(true);
    setModalImageLoaded(false);
    setCurrentImageIndex((prev) => {
      if (prev - 1 < 0) {
        return array.length - 1;
      }
      return prev - 1;
    });
  }

  // Сбрасываем состояние загрузки при открытии/закрытии модалки
  useEffect(() => {
    if (!isOpen) {
      setModalImageLoaded(false);
      setIsLoading(false);
    }
  }, [isOpen]);

  // Получаем текущее изображение для попапа
  const currentImage = array[currentImageIndex];

  // Обработчик загрузки изображения в модалке
  const handleModalImageLoad = () => {
    setModalImageLoaded(true);
    setIsLoading(false);
  };

  return (
    <Layout title={title}>
      <section className="mt-10">
        <div className="container mx-auto">
          <h2 className="title_main mt-10">{title}</h2>

          <ul className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 px-4 sm:px-0 mt-4">
            {array.map((item, index) => (
              <li
                onClick={() => openPopup(index)}
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
                    loadedImages[index]
                      ? 'scale-100 bg-gray-400 blur-0'
                      : 'scale-120 blur-2xl'
                  }`}
                  loading="lazy"
                  //запуск анимации blur
                  onLoadingComplete={() => onLoadCallback(index)}
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
          {(isLoading || !modalImageLoaded) && (
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
          )}
          {/* Предыдущее изображение (скрытое) для прелоада */}
          {array.length > 1 && currentImageIndex > 0 && (
            <div className="hidden">
              <Image
                src={`${linkBegin}${array[currentImageIndex - 1]}${linkEnd}`}
                alt="preload"
                width={10}
                height={10}
                loading="eager"
              />
            </div>
          )}

          {/* Следующее изображение (скрытое) для прелоада */}
          {array.length > 1 && currentImageIndex < array.length - 1 && (
            <div className="hidden">
              <Image
                src={`${linkBegin}${array[currentImageIndex + 1]}${linkEnd}`}
                alt="preload"
                width={10}
                height={10}
                loading="eager"
              />
            </div>
          )}

          {/* Основное изображение в модалке */}
          <Image
            src={`${linkBegin}${currentImage}${linkEnd}`}
            alt={`Фото ${currentImageIndex + 1}`}
            width="0"
            height="0"
            sizes="(max-width: 768px) 95vw, 90vw"
            className={`m-auto w-auto max-h-[90vh] z-[57] transition-opacity duration-300 ${
              modalImageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            priority={true}
            onLoadingComplete={handleModalImageLoad}
          />
        </div>

        {/* Кнопки навигации */}
        {array.length > 1 && modalImageLoaded && !isLoading && (
          <>
            <AiOutlineArrowRight
              className={`absolute right-5 top-1/2 text-4xl cursor-pointer z-[57] text-white bg-black/50 p-3 rounded-full hover:bg-black/70 transition-all duration-300 hover:scale-110 ${
                currentImageIndex === array.length - 1
                  ? 'opacity-50 cursor-not-allowed'
                  : ''
              }`}
              onClick={() =>
                currentImageIndex < array.length - 1 && nextImage()
              }
            />
            <AiOutlineArrowLeft
              className={`absolute left-5 top-1/2 text-4xl cursor-pointer z-[57] text-white bg-black/50 p-3 rounded-full hover:bg-black/70 transition-all duration-300 hover:scale-110 ${
                currentImageIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              onClick={() => currentImageIndex > 0 && prevImage()}
            />
          </>
        )}

        {/* Индикатор текущей позиции */}
        {array.length > 1 && modalImageLoaded && !isLoading && (
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-[57] text-white bg-black/70 px-3 py-1 rounded-full backdrop-blur-sm">
            {currentImageIndex + 1} / {array.length}
          </div>
        )}
      </Popup>
    </Layout>
  );
}

export default ImageGallery;
