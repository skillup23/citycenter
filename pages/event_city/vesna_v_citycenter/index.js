// import ImageGallery from '@/components/ImageGallery';
import Layout from '@/components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function VesnaVCitycenter() {
  return (
    <Layout title="МЕРОПРИЯТИЯ">
      <section className="mt-10">
        <div className="container mx-auto">
          <h2 className="title_main mt-10">ВЕСНА В ТРК «СИТИ ЦЕНТР»</h2>

          <div className="w-full">
            <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-3 gap-x-6 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8">
              <Image
                src="https://bit.ly/placeholder-img"
                alt="Событие 1"
                width={500}
                height={500}
                sizes="100%"
                className="w-full"
              />
              {/* <ImageGallery />
              <ImageGallery />
              <ImageGallery />
              <ImageGallery />
              <ImageGallery />
              <ImageGallery />
              <ImageGallery />
              <ImageGallery /> */}
            </div>
          </div>

          <Link href="https://disk.yandex.ru/d/dns2FAWwmw680w" target="_blank">
            <h4 className="text-4xl mt-12">
              СКАЧАТЬ ФОТОГРАФИИ В ХОРОШЕМ КАЧЕСТВЕ
            </h4>
          </Link>
        </div>
      </section>
    </Layout>
  );
}

export default VesnaVCitycenter;
