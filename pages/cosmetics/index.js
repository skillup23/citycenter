import React from 'react';
import Layout from '@/components/Layout';
import ListButiks from '@/components/ListButiks';

//получаем данные бутиков с локального api
export const getStaticProps = async () => {
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

const Cosmetics = ({ butiks }) => {
  return (
    <Layout title="КОСМЕТИКА">
      <section className="mt-10 relative">
        <div className="container mx-auto">
          <h1 className="title_main mt-10">КОСМЕТИКА</h1>
          {/* Передаем данные бутиков и категорию для фильтра в компонент */}
          <ListButiks
            butiks={butiks}
            category={'cosmetics'}
            butiksUrl={'cosmetics'}
          />
        </div>
      </section>
    </Layout>
  );
};

export default Cosmetics;
