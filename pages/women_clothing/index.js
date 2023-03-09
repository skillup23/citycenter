import Layout from '@/components/Layout';
import Link from 'next/link';
import React from 'react';

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
      <ul>
        {butiks &&
          butiks.map(({ id, url }) => (
            <li key={id}>
              <Link href={`/women_clothing/${id}`}>{url}</Link>
            </li>
          ))}
      </ul>
    </Layout>
  );
};

export default WomenClothing;
