import React from 'react';
import Layout from '@/components/Layout';
import ListButiks from '@/components/ListButiks';

//получаем данные буков с локальной api
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

const Children = ({ butiks }) => {
  return (
    <Layout title="Детское">
      <section className="mt-10 relative">
        <div className="container mx-auto">
          <h1 className="title_main mt-10">Детское</h1>
          {/* Передаем данные бутиков и категорию для фильтра в компонент */}
          <ListButiks
            butiks={butiks}
            category={'children'}
            butiksUrl={'children'}
          />
        </div>
      </section>
    </Layout>
  );
};

export default Children;