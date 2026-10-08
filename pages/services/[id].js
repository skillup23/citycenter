import React from 'react';
import Layout from '@/components/Layout';
import Butik from '@/components/Butik';
import { butiks as allButiks } from '@/public/data/butiks';

//данные бутика — из public/data/butiks.js
export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const data = allButiks.find((butik) => butik.id === parseInt(id)) ?? null;

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { butik: data },
  };
};

//и передаем объект в компонент Butik
function Service({ butik }) {
  return (
    <Layout title={butik.url}>
      <Butik butik={butik}></Butik>
    </Layout>
  );
}

export default Service;
