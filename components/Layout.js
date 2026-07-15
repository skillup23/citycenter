import Head from 'next/head';
import ButtonRight from './ButtonRight';
import Footer from './Footer';
import Header from './Header';
import CookieBanner from './CookieBanner';

function Layout({ children, title, description, isHome = false }) {
  // Логика для формирования Title
  let finalTitle = 'ТРК "СИТИ ЦЕНТР" Краснодар';
  if (title) {
    // Если это главная, берем переданный тайтл целиком.
    // Если внутренняя (например, "Магазины"), то будет "Магазины - ТРК "СИТИ ЦЕНТР""
    finalTitle = isHome ? title : `${title} - ТРК "СИТИ ЦЕНТР"`;
  }

  return (
    <div className="min-h-screen flex flex-col justify-start">
      <Head>
        <title>{finalTitle}</title>
        <meta
          name="description"
          content={
            description ? description : 'Официальный сайт ТРК "СИТИ ЦЕНТР"'
          }
        />
        <meta
          name="google-site-verification"
          content="rJfuiDMY0KWs_9srXAMNQrAU5qtgCU9xsvZrJOpYaeQ"
        />
        <meta name="yandex-verification" content="e9baee5e56dc6985" />
        <link rel="icon" href="/favicon-12.ico" />

        {/* Важно для SEO: указывает поисковикам главное зеркало страницы */}
        {isHome && <link rel="canonical" href="https://www.citycenter.ru/" />}

        {/* Минимальные Open Graph теги для правильного шеринга в Telegram/WhatsApp/VK */}
        <meta property="og:title" content={finalTitle} />
        <meta
          property="og:description"
          content={description || 'Официальный сайт ТРК "СИТИ ЦЕНТР"'}
        />
        <meta
          property="og:url"
          content={isHome ? 'https://www.citycenter.ru/' : ''}
        />
        <meta property="og:type" content="website" />
      </Head>
      <Header />
      <main className="flex-auto">{children}</main>
      <Footer />
      <ButtonRight />
      <CookieBanner />
    </div>
  );
}

export default Layout;
