import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

function Layout({ children, title }) {
  return (
    <div className="min-h-screen flex flex-col justify-between ">
      <Head>
        <title>
          {title ? title + ' - ТРК "СИТИ ЦЕНТР"' : 'ТРК "СИТИ ЦЕНТР"'}
        </title>
        <meta name="description" content="Официальный сайт" />
        <link rel="icon" href="/favicon-9.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
