// import React, { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import ImageLink from '@/components/ImageLink';
// import { butiks } from '@/public/data/butiks';

// получаем данные бутиков с локального api Старая функция getStaticProps
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

const Services = ({ butiks }) => {
  return (
    <Layout title="СЕРВИСЫ">
      <section className="mt-10 relative">
        <div className="lg:container mx-auto">
          <h1 className="title_main mt-10">СЕРВИСЫ</h1>
          {/* Передаем данные бутиков и категорию для фильтра в компонент */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 justify-between items-center justify-items-center lg:justify-items-start my-12 md:my-24 mx-5 lg:mr-32 lg:ml-5">
            {butiks &&
              butiks
                .filter((item) => item.category === `services`) //*фильтруем по категории для отображения нужных на странице
                .map(({ id, logo, url }) => (
                  <ImageLink
                    key={id}
                    href={`/services/${id}`}
                    src={logo}
                    // width={20}
                    alt={url}
                  />
                ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
