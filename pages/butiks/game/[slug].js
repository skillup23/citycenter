import React from 'react';
import Layout from '@/components/Layout';
import Butik from '@/components/Butik';
import { butiks as allButiks } from '@/public/data/butiks';

export const getServerSideProps = async (context) => {
  // context.params.slug теперь ловит и текстовый адрес, и старый id
  const param = context.params.slug;

  const data =
    allButiks.find(
      (b) =>
        b.slug === param || b.url === param || String(b.id) === String(param),
    ) ?? null;

  if (!data) {
    return { notFound: true };
  }

  // Если пользователь зашел по старому id (/butiks/women_clothing/2),
  // делаем мгновенный серверный 301-редирект на /butiks/women_clothing/twinset-milano
  if (String(data.id) === String(param) && data.slug) {
    return {
      redirect: {
        destination: `/butiks/women_clothing/${data.slug}`,
        permanent: true, // 301 редирект для поисковиков
      },
    };
  }

  return {
    props: { butik: data },
  };
};

//и передаем объект в компонент Butik
function Game({ butik }) {
  return (
    <Layout title={butik.name || butik.slug}>
      <Butik butik={butik} />
    </Layout>
  );
}

export default Game;
