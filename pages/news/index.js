import Layout from '@/components/Layout';
import React from 'react';
import { useState } from 'react';
import news1 from '@/public/news/1.jpg';
import news2 from '@/public/news/2.jpg';
import news3 from '@/public/news/3.jpg';
import news4 from '@/public/news/4.jpg';
import Image from 'next/image';

const news = [
  {
    id: 1,
    img: news1,
    title: 'Заголовок 1',
    text: 'тест 1',
  },
  {
    id: 2,
    img: news2,
    title: 'Заголовок 2',
    text: 'тест 2',
  },
  {
    id: 3,
    img: news3,
    title: 'Заголовок 3',
    text: 'тест 3',
  },
  {
    id: 4,
    img: news4,
    title: 'Заголовок 4',
    text: 'тест 4',
  },
];

function News() {
  const [isOpen, setOpen] = useState(false);

  return (
    <Layout title="НОВОСТИ">
      <section className="mt-10 relative">
        <div className="container mx-auto">
          <h1 className="title_main mt-10">НОВОСТИ</h1>
          <ul className="grid gap-4 grid-cols-4">
            {news
              .map(({ id, img }) => (
                <li
                  onClick={() => setOpen(true)}
                  key={id}
                  className="h-96 w-full relative overflow-hidden cursor-pointer"
                >
                  <Image
                    src={img}
                    alt="Новость"
                    fill
                    className="object-cover ease-in duration-200 hover:scale-105"
                    priority
                  />
                </li>
              ))
              .reverse()}
          </ul>
        </div>
      </section>
      <div
        onClick={() => setOpen(false)}
        className={`absolute w-full h-full top-0 left-0 bg-black/[.9] z-50 ${
          isOpen ? 'block' : 'hidden'
        } `}
      ></div>
    </Layout>
  );
}

export default News;
