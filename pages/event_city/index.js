import Layout from '@/components/Layout';
import React from 'react';
import ImageLink from '@/components/ImageLink';
import event1 from '@/public/event_city/Flamenko/1.jpg';
import event2 from '@/public/event_city/Vesna/1.jpg';
// import event3 from '@/public/event_city/OtherCinema/1.jpg';
// import event4 from '@/public/event_city/Champion/1.jpg';
import event5 from '@/public/event_city/1_june/1.jpg';
import eventText from '@/public/event_city/смотреть-фотоотчет.png';
import Link from 'next/link';
import Image from 'next/image';

function EventCity() {
  return (
    <Layout title="МЕРОПРИЯТИЯ">
      <section className="mt-10">
        <div className="lg:container mx-auto">
          <h2 className="title_main mt-10">МЕРОПРИЯТИЯ</h2>

          <div className="flex mt-2 sm:mt-14 flex-wrap gap-y-6 sm:gap-y-14">
            {/* <div className="w-full sm:w-1/2 md:w-1/3 px-1 md:px-10 flex flex-col items-center mt-10 sm:mt-0">
              <ImageLink
                href="/event_city/other_cinema"
                src={event3}
                width="72"
                alt="Другое кино"
                cssClass=""
              />
              <h4 className="text-center text-2xl md:text-4xl mt-3 sm:mt-6">
                ДРУГОЕ КИНО
              </h4>
              <Link href="/event_city/other_cinema">
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
                href="/event_city/champion"
                src={event4}
                width="72"
                alt="Как воспитать чемпиона"
                cssClass=""
              />
              <h4 className="text-center text-2xl md:text-4xl mt-3 sm:mt-6">
                КАК ВОСПИТАТЬ ЧЕМПИОНА
              </h4>
              <Link href="/event_city/champion">
                <Image
                  src={eventText}
                  alt="Событие 1"
                  width={300}
                  sizes="100%"
                  className="hover:scale-95 ease-in duration-200 m-auto mt-3 sm:mt-6"
                />
              </Link>
            </div> */}

            <div className="w-full sm:w-1/2 md:w-1/3 px-1 md:px-10 flex flex-col items-center mt-10 sm:mt-0">
              <ImageLink
                href="/event_city/1_june"
                src={event5}
                width="72"
                alt="Дунь защиты детей"
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
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default EventCity;
