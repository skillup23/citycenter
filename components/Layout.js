import Head from "next/head";
import ButtonRight from "./ButtonRight";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children, title, description }) {
  return (
    <div className="min-h-screen flex flex-col justify-start">
      <Head>
        <title>
          {title ? title + ' - ТРК "СИТИ ЦЕНТР"' : 'ТРК "СИТИ ЦЕНТР"'}
        </title>
        <meta
          name="description"
          content={description ? description : "Официальный сайт"}
        />
        <meta name="yandex-verification" content="e9baee5e56dc6985" />
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
