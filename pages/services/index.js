import ImageLink from '@/components/ImageLink';
import Layout from '@/components/Layout';
import Link from 'next/link';
import React from 'react';
import services1 from '@/public/services/играторияЛого.png';

function Services() {
  return (
    <Layout title="Сервисы">
      <section className="mt-10">
        <div className="container mx-auto">
          <h1 className="title_main mt-20">Сервисы</h1>
          <div className="flex justify-center items-center my-24 gap-36">
            <Link
              href="/"
              className="w-1/3 h-fill text-5xl ease-in duration-200 hover:scale-105 text-center"
            >
              ХИМЧИСТКА<br></br> «ПРЕМИУМ»
            </Link>
            <ImageLink href="/" src={services1} alt="Игратория" />
            <div className="w-1/3"></div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Services;
