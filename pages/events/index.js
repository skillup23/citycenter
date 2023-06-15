import React from 'react';
import Layout from '@/components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import SliderMain from '@/components/SliderMain';
import text2 from '@/public/site_img/текст-2.png';
import logoMonitor1 from '@/public/site_img/лого-монитор.png';
import logoMonitor2 from '@/public/site_img/лого-монитор-2.png';
import eventText from '@/public/events_img/смотреть-фотоотчет.png';
import event1 from '@/public/events_img/70256957.jpg';
import event2 from '@/public/events_img/69458247.jpg';
import event3 from '@/public/events_img/event_prev3.jpg';
import { BsFillHexagonFill } from 'react-icons/bs';
import { sliderCenter } from '@/public/data/data';

function Events() {
  return (
    <Layout title="События">
      <section className="relative">
        <SliderMain data={sliderCenter} dots={true} />
        <Image
          src={text2}
          alt="slide1"
          width="0"
          height="0"
          sizes="100%"
          className="absolute top-2 sm:top-6 right-0 w-1/12"
        />
      </section>
      <section className="mt-20">
        <div className="lg:container mx-auto pr-5 flex flex-row gap-12">
          <div className="pl-3">
            <div className="flex gap-12 w-1/2 mb-12 items-start">
              <Image
                src={logoMonitor1}
                alt="Лого Монитор"
                width="200"
                height="0"
                sizes="100%"
                className=""
              />
              <Image
                src={logoMonitor2}
                alt="Лого Монитор Делюкс"
                width="150"
                height="0"
                sizes="100%"
                className=""
              />
            </div>
            <p className="mb-8 text-lg sm:text-xl">
              «МОНИТОР Сити de Luxe» — кинотеатр нового уровня, соответствующий
              актуальным трендам мирового кинопоказа и современного дизайна.
              Кинотеатр оборудован высококачественной кинопроекционной системой
              Sony Digital.Cinema 4K с функцией показа максимально чёткого
              изображения.
            </p>
            <p className="mb-8 text-lg sm:text-xl">
              В двух комфортных залах на 62 и 64 места установлены удобные
              кресла с выдвижными столиками, огромным личным пространством и
              большим расстоянием между рядами. Все кресла имеют выдвижную
              слайдер-систему. Последний ряд оборудован раскладывающимися
              креслами-реклайнерами с подставкой для ног, которые можно привести
              в полностью горизонтальное положение.
            </p>
            <p className="mb-8 text-lg sm:text-xl">
              Также у нас вы можете заказать еду из ресторана прямо в кинозал.
              Официант принесёт заказ и разместит его на столике у кресла.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-10">
        <div className="lg:container mx-auto">
          <div className="pr-5 flex flex-row flex-wrap">
            <ul className="flex flex-col pl-3 w-full sm:w-1/2 md:w-1/3">
              <li className="flex flex-row w-fill items-center">
                <BsFillHexagonFill className="text-2xl sm:text-3xl mr-5" />
                <h4 className="text-4xl sm:text-5xl">КИНОТЕАТР</h4>
              </li>
              <li className="flex flex-row w-fill items-center mt-5">
                <BsFillHexagonFill className="text-2xl sm:text-3xl mr-5 text-[#1e191a]" />
                <h4 className="text-xl sm:text-2xl">
                  УЛ. ИНДУСТРИАЛЬНАЯ, 2, ЭТАЖ 3
                </h4>
              </li>
              <li className="flex flex-row w-fill items-center mt-5">
                <BsFillHexagonFill className="text-2xl sm:text-3xl mr-5 text-[#1e191a]" />
                <Link href="tel:89994120012 " className="text-xl sm:text-2xl">
                  +7 999 412 00 12
                </Link>
              </li>
              <li className="flex flex-row w-fill items-center mt-5">
                <BsFillHexagonFill className="text-2xl sm:text-3xl mr-5 text-[#1e191a]" />
                <Link
                  href="https://www.instagram.com/kinomonitor/"
                  target="_blank"
                  className="text-xl sm:text-2xl"
                >
                  @KINOMONITOR
                </Link>
              </li>
              <li className="flex flex-row w-fill items-center mt-5">
                <BsFillHexagonFill className="text-2xl sm:text-3xl mr-5 text-[#1e191a]" />
                <h4 className="text-xl sm:text-2xl">ЕЖЕДНЕВНО, 10:00-02:00</h4>
              </li>
            </ul>

            {/* <ul className="flex flex-col pl-3 w-full sm:w-1/2 mt-10 sm:mt-0">
              <li className="flex flex-row w-fill items-center">
                <BsFillHexagonFill className="text-2xl sm:text-3xl mr-5" />
                <h4 className="text-4xl sm:text-5xl">ОТДЕЛЫ РЕКЛАМЫ</h4>
              </li>
              <li className="flex flex-row w-fill items-center mt-5">
                <BsFillHexagonFill className="text-2xl sm:text-3xl mr-5 text-[#1e191a]" />
                <h4 className="text-xl sm:text-2xl">
                  УЛ. ИНДУСТРИАЛЬНАЯ, 2, ЭТАЖ 2
                </h4>
              </li>
              <li className="flex flex-row w-fill items-center mt-5">
                <BsFillHexagonFill className="text-2xl sm:text-3xl mr-5 text-[#1e191a]" />
                <Link href="tel:88612134847" className="text-xl sm:text-2xl">
                  8 861 213-48-47
                </Link>
              </li>
              <li className="flex flex-row w-fill items-center mt-5">
                <BsFillHexagonFill className="text-2xl sm:text-3xl mr-5 text-[#1e191a]" />
                <Link href="tel:88612134842" className="text-xl sm:text-2xl">
                  8 (861) 213-48-42
                </Link>
              </li>
            </ul> */}
          </div>
        </div>
      </section>
      <section className="my-20">
        <div className="lg:container mx-auto flex md:gap-6 flex-wrap md:flex-nowrap">
          <div className="flex flex-col gap-4 sm:gap-6 w-full sm:w-1/2 md:w-1/3 px-3 md:px-0">
            <Link href="https://geo.pro/reportage/509063-master-klass-i-chapurin-tendentsii-mody-2019/?sphrase_id=394720">
              <Image
                src={event1}
                alt="Событие 1"
                width="100%"
                sizes="100%"
                className="w-full"
              />
            </Link>
            <h4 className="text-2xl">
              МАСТЕР-КЛАСС I.CHAPURIN «ТЕНДЕНЦИИ МОДЫ 2019»
            </h4>
            <Link href="https://geo.pro/reportage/509063-master-klass-i-chapurin-tendentsii-mody-2019/?sphrase_id=394720">
              <Image
                src={eventText}
                alt="Событие 1"
                width={300}
                sizes="100%"
                className="hover:scale-95 ease-in duration-200"
              />
            </Link>
          </div>
          <div className="flex flex-col gap-4 sm:gap-6 w-full sm:w-1/2 md:w-1/3 px-3 md:px-0 mt-14 sm:mt-0">
            <Link href="https://geo.pro/reportage/523593-fashion-cinema-de-luxe/?sphrase_id=394720">
              <Image
                src={event2}
                alt="Событие 1"
                width="100%"
                sizes="100%"
                className="w-full"
              />
            </Link>
            <div className="flex flex-col gap-4 sm:gap-6 justify-between h-full">
              <h4 className="text-2xl">#WEEKEND С НАДЕЖДОЙ МЕЙХЕР</h4>
              <Link href="https://geo.pro/reportage/523593-fashion-cinema-de-luxe/?sphrase_id=394720">
                <Image
                  src={eventText}
                  alt="Событие 1"
                  width={300}
                  sizes="100%"
                  className="hover:scale-95 ease-in duration-200 justify-self-end"
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:gap-6 w-full sm:w-1/2 md:w-1/3 px-3 md:px-0 mt-14 md:mt-0">
            <Link href="https://geo.pro/reportage/522435-fashion-cinema-de-luxe/?sphrase_id=394720">
              <Image
                src={event3}
                alt="Событие 1"
                width="100%"
                sizes="100%"
                className="w-full"
              />
            </Link>
            <h4 className="text-2xl">
              МАСТЕР-КЛАСС I.CHAPURIN «ТЕНДЕНЦИИ МОДЫ 2019»
            </h4>
            <Link href="https://geo.pro/reportage/522435-fashion-cinema-de-luxe/?sphrase_id=394720">
              <Image
                src={eventText}
                alt="Событие 1"
                width={300}
                sizes="100%"
                className="hover:scale-95 ease-in duration-200"
              />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Events;
