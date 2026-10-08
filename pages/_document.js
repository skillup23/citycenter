import { Html, Head, Main, NextScript } from 'next/document';

// Яндекс.Метрику загружает только CookieBanner — после согласия пользователя
export default function Document() {
  return (
    <Html lang="ru">
      <Head>{/* <meta name="robots" content="noindex, nofollow" /> */}</Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
