import ImageLink from '@/components/ImageLink';
import Layout from '@/components/Layout';
import React from 'react';
import restoran1 from '@/public/site_img/1-дон-базилио.png';
import restoran2 from '@/public/site_img/3-френч-кис.png';

function Restoran() {
  return (
    <Layout title="РЕСТОРАНЫ">
      <section className="mt-10 relative">
        <div className="lg:container mx-auto">
          <h1 className="title_main mt-10">РЕСТОРАНЫ</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 justify-between items-center justify-items-center lg:justify-items-start my-12 md:my-24 mx-5 lg:mr-32 lg:ml-5">
            <ImageLink
              href="http://donbazilio.ru/"
              src={restoran1}
              alt="Дон Базилио"
            />
            <ImageLink
              href="https://frenchkiss.ru/stores/"
              src={restoran2}
              alt="French kiss"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Restoran;
