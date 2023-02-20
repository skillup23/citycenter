import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import SliderMain from "@/components/SliderMain";
import text1 from "@/public/site_img/текст-1.png";
import event1 from "@/public/site_img/event1.png";
import event2 from "@/public/site_img/event2.png";
import event3 from "@/public/site_img/event3.png";
import event4 from "@/public/site_img/event4.png";
import nofon from "@/public/site_img/nofon-shop.png";

const shopList = [
  {
    id: 1,
    title: "Женская одежда",
    link: "/",
    url: 'bg-[url("../public/site_img/shop-1.png")]',
  },
  {
    id: 1,
    title: "Мужская одежда",
    link: "/",
    url: 'bg-[url("../public/site_img/shop-1.png")]',
  },
  {
    id: 1,
    title: "Детское",
    link: "/",
    url: 'bg-[url("../public/site_img/shop-1.png")]',
  },
  {
    id: 1,
    title: "Белье",
    link: "/",
    url: 'bg-[url("../public/site_img/shop-1.png")]',
  },
];

export default function Home() {
  return (
    <Layout title='Главная'>
      <SliderMain />
      <section className='border_section border-b-0'>
        <div className='container mx-auto pr-5'>
          <h2 className='title_main text-right mt-12'>СЦЕНАРИИ</h2>

          <Image
            src={text1}
            alt='slide1'
            width='0'
            height='0'
            sizes='100vw'
            className='w-3/5 h-auto block ml-auto mt-2'
            priority
          />

          <p className='w-2/5 text-right ml-auto subtitle_main mt-8'>
            ТРК “СИТИ ЦЕНТР” — место притяжения успешных людей. В комплексе
            представлено большое количество премиальных брендов с разнообразным
            ассортиментом, рестораны итальянской кухни и VIP-кинотеатр. В ТРК
            «СИТИ ЦЕНТР» вы с удовольствием проведёте время в комфортной
            обстановке спокойствия и люксового шоппинга.
          </p>

          <div className='flex flex-row mt-10'>
            <Link href='/' className='flex flex-col items-center -mt-96 z-10'>
              <Image
                src={event1}
                alt='событие 1'
                width={450}
                className='ease-in duration-300 grayscale hover:grayscale-0'
                priority
              />
              <div className='bg-white max-w-xs -mt-12 z-20'>
                <p className='text-center text-2xl text-black py-4 px-4'>
                  Проведите романтическое <br></br>свидание
                </p>
              </div>
            </Link>

            <Link href='/' className='flex flex-col items-center -mx-28 -mt-36'>
              <Image
                src={event2}
                alt='событие 2'
                width={700}
                className='ease-in duration-300 grayscale hover:grayscale-0'
                priority
              />
              <div className='bg-white max-w-xs -mt-12 z-20'>
                <p className='text-center text-2xl text-black py-4 px-5'>
                  Семейный праздник и <br></br>десткий день рождения
                </p>
              </div>
            </Link>

            <Link href='/' className='flex flex-col items-center -mt-10'>
              <Image
                src={event3}
                alt='событие 3'
                width={500}
                className='ease-in duration-300 grayscale hover:grayscale-0'
                priority
              />
              <div className='bg-white max-w-xs -mt-12 z-20'>
                <p className='text-center text-2xl text-black py-4 px-5'>
                  Приготовьтесь <br></br>к особому случаю
                </p>
              </div>
            </Link>

            <Link href='/' className='flex flex-col items-center -ml-10 mt-10'>
              <Image
                src={event4}
                alt='событие 4'
                width={500}
                className='ease-in duration-300 grayscale hover:grayscale-0'
                priority
              />
              <div className='bg-white max-w-xs -mt-12 z-20'>
                <p className='text-center text-2xl text-black py-4 px-5'>
                  Проведите <br></br>деловую встречу
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div className='container mx-auto'>
          <h2 className='title_main mt-12'>БУТИКИ</h2>
          <div className='grid grid-cols-4 w-full'>
            {shopList.slice(0, 4).map(({ id, title, link, url }) => {
              return (
                <Link
                  key={id}
                  href={link}
                  className='block relative w-full overflow-hidden h-full'
                >
                  <Image
                    src={nofon}
                    alt={title}
                    width='0'
                    height='0'
                    style={{ width: "100%", height: "100%" }}
                    priority
                  />
                  <div className={`background_scale text-4xl p-6 ${url}`}>
                    {title}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      <section></section>
    </Layout>
  );
}
