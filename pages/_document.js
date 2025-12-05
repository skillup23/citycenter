/* eslint-disable @next/next/no-img-element */
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  // Скрипт Яндекс.Метрики с проверкой согласия
  const yandexMetricaScript = `
    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();
    
    // Проверяем, не отклонил ли пользователь cookie
    function checkCookieConsent() {
      var cookies = document.cookie.split('; ');
      var consent = cookies.find(row => row.startsWith('cookie_consent='))?.split('=')[1];
      var disabled = cookies.find(row => row.startsWith('yandex_metrika_disabled='))?.split('=')[1];
      
      // Если пользователь отклонил cookie, не инициализируем Метрику
      if (consent === 'declined' || disabled === '1') {
        // Переопределяем ym чтобы не собирать данные
        m[i] = function() {
          console.log('Yandex Metrika disabled by user consent');
        };
        return false;
      }
      return true;
    }
    
    // Проверяем согласие перед инициализацией
    if (checkCookieConsent()) {
      for (var j = 0; j < document.scripts.length; j++) {
        if (document.scripts[j].src === r) { return; }
      }
      k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a);
      
      // Инициализируем Яндекс.Метрику
      ym(95623671, "init", {
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true
      });
    }
    })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
  `;

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <body>
        <Main />
        <NextScript />

        {/* Яндекс.Метрика с проверкой согласия */}
        <script
          dangerouslySetInnerHTML={{
            __html: yandexMetricaScript,
          }}
        />

        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/95623671"
              style={{ position: 'absolute', left: '-9999px' }}
              alt=""
            />
          </div>
        </noscript>
      </body>
    </Html>
  );
}
