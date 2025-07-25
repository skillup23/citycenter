import Layout from '@/components/Layout';
import Popup from '@/components/Popup';
import VideoMain from '@/components/VideoMain';
import noimg from '@/public/butiks/loaderImg.png';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
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
      src: '/marketing_img/1-2.jpg',
      alt: 'Изображение 1',
    },
    {
      id: 2,
      src: '/marketing_img/3-2.jpg',
      alt: 'Изображение 2',
    },
    {
      id: 3,
      src: '/marketing_img/4-2.jpg',
      alt: 'Изображение 3',
    },
    {
      id: 4,
      src: '/marketing_img/5-2.jpg',
      alt: 'Изображение 4',
    },
  ];

  return (
    <Layout title="Рекламодателям">
      <section className="mt-10">
        <div className="lg:container mx-auto px-4 lg:px-0">
          <h1 className="title_main mt-10">Рекламодателям</h1>
          <div className="text-lg sm:text-2xl md:text-3xl text-justify tracking-wide indent-8">
            <p>
              ТРК «СИТИ ЦЕНТР» АКТИВНО СОТРУДНИЧАЕТ С РЕКЛАМОДАТЕЛЯМИ ДЛЯ
              УСПЕШНОГО ПРОДВИЖЕНИЯ ИХ БИЗНЕСА. ЭТО ЭФФЕКТИВНЫЙ СПОСОБ ПРИВЛЕЧ
              ВНИМАНИЕ ТЫСЯЧ ПОСЕТИТЕЛЕЙ ЕЖЕДНЕВНО. РАЗМЕЩАЙТЕ ВАШУ РЕКЛАМУ НА
              ЛАЙТБОКСАХ, БАННЕРАХ И МЕДИАЭКРАНЕ, ЧТОБЫ ОХВАТИТЬ САМУЮ
              КАЧЕСТВЕННУЮ АУДИТОРИЮ И УВЕЛИЧИТЬ СВОЮ ВИДИМОСТЬ.
            </p>
            <p>Приглашаем Вас стать частью ТРК «СИТИ ЦЕНТР».</p>
          </div>
          <div className="grid sm:gap-4 grid-cols-1 sm:grid-cols-3 mt-8">
            <VideoMain videoLink={'/marketing_img/video1.mp4'} />
            <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 px-0 col-span-2 mt-4 sm:mt-0 content-between">
              {foto.map(({ id, src, alt }) => (
                <li
                  onClick={() => test(id, src, alt)}
                  key={id}
                  className="h-full w-full relative overflow-hidden cursor-pointer"
                >
                  <Image
                    src={src}
                    alt={alt}
                    width={500}
                    height={200}
                    sizes="100%"
                    className="object-cover ease-in duration-200 hover:scale-105 m-auto"
                    priority
                  />
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="/marketing_img/KatalogMarketing.pdf"
            alt="Каталог рекламных поверхностей"
            rel="noopener noreferrer"
            locale="false"
            target="_blank"
            className="text-xl sm:text-3xl md:text-4xl border-2 p-2 border-zinc-300 inline-flex my-10 items-center mx-4 sm:mx-0"
          >
            <BsFilePdf className="mr-4 text-3xl" />
            Презентация по рекламным возможностям ТРК «СИТИ ЦЕНТР»
          </Link>

          <h2 className="title_main">Контакты</h2>
          <div className="flex flex-col w-full mt-1 md:mt-0 mb-10 gap-2">
            <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              ОТДЕЛ РЕКЛАМЫ, МАРКЕТИНГА И PR
            </h4>
            <ul>
              <li className="flex flex-row w-fill items-center mt-1">
                <FaPhoneAlt className="text-xl mr-5" />
                <Link
                  href="tel:899649049146"
                  className="text-lg md:text-xl lg:text-2xl"
                >
                  +7 (964) 90 49 146
                </Link>
              </li>
              <li className="flex flex-row w-fill items-center mt-1">
                <MdEmail className="text-xl mr-5" />
                <Link
                  href="mailto:aliona.ch@expertmedia-ug.ru"
                  className="text-lg md:text-xl lg:text-2xl"
                >
                  aliona.ch@expertmedia-ug.ru
                </Link>
              </li>
              {/* <li className="flex flex-row w-fill items-center mt-1">
                <h4 className="text-lg md:text-xl lg:text-2xl">
                  Инсайд девелопмент - оператор по продаже рекламы и промо в ТРК
                  «СИТИ ЦЕНТР»
                </h4>
              </li> */}
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
