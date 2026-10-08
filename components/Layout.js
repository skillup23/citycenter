import Head from 'next/head';
import { useRouter } from 'next/router';
import ButtonRight from './ButtonRight';
import Footer from './Footer';
import Header from './Header';
import CookieBanner from './CookieBanner';

const SITE = 'https://www.citycenter.ru';
const NAME = 'ТРК «Сити Центр»';
const DEFAULT_IMAGE = '/og/default.jpg';

// Сведения о ТРК для поисковиков (schema.org)
const shoppingCenter = {
  '@context': 'https://schema.org',
  '@type': 'ShoppingCenter',
  name: NAME,
  url: `${SITE}/`,
  image: SITE + DEFAULT_IMAGE,
  telephone: '+7-861-213-47-00',
  email: 'info@citycenter.ru',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'ул. Индустриальная, 2',
    addressLocality: 'Краснодар',
    addressRegion: 'Краснодарский край',
    addressCountry: 'RU',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 45.0015, longitude: 38.96194 },
  openingHours: 'Mo-Su 10:00-22:00',
  sameAs: ['https://vk.com/trkcitycentr', 'https://t.me/ciiitycenter'],
};

// «ДЛЯ ДЕТЕЙ» → «Для детей»; названия брендов из адреса: «Paul-shark» → «Paul shark»
function readable(text) {
  const t = String(text).trim().replace(/-/g, ' ');
  return t === t.toUpperCase() ? t.charAt(0) + t.slice(1).toLowerCase() : t;
}

function Layout({ children, title, description, image, isHome = false }) {
  const { asPath } = useRouter();

  // Главная передаёт заголовок целиком, внутренние — «Раздел — ТРК «Сити Центр»»
  let finalTitle = `${NAME} Краснодар`;
  if (title) finalTitle = isHome ? title : `${title} — ${NAME}`;

  const finalDescription =
    description ||
    `${readable(title || NAME)} — ${NAME} в Краснодаре, ул. Индустриальная, 2. Бутики, рестораны и кинотеатр.`;

  const path = asPath.split(/[?#]/)[0];
  const url = path === '/' ? `${SITE}/` : SITE + path;
  const imageUrl = SITE + (image || DEFAULT_IMAGE);

  return (
    <div className="min-h-screen flex flex-col justify-start">
      <Head>
        <title>{finalTitle}</title>
        <meta name="description" content={finalDescription} />
        <meta
          name="google-site-verification"
          content="rJfuiDMY0KWs_9srXAMNQrAU5qtgCU9xsvZrJOpYaeQ"
        />
        <meta name="yandex-verification" content="e9baee5e56dc6985" />
        <link rel="icon" href="/favicon-12.ico" />

        {/* Главное зеркало страницы */}
        <link rel="canonical" href={url} />

        {/* Превью ссылок в Telegram, WhatsApp, VK */}
        <meta property="og:title" content={finalTitle} />
        <meta property="og:description" content={finalDescription} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={NAME} />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(shoppingCenter) }}
        />
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
