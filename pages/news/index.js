import Layout from '@/components/Layout';
import React from 'react';
import { useState } from 'react';
import news1 from '@/public/news/1.jpg';
// import news2 from '@/public/news/2.jpg';
// import news3 from '@/public/news/3.jpg';
// import news4 from '@/public/news/4.jpg';
import Image from 'next/image';
import Popup from '@/components/Popup';
import { news } from '@/public/data/data';

function News() {
  const [isOpen, setOpen] = useState(false);
  const [isModal, setIsModal] = useState({
    id: 1,
    imgm: news1,
    text: [{ t1: '111', id: 1 }],
  });

  function test(imgm, title, text) {
    setIsModal({ imgm, title, text });
    setOpen(true);
  }

  return (
    <Layout title="НОВОСТИ">
      <section className="mt-10 relative">
        <div className="lg:container mx-auto">
          <h1 className="title_main mt-10 mb-5 sm:mb-0">НОВОСТИ</h1>
          <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 px-8 sm:px-0">
            {news
              .map(({ id, img, imgm, title, text }) => (
                <li
                  // onClick={() => setOpen(true)}
                  onClick={() => test(imgm, title, text)}
                  key={id}
                  className="h-80 sm:h-96 w-full relative overflow-hidden cursor-pointer"
                >
                  <Image
                    src={img}
                    alt="Новость"
                    fill
                    sizes="100%"
                    className="object-cover ease-in duration-200 hover:scale-105"
                    priority
                  />
                </li>
              ))
              .reverse()}
          </ul>
        </div>
      </section>
      <Popup isOpen={isOpen} setOpen={setOpen}>
        <div className="flex flex-col justify-center font-classic max-w-4xl p-4 sm:p-10 bg-[#1e191a]">
          <Image
            src={isModal.imgm}
            alt="Новость"
            width={600}
            height={0}
            className="w-10/12 sm:w-1/2 m-auto"
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
      </Popup>
    </Layout>
  );
}

export default News;
