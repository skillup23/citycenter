import nofon from "@/public/site_img/nofon-shop.png";
import Image from "next/image";
import Link from "next/link";

// const shopList = [
//   {
//     id: 1,
//     title: 'Женская одежда',
//     link: '/butiks/women_clothing',
//     url: 'bg-[url("../public/site_img/shops/1.jpg")]',
//   },
//   {
//     id: 2,
//     title: 'Мужская одежда',
//     link: '/butiks/men_clothing',
//     url: 'bg-[url("../public/site_img/shops/2.jpg")]',
//   },
//   {
//     id: 3,
//     title: 'Для детей',
//     link: '/butiks/children',
//     url: 'bg-[url("../public/site_img/shops/3.jpg")]',
//   },
//   {
//     id: 4,
//     title: 'Купальники и нижнее белье',
//     link: '/butiks/underwear',
//     url: 'bg-[url("../public/site_img/shops/4.jpg")]',
//   },
//   {
//     id: 5,
//     title: 'Ювелирные изделия и часы',
//     link: '/butiks/clocks',
//     url: 'bg-[url("../public/site_img/shops/5.jpg")]',
//   },
//   {
//     id: 6,
//     title: 'Обувь и сумки',
//     link: '/butiks/shoes_and_bags',
//     url: 'bg-[url("../public/site_img/shops/6.jpg")]',
//   },
//   {
//     id: 7,
//     title: 'КОСМЕТИКА И ПАРФЮМЕРИЯ',
//     link: '/butiks/cosmetics',
//     url: 'bg-[url("../public/site_img/shops/7.jpg")]',
//   },
//   {
//     id: 8,
//     title: 'Интерьер',
//     link: '/butiks/interior',
//     url: 'bg-[url("../public/site_img/shops/8.jpg")]',
//   },
//   {
//     id: 9,
//     title: 'Подарки и книги',
//     link: '/butiks/gifts_and_books',
//     url: 'bg-[url("../public/site_img/shops/9.jpg")]',
//   },
//   {
//     id: 10,
//     title: 'Очки и аксессуары',
//     link: '/butiks/glasses',
//     url: 'bg-[url("../public/site_img/shops/10.jpg")]',
//   },
//   {
//     id: 11,
//     title: 'РЕСТОРАНЫ И КАФЕ',
//     link: '/butiks/kafe',
//     url: 'bg-[url("../public/site_img/shops/11.jpg")]',
//   },
//   {
//     id: 12,
//     title: 'Развлечения',
//     link: '/butiks/game',
//     url: 'bg-[url("../public/site_img/shops/12.jpg")]',
//   },
// ];

function ShopListMain({ items, classItem }) {
  return (
    <div
      className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 w-full ${classItem}`}
    >
      {items.map(({ id, title, link, url }) => {
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
              style={{ width: "100%", height: "100%" }}
              priority
            />
            <div
              className={`background_scale duration-300 text-center text-2xl md:text-3xl sm:text-4xl p-6 ${url}`}
            >
              {/* {title} */}
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ShopListMain;
