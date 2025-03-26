import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import ButtonRight from './ButtonRight';

function Layout({ children, title, description }) {
  return (
    <div className="min-h-screen flex flex-col justify-start">
      <Head>
        <title>
          {title ? title + ' - ТРК "СИТИ ЦЕНТР"' : 'ТРК "СИТИ ЦЕНТР"'}
        </title>
        <meta
          name="description"
          content={description ? description : 'Официальный сайт'}
        />
        <link rel="icon" href="/favicon-12.ico" />
      </Head>
      <Header />
      <main className="flex-auto">{children}</main>
      <Footer />
      <ButtonRight />
    </div>
  );
}

export default Layout;
