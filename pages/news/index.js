import Layout from '@/components/Layout';
import React from 'react';
import { useState } from 'react';
import news1 from '@/public/news/1.jpg';
import news2 from '@/public/news/2.jpg';
// import news3 from '@/public/news/3.jpg';
// import news4 from '@/public/news/4.jpg';
import Image from 'next/image';

const news = [
  {
    id: 1,
    img: news1,
    title: ['🔥3000 бонусов от Эстель Адони🔥'],
    text: [
      {
        id: 1,
        t: 'В новом сезоне продолжаем радовать Вас прекрасными новостями и подарками! Всем, кто совершил покупку в период летней распродажи, Эстель Адони дарит 3000 бонусов! Потратить их можно уже сегодня, до 16 октября 2022 года на товары из новых и базовых коллекций.',
      },
      {
        id: 2,
        t1: 'В бутик уже поступили роскошные новинки сезона от ваших любимых брендов!',
      },
      {
        id: 3,
        t1: '*Оплатить подарочными бонусами можно 20% от чека на новые и базовые коллекции!',
      },
    ],
  },
  {
    id: 2,
    img: news2,
    title: ['Бутик «Дикая Орхидея» дарит новогодние подарки✨'],
    text: [
      {
        id: 1,
        t: 'При покупке от 20.000 рублей дарим один из подарков: набор аксессуаров для волос из шелка, маску для сна из шелка или натуральную ароматическую свечу💫',
      },
      {
        id: 2,
        t1: 'Коллекции премиального женского белья «Дикая Орхидея» сшиты из высококачественных материалов и предоставляют возможность дома выглядеть элегантно и утонченно🕊️',
      },
    ],
  },
  // {
  //   id: 3,
  //   img: news3,
  //   title: ['💥Зимний SALE в «Эстель Адони»💥'],
  //   text: [
  //     {
  //       id: 1,
  //       t: 'Новый год начинается с хорошей новости! С 17 января в салоне «Эстель Адони» стартует долгожданная зимняя распродажа. Вас ждут скидки до -40% на белье, купальники, одежду для дома, отдыха и пляжа!',
  //     },
  //     {
  //       id: 2,
  //       t1: 'Для вас — любимые базовые комплекты на каждый день, эффектное кружево для особых случаев, натуральный хлопок для сна и потрясающий шелк для роскошного вечера.',
  //     },
  //     {
  //       id: 3,
  //       t1: 'Также порадуют вас приятными ценами купальники на любой вкус и тип фигуры, круизные коллекции платьев, сарафанов и туник, а также всевозможные аксессуары для путешествий мечты.',
  //     },
  //   ],
  // },
  // {
  //   id: 4,
  //   img: news4,
  //   title: [
  //     'Весна – время расцвета и обновления!',
  //     <br key={1} />,
  //     'В природе, душе и гардеробе!',
  //   ],
  //   text: [
  //     {
  //       id: 1,
  //       t: 'Встречаем новинки весны в сочных оттенках красного, желтого, розового и голубого. Наряду с ними на модный олимп снова врывается белый. Стилисты рекомендуют этой весной непременно пополнить свою коллекцию белья кристально-белыми и ванильными комплектами.',
  //     },
  //     {
  //       id: 2,
  //       t1: 'Особенно трендовым становится белье с элементами прозрачности – как в комплектах для особого случая, так и на каждый день. Актуальна и вечная классика – цветочное кружево и изысканная вышивка.',
  //     },
  //     {
  //       id: 3,
  //       t1: 'Пляжные коллекции 2023 года наполнены вдохновляющими на путешествия оттенками моря, тропической зелени, ярких цветов и спелых фруктов. Для вас — купальники на одно плечо, бандо, мини-бикини для роскошного загара, а также множество платьев, туник и сарафанов!',
  //     },
  //   ],
  // },
];

function News() {
  const [isOpen, setOpen] = useState(false);
  const [isModal, setIsModal] = useState({
    id: 1,
    img: news1,
    text: [{ t1: '111', id: 1 }],
  });

  function test(img, title, text) {
    setIsModal({ img, title, text });
    setOpen(true);
  }

  return (
    <Layout title="НОВОСТИ">
      <section className="mt-10 relative">
        <div className="lg:container mx-auto">
          <h1 className="title_main mt-10">НОВОСТИ</h1>
          <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 px-8 sm:px-0">
            {news
              .map(({ id, img, title, text }) => (
                <li
                  // onClick={() => setOpen(true)}
                  onClick={() => test(img, title, text)}
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
      <div
        onClick={() => setOpen(false)}
        className={`absolute w-full h-full top-0 left-0 bg-black/[.9] flex items-center justify-center z-50 ${
          isOpen ? 'block' : 'hidden'
        } `}
      >
        <div className="flex flex-col justify-center font-classic max-w-3xl p-8 bg-[#1e191a]">
          <Image
            src={isModal.img}
            alt="Новость"
            width={400}
            height={0}
            className="m-auto"
          />
          <h5 className="text-xl text-center mt-3">{isModal.title}</h5>
          {isModal.text.map(({ id, t1 }) => (
            <p key={id} className="text-base text-left mt-3">
              {t1}
            </p>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default News;
