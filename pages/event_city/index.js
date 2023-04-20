import Layout from '@/components/Layout';
import React from 'react';
import ImageLink from '@/components/ImageLink';
import event1 from '@/public/event_city/Flamenko/1.jpg';
import event2 from '@/public/event_city/Vesna/1.jpg';
import eventText from '@/public/event_city/смотреть-фотоотчет.png';

function EventCity() {
  return (
    <Layout title="МЕРОПРИЯТИЯ">
      <section className="mt-10">
        <div className="container mx-auto">
          <h2 className="title_main mt-10">МЕРОПРИЯТИЯ</h2>

          <div className="flex mt-14">
            <div className="w-1/3 px-10 flex flex-col items-center">
              <ImageLink
                href="/event_city/foto_flamenko/"
                src={event1}
                width="full"
                alt="Фламенко"
                cssClass=""
              />
              <h4 className="text-center text-4xl mt-6">
                ФОТОВЫСТАВКА «ФЛАМЕНКО»
              </h4>
              <ImageLink
                href="/event_city/foto_flamenko/"
                src={eventText}
                width="2/3"
                alt="Фламенко"
                cssClass="m-auto mt-6"
              />
            </div>

            <div className="w-1/3 px-10 flex flex-col items-center">
              <ImageLink
                href="/event_city/vesna_v_citycenter/"
                src={event2}
                width="full"
                alt="Фламенко"
                cssClass=""
              />
              <h4 className="text-center text-4xl mt-6">
                ВЕСНА В ТРК «СИТИ ЦЕНТР»
              </h4>
              <ImageLink
                href="/event_city/vesna_v_citycenter/"
                src={eventText}
                width="2/3"
                alt="Весна в ТРК «СИТИ ЦЕНТР»"
                cssClass="m-auto mt-6"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default EventCity;
