import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';

function Error() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  });

  return (
    <Layout title="404">
      <h1 className="title_main text-center mt-20">404</h1>
      <h2 className="text-xl text-center">Данная страница не существует.</h2>
      <h2 className="text-xl text-center">
        Вы будете перенаправленны на Главную...
      </h2>
    </Layout>
  );
}

export default Error;
