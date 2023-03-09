import ImageLink from '@/components/ImageLink';
import Layout from '@/components/Layout';
import React from 'react';
import text from '../../public/butiks/Бренды.png';
import Image from 'next/image';

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

const WomenClothing = ({ butiks }) => {
  return (
    <Layout title="Женская одежда">
      <section className="mt-10 relative">
        <div className="container mx-auto">
          <h1 className="title_main mt-10">Женская одежда</h1>
          <div className="flex justify-between items-center my-24 mr-24">
            {butiks &&
              butiks.map(({ id, logo, url }) => (
                <ImageLink
                  key={id}
                  href={`/women_clothing/${id}`}
                  src={logo}
                  width={300}
                  alt={url}
                />
              ))}
            <Image
              src={text}
              alt="slide1"
              width="0"
              height="0"
              sizes="100%"
              className="absolute top-64 -right-5 w-1/12"
            />
          </div>
        </div>
      </section>
      <ul></ul>
    </Layout>
  );
};

export default WomenClothing;
