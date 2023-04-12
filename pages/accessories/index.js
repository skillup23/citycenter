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

const Accessories = ({ butiks }) => {
  return (
    <Layout title="УКРАШЕНИЯ И АКСЕССУАРЫ">
      <section className="mt-10 relative">
        <div className="container mx-auto">
          <h1 className="title_main mt-10">УКРАШЕНИЯ И АКСЕССУАРЫ</h1>
          {/* Передаем данные бутиков и категорию для фильтра в компонент */}
          <ListButiks
            butiks={butiks}
            category={'accessories'}
            butiksUrl={'accessories'}
          />
        </div>
      </section>
    </Layout>
  );
};

export default Accessories;
