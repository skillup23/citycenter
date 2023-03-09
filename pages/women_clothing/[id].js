import React from 'react';
import Layout from '@/components/Layout';
import { useRouter } from 'next/router';

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

function ButikWomen({ butik }) {
  const router = useRouter();
  const { url, description1, description2 } = butik || {};
  //   const { street, suite, city, zipcode } = address || {};

  if (!butik) {
    return (
      <Layout title={url}>
        <h2 className="text-3xl text-center mt-20">
          Данного бутика не существует...
        </h2>
        <div className="flex">
          <button
            type="button"
            className="bg-white py-3 px-6 text-black m-auto mt-10 text-2xl"
            onClick={() => router.back()}
          >
            Вернуться назад
          </button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={url}>
      <div>{description1}</div>
      <div>{description2}</div>
    </Layout>
  );
}

export default ButikWomen;
