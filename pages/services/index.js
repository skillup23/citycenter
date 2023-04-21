// import ImageLink from '@/components/ImageLink';
// import Layout from '@/components/Layout';
// import Link from 'next/link';
// import React from 'react';
// import services1 from '@/public/services/играторияЛого.png';

// function Services() {
//   return (
//     <Layout title="Сервисы">
//       <section className="mt-10">
//         <div className="container mx-auto">
//           <h1 className="title_main mt-20">Сервисы</h1>
//           <div className="flex justify-center items-center my-24 gap-36">
//             <Link
//               href="/"
//               className="w-1/3 h-fill text-5xl ease-in duration-200 hover:scale-105 text-center"
//             >
//               ХИМЧИСТКА<br></br> «ПРЕМИУМ»
//             </Link>
//             <ImageLink href="/" src={services1} alt="Игратория" />
//             <div className="w-1/3"></div>
//           </div>
//         </div>
//       </section>
//     </Layout>
//   );
// }

// export default Services;

import React from 'react';
import Layout from '@/components/Layout';
import ImageLink from '@/components/ImageLink';

//получаем данные бутиков с локального api
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

const Services = ({ butiks }) => {
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
