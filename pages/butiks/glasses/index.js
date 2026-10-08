import React from 'react';
import Layout from '@/components/Layout';
import ListButiks from '@/components/ListButiks';
import { butiks as allButiks } from '@/public/data/butiks';

//получаем данные бутиков из public/data/butiks.js
export const getServerSideProps = async () => {
  try {
    const data = allButiks;

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

const Glasses = ({ butiks }) => {
  return (
    <Layout title="ОЧКИ И АКСЕССУАРЫ">
      <section className="mt-10 relative overflow-hidden">
        <div className="lg:container mx-auto">
          <h1 className="title_main mt-10">ОЧКИ И АКСЕССУАРЫ</h1>
          {/* Передаем данные бутиков и категорию для фильтра в компонент */}
          <ListButiks
            butiks={butiks}
            category={'glasses'}
            butiksUrl={'glasses'}
          />
        </div>
      </section>
    </Layout>
  );
};

export default Glasses;
