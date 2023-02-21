import React from 'react';
import nofon from '@/public/site_img/nofon-shop.png';
import Link from 'next/link';
import Image from 'next/image';

const shopList = [
  {
    id: 1,
    title: 'Женская одежда',
    link: '/',
    url: 'bg-[url("../public/site_img/shop-1.png")]',
  },
  {
    id: 2,
    title: 'Мужская одежда',
    link: '/',
    url: 'bg-[url("../public/site_img/shop-2.png")]',
  },
  {
    id: 3,
    title: 'Детское',
    link: '/',
    url: 'bg-[url("../public/site_img/shop-3.png")]',
  },
  {
    id: 4,
    title: 'Белье',
    link: '/',
    url: 'bg-[url("../public/site_img/shop-4.png")]',
  },
  {
    id: 5,
    title: 'Украшение и аксессуары',
    link: '/',
    url: 'bg-[url("../public/site_img/shop-5.png")]',
  },
  {
    id: 6,
    title: 'Обувь и сумки',
    link: '/',
    url: 'bg-[url("../public/site_img/shop-6.png")]',
  },
  {
    id: 7,
    title: 'Косметика',
    link: '/',
    url: 'bg-[url("../public/site_img/shop-7.png")]',
  },
  {
    id: 8,
    title: 'Интерьер',
    link: '/',
    url: 'bg-[url("../public/site_img/shop-8.png")]',
  },
  {
    id: 9,
    title: 'Цветы и подарки',
    link: '/',
    url: 'bg-[url("../public/site_img/shop-9.png")]',
  },
  {
    id: 10,
    title: 'Очки',
    link: '/',
    url: 'bg-[url("../public/site_img/shop-10.png")]',
  },
  {
    id: 11,
    title: 'Книги',
    link: '/',
    url: 'bg-[url("../public/site_img/shop-11.png")]',
  },
  {
    id: 12,
    title: 'Парфюмерия',
    link: '/',
    url: 'bg-[url("../public/site_img/shop-12.png")]',
  },
];

function ShopListMain() {
  return (
    <div className="grid grid-cols-4 w-full">
      {shopList.map(({ id, title, link, url }) => {
        return (
          <Link
            key={id}
            href={link}
            className="block relative w-full overflow-hidden h-full"
          >
            <Image
              src={nofon}
              alt={title}
              width="0"
              height="0"
              style={{ width: '100%', height: '100%' }}
              priority
            />
            <div
              className={`background_scale duration-300 text-center text-4xl p-6 ${url}`}
            >
              {title}
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ShopListMain;
