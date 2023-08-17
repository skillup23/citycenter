import React from 'react';
import Layout from '@/components/Layout';
import ListButiks from '@/components/ListButiks';
import ImageLink from '@/components/ImageLink';
import restoran1 from '@/public/site_img/1-дон-базилио.png';
import restoran2 from '@/public/site_img/3-френч-кис.png';

//получаем данные бутиков с локального api
export const getServerSideProps = async () => {
  try {
    const response = await fetch(`${process.env.API_HOST}/butiks`);
    const data = await response.json();

    if (!data) {
      return {
        notFound: true,
      };
    }

    return {
      props: { butiks: data },
    };
  } catch {
    return {
      props: { butiks: null },
    };
  }
};

const Perfumery = ({ butiks }) => {
  return (
    <Layout title="РЕСТОРАНЫ И КАФЕ">
      <section className="mt-10 relative overflow-hidden min-h-[60vh]">
        <div className="lg:container mx-auto">
          <h1 className="title_main mt-10">РЕСТОРАНЫ И КАФЕ</h1>
          {/* Передаем данные бутиков и категорию для фильтра в компонент */}
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
            <ListButiks
              butiks={butiks}
              category={'kafeAndRestoran'}
              butiksUrl={'kafe'}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Perfumery;
