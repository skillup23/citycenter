import React from 'react';
import Layout from '@/components/Layout';
import Butik from '@/components/Butik';

//получаем данные бутика с локального api
export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const response = await fetch(`http://localhost:3000/api/butiks/${id}`);
  const data = await response.json();

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
