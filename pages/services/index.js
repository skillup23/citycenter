// import React, { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import ImageLink from '@/components/ImageLink';
// import { butiks } from '@/public/data/butiks';

// получаем данные бутиков с локального api Старая функция getStaticProps
export const getServerSideProps = async () => {
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

const Services = ({ butiks }) => {
  // const [butiks, setButiks] = useState(null);
  // const [isLoading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   fetch(`/api/butiks`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setButiks(data);
  //       setLoading(false);
  //     });
  // }, []);

  // if (isLoading) return <p>Loading...</p>;
  // if (!butiks) return <p>No profile data</p>;

  return (
    <Layout title="СЕРВИСЫ">
      <section className="mt-10 relative">
        <div className="container mx-auto">
          <h1 className="title_main mt-10">СЕРВИСЫ</h1>
          {/* Передаем данные бутиков и категорию для фильтра в компонент */}
          <div className="grid grid-cols-3 gap-y-12 justify-between items-center my-24 mr-32 ml-5">
            {butiks &&
              butiks
                .filter((item) => item.category === `services`) //*фильтруем по категории для отображения нужных на странице
                .map(({ id, logo, url }) => (
                  <ImageLink
                    key={id}
                    href={`/services/${id}`}
                    src={logo}
                    width={220}
                    alt={url}
                  />
                ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
