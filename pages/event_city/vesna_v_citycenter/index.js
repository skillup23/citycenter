// import ImageGallery from '@/components/ImageGallery';
import Layout from '@/components/Layout';
import React from 'react';

function VesnaVCitycenter() {
  return (
    <Layout title="МЕРОПРИЯТИЯ">
      <section className="mt-10">
        <div className="container mx-auto">
          <h2 className="title_main mt-10">ВЕСНА В ТРК «СИТИ ЦЕНТР»</h2>

          <div className="w-full">
            <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-3 gap-x-6 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8">
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
        </div>
      </section>
    </Layout>
  );
}

export default VesnaVCitycenter;
