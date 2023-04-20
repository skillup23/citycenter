import React from 'react';
import Layout from '@/components/Layout';
import ListButiks from '@/components/ListButiks';

//получаем данные бутиков с локального api
export const getStaticProps = async () => {
  const response = await fetch('http://localhost:3000/api/butiks');
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { butiks: data },
  };
};

const ShoesAndBags = ({ butiks }) => {
  return (
    <Layout title="ОБУВЬ И СУМКИ">
      <section className="mt-10 relative">
        <div className="container mx-auto">
          <h1 className="title_main mt-10">ОБУВЬ И СУМКИ</h1>
          {/* Передаем данные бутиков и категорию для фильтра в компонент */}
          <ListButiks
            butiks={butiks}
            category={'shoesAndBags'}
            butiksUrl={'shoes_and_bags'}
          />
        </div>
      </section>
    </Layout>
  );
};

export default ShoesAndBags;
