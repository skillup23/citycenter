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

const Books = ({ butiks }) => {
  return (
    <Layout title="КНИГИ">
      <section className="mt-10 relative overflow-hidden min-h-[60vh]">
        <div className="lg:container mx-auto">
          <h1 className="title_main mt-10">КНИГИ</h1>
          {/* Передаем данные бутиков и категорию для фильтра в компонент */}
          <ListButiks butiks={butiks} category={'books'} butiksUrl={'books'} />
        </div>
      </section>
    </Layout>
  );
};

export default Books;
