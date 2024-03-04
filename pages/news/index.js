import Layout from '@/components/Layout';
import React from 'react';
// import { useState } from 'react';
import news1 from '@/public/news/1.jpg';
// import news2 from '@/public/news/2.jpg';
// import news3 from '@/public/news/3.jpg';
// import news4 from '@/public/news/4-2.jpg';
import Image from 'next/image';
// import Popup from '@/components/Popup';
// import Link from 'next/link';
// import { BsFilePdf } from 'react-icons/bs';
// import documentDownload from '@/public/news/Polojenie-o-stimulirushei-akcii.docx';
// import { news } from '@/public/data/data';

function News() {
  // const [isOpen, setOpen] = useState(false);
  // const [isModal, setIsModal] = useState({
  //   id: 1,
  //   imgm: news1,
  //   text: [{ t1: '111', id: 1 }],
  // });

  // function test(imgm, title, text) {
  //   setIsModal({ imgm, title, text });
  //   setOpen(true);
  // }

  return (
    <Layout
      title="НОВОСТИ"
      description="Новогодние праздники в ТРК «СИТИ ЦЕНТР». Новогодний базар «Русские сказки»"
    >
      <section className="mt-10 relative">
        <div className="lg:container mx-auto">
          <h1 className="title_main mt-10 mb-5 sm:mb-0">НОВОСТИ</h1>
          <div className="flex flex-col sm:flex-row gap-8 items-stretch">
            <Image
              src={news1}
              alt="Новость"
              width={420}
              // height={420}
              sizes="100%"
              // className="h-[420px]"
              priority
            />
            <div className="font-classic text-base md:text-xl flex flex-col justify-between gap-12 p-4 sm:p-0 max-w-[500px]">
              <div className="flex flex-col gap-4 text-center sm:text-left">
                <p>Весна в «Эстель Адони» 🌸🌸🌸</p>
                <p>Мы ее очень ждали! И не просто так!</p>
                <p>
                  Весна - время расцветать и вдохновляться.
                  «Будь&nbsp;вдохновленной» - именно эта фраза украшает наши
                  новые весенние подарочные карты*, которые мы приготовили для
                  вас в эксклюзивном цветочном дизайне 🌷🌷🌷 Чтобы дарить и
                  получать их было еще приятнее.
                </p>
                <p>Давайте встречать весну вместе ❤</p>
              </div>
              <div className="text-sm">
                <p>
                  *Количество цветочных карт ограничено, не упустите возможность
                  порадовать своих любимых.
                </p>
                <p>**Подробности акции узнавайте у консультантов салонов.</p>
              </div>
            </div>
          </div>

          <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-8 sm:px-0">
            {/* <h3 className="text-xl md:text-2xl mt-10 mb-5 sm:mb-0">
              На данный момент новости отсутствуют. Следите за обновлениями...
            </h3> */}
            {/* {news
              .map(({ id, img, imgm, title, text }) => (
                <li
                  onClick={() => test(imgm, title, text)}
                  key={id}
                  className="h-full w-full relative overflow-hidden cursor-pointer"
                >
                  <Image
                    src={img}
                    alt="Новость"
                    width={420}
                    sizes="100%"
                    className="object-cover ease-in duration-200 hover:scale-105"
                    priority
                  />
                </li>
              ))
              .reverse()} */}
          </ul>
        </div>
      </section>
      {/* <Popup isOpen={isOpen} setOpen={setOpen}>
        <div className="flex flex-col justify-center font-classic max-w-4xl p-4 sm:p-10 bg-[#1e191a] ">
          <Image
            src={isModal.imgm}
            alt="Новость"
            width={600}
            height={0}
            className="w-7/12 sm:w-1/2 m-auto"
          />
          <h5 className="text-base sm:text-xl text-center mt-2">
            {isModal.title}
          </h5>
          {isModal.text.map(({ id, t1 }) => (
            <p key={id} className="text-sm sm:text-base text-left mt-3">
              {t1}
            </p>
          ))}
        </div>
      </Popup> */}
    </Layout>
  );
}

export default News;
