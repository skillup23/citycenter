import Layout from '@/components/Layout';
import React from 'react';
import ImageLink from '@/components/ImageLink';
// import Event from '@/components/ImageLink';
// import event1 from '@/public/event_city/Flamenko/1.jpg';
// import event2 from '@/public/event_city/Vesna/1.jpg';
// import event3 from '@/public/event_city/OtherCinema/1.jpg';
// import event4 from '@/public/event_city/Pasxa/1.jpg';
// import event5 from '@/public/event_city/1_june/1.jpg';
// import event6 from '@/public/event_city/Birthday/1.jpg';
// import event7 from '@/public/event_city/KUBAN_DESIGNSTORE_open/1.jpg';
// import event8 from '@/public/event_city/ModniyBrend/1.jpg';
// import event9 from '@/public/event_city/StarsInCity/1.jpg';
import eventText from '@/public/event_city/смотреть-фотоотчет.png';
import { eventArray } from '@/public/data/data';
import Link from 'next/link';
import Image from 'next/image';

function EventCity() {
  return (
    <Layout title="МЕРОПРИЯТИЯ">
      <section className="mt-10">
        <div className="lg:container mx-auto">
          <h2 className="title_main mt-10">МЕРОПРИЯТИЯ</h2>

          <div className="flex mt-2 sm:mt-14 flex-wrap gap-y-6 sm:gap-y-14">
            {eventArray.map((item) => (
              <div
                className="w-full sm:w-1/2 md:w-1/3 px-1 md:px-10 flex flex-col items-center mt-10 sm:mt-0"
                key={item.id}
              >
                <ImageLink
                  href={item.link}
                  src={item.img}
                  width="72"
                  alt={item.text}
                  cssClass=""
                  target={item.target}
                />

                <h4 className="max-w-[432px] text-center text-3xl md:text-4xl mt-3 sm:mt-6 overflow-hidden whitespace-nowrap text-ellipsis">
                  {item.text}
                </h4>
                <Link href={item.link}>
                  <Image
                    src={eventText}
                    alt="Событие 1"
                    width={300}
                    sizes="100%"
                    className="m-auto mt-3 sm:mt-6 hover:scale-95 ease-in duration-200"
                    target={item.target}
                  />
                </Link>
              </div>
            ))}

            {/* <div className="w-full sm:w-1/2 md:w-1/3 px-1 md:px-10 flex flex-col items-center mt-10 sm:mt-0">
              <ImageLink
                href="/event_city/stars_in_city/"
                src={event9}
                width="72"
                alt="Звезды в Сити"
                cssClass=""
              />

              <h4 className="text-center text-2xl md:text-4xl mt-3 sm:mt-6">
                Звезды в Сити
              </h4>
              <Link href="/event_city/stars_in_city/">
                <Image
                  src={eventText}
                  alt="Событие 1"
                  width={300}
                  sizes="100%"
                  className="hover:scale-95 ease-in duration-200 m-auto mt-3 sm:mt-6"
                />
              </Link>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 px-1 md:px-10 flex flex-col items-center mt-10 sm:mt-0">
              <ImageLink
                href="/event_city/day_young_brand/"
                src={event8}
                width="72"
                alt="День Модного Бренда"
                cssClass=""
              />
              <h4 className="text-center text-2xl md:text-4xl mt-1 sm:mt-1">
                День модного бренда
              </h4>
              <h4 className="text-center text-2xl md:text-2xl mt-1 sm:mt-1">
                C Ксенией Генераленко Дата 27.07.2024
              </h4>
              <Link href="/event_city/day_young_brand/">
                <Image
                  src={eventText}
                  alt="Событие 1"
                  width={300}
                  sizes="100%"
                  className="hover:scale-95 ease-in duration-200 m-auto mt-2 sm:mt-2"
                />
              </Link>
            </div> */}

            {/* <div className="w-full sm:w-1/2 md:w-1/3 px-1 md:px-10 flex flex-col items-center mt-10 sm:mt-0">
              <ImageLink
                href="https://geometria.ru/reportage/786030-kuban-design-store-otkrytie/"
                src={event7}
                width="72"
                alt="KUBAN DESIGNSTORE OPEN"
                cssClass=""
                target="_blank"
              />
              <h4 className="text-center text-2xl md:text-4xl mt-3 sm:mt-6">
                KUBAN DESIGNSTORE OPEN
              </h4>
              <Link
                href="https://geometria.ru/reportage/786030-kuban-design-store-otkrytie/"
                target="_blank"
              >
                <Image
                  src={eventText}
                  alt="Событие 1"
                  width={300}
                  sizes="100%"
                  className="hover:scale-95 ease-in duration-200 m-auto mt-3 sm:mt-6"
                />
              </Link>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 px-1 md:px-10 flex flex-col items-center mt-10 sm:mt-0">
              <ImageLink
                href="https://geometria.ru/reportage/782706-paskhalnye-master-klassy-v-trk-siti-tsentr/"
                src={event4}
                width="72"
                alt="Пасхальный мастер класс"
                cssClass=""
                target="_blank"
              />
              <h4 className="text-center text-2xl md:text-4xl mt-3 sm:mt-6">
                Пасхальный мастер класс
              </h4>
              <Link
                href="https://geometria.ru/reportage/782706-paskhalnye-master-klassy-v-trk-siti-tsentr/"
                target="_blank"
              >
                <Image
                  src={eventText}
                  alt="Событие 1"
                  width={300}
                  sizes="100%"
                  className="hover:scale-95 ease-in duration-200 m-auto mt-3 sm:mt-6"
                />
              </Link>
            </div> */}

            {/* <div className="w-full sm:w-1/2 md:w-1/3 px-1 md:px-10 flex flex-col items-center mt-10 sm:mt-0">
              <ImageLink
                href="/event_city/birthday"
                src={event6}
                width="72"
                alt="День рождения сити центра"
                cssClass=""
              />
              <h4 className="text-center text-2xl md:text-4xl mt-3 sm:mt-6">
                ДЕНЬ РОЖДЕНИЯ СИТИ ЦЕНТРА
              </h4>
              <Link href="/event_city/birthday">
                <Image
                  src={eventText}
                  alt="Событие 1"
                  width={300}
                  sizes="100%"
                  className="hover:scale-95 ease-in duration-200 m-auto mt-3 sm:mt-6"
                />
              </Link>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 px-1 md:px-10 flex flex-col items-center mt-10 sm:mt-0">
              <ImageLink
                href="/event_city/1_june"
                src={event5}
                width="72"
                alt="День защиты детей"
                cssClass=""
              />
              <h4 className="text-center text-2xl md:text-4xl mt-3 sm:mt-6">
                ДЕНЬ ЗАЩИТЫ ДЕТЕЙ
              </h4>
              <Link href="/event_city/1_june">
                <Image
                  src={eventText}
                  alt="Событие 1"
                  width={300}
                  sizes="100%"
                  className="hover:scale-95 ease-in duration-200 m-auto mt-3 sm:mt-6"
                />
              </Link>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 px-1 md:px-10 flex flex-col items-center mt-10 sm:mt-0">
              <ImageLink
                href="/event_city/flamenko/"
                src={event1}
                width="72"
                alt="Фламенко"
                cssClass=""
              />
              <h4 className="text-center text-2xl md:text-4xl mt-3 sm:mt-6">
                ФОТОВЫСТАВКА «ФЛАМЕНКО»
              </h4>
              <Link href="/event_city/flamenko/">
                <Image
                  src={eventText}
                  alt="Событие 1"
                  width={300}
                  sizes="100%"
                  className="hover:scale-95 ease-in duration-200 m-auto mt-3 sm:mt-6"
                />
              </Link>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 px-1 md:px-10 flex flex-col items-center mt-10 sm:mt-0">
              <ImageLink
                href="/event_city/vesna_v_citycenter/"
                src={event2}
                width="72"
                alt="Весна"
                cssClass=""
              />
              <h4 className="text-center text-2xl md:text-4xl mt-3 sm:mt-6">
                ВЕСНА В ТРК «СИТИ ЦЕНТР»
              </h4>
              <Link href="/event_city/vesna_v_citycenter/">
                <Image
                  src={eventText}
                  alt="Событие 1"
                  width={300}
                  sizes="100%"
                  className="hover:scale-95 ease-in duration-200 m-auto mt-3 sm:mt-6"
                />
              </Link>
            </div> */}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default EventCity;
