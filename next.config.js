// /** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // experimental: {
  //   scrollRestoration: true,
  // },
  images: {
    domains: [
      'bit.ly',
      'disk.yandex.ru',
      'downloader.disk.yandex.ru',
      'nextcloud900.myvnc.com',
      'cloud.mail.ru',
      'thumb.cloud.mail.ru',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'disk.yandex.ru',
        port: '',
        pathname: '/d/dns2FAWwmw680w/7%20марта/**',
      },
    ],
  },
  async headers() {
    return [
      {
        // Видео тяжёлые и меняются редко: браузер держит их 30 дней.
        // Чтобы новая версия ролика показалась сразу, дайте файлу новое имя.
        source: '/video/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=2592000' }],
      },
      {
        source: '/rent_img/prezentRent.pdf',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
      {
        source: '/marketing_img/KatalogMarketing.pdf',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
      {
        source: '/marketing_img/KatalogMarketingOld.pdf',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
    ];
  },
  async redirects() {
    return [
      // ========================================================
      // 1. Этап 1 (п. 1.3): Статические index.html и index.php
      // ========================================================
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index.php',
        destination: '/',
        permanent: true,
      },

      // ========================================================
      // 2. Этап 2 (п. 1.1): Таблица 301-редиректов (ID -> Slug)
      // ========================================================

      // ID 1: Cosmo Store (womenClothing, manClothing, shoesAndBags)
      {
        source: '/butiks/women_clothing/1',
        destination: '/butiks/women_clothing/cosmo-store',
        permanent: true,
      },
      {
        source: '/butiks/men_clothing/1',
        destination: '/butiks/men_clothing/cosmo-store',
        permanent: true,
      },
      {
        source: '/butiks/shoes_and_bags/1',
        destination: '/butiks/shoes_and_bags/cosmo-store',
        permanent: true,
      },

      // ID 2: Twinset Milano (womenClothing)
      {
        source: '/butiks/women_clothing/2',
        destination: '/butiks/women_clothing/twinset-milano',
        permanent: true,
      },

      // ID 3: Marc Cain (womenClothing)
      {
        source: '/butiks/women_clothing/3',
        destination: '/butiks/women_clothing/marccain',
        permanent: true,
      },

      // ID 4: Paul & Shark (womenClothing, manClothing)
      {
        source: '/butiks/women_clothing/4',
        destination: '/butiks/women_clothing/paul-shark',
        permanent: true,
      },
      {
        source: '/butiks/men_clothing/4',
        destination: '/butiks/men_clothing/paul-shark',
        permanent: true,
      },

      // ID 5: Bogner (womenClothing, manClothing)
      {
        source: '/butiks/women_clothing/5',
        destination: '/butiks/women_clothing/bogner',
        permanent: true,
      },
      {
        source: '/butiks/men_clothing/5',
        destination: '/butiks/men_clothing/bogner',
        permanent: true,
      },

      // ID 6: Philipp Plein (womenClothing, manClothing)
      {
        source: '/butiks/women_clothing/6',
        destination: '/butiks/women_clothing/philipp-plein',
        permanent: true,
      },
      {
        source: '/butiks/men_clothing/6',
        destination: '/butiks/men_clothing/philipp-plein',
        permanent: true,
      },

      // ID 7: Elisabetta Franchi (womenClothing)
      {
        source: '/butiks/women_clothing/7',
        destination: '/butiks/women_clothing/elizabetta-franchi',
        permanent: true,
      },

      // ID 8: X.O. (manClothing, underwear)
      {
        source: '/butiks/men_clothing/8',
        destination: '/butiks/men_clothing/xo',
        permanent: true,
      },
      {
        source: '/butiks/underwear/8',
        destination: '/butiks/underwear/xo',
        permanent: true,
      },

      // ID 9: La Perla (underwear, womenClothing)
      {
        source: '/butiks/underwear/9',
        destination: '/butiks/underwear/laperila',
        permanent: true,
      },
      {
        source: '/butiks/women_clothing/9',
        destination: '/butiks/women_clothing/laperila',
        permanent: true,
      },

      // ID 10: Дикая Орхидея (underwear)
      {
        source: '/butiks/underwear/10',
        destination: '/butiks/underwear/dikaya-orhideya',
        permanent: true,
      },

      // ID 11: Эстель Адони (underwear)
      {
        source: '/butiks/underwear/11',
        destination: '/butiks/underwear/estelle-adony',
        permanent: true,
      },

      // ID 12: Renaissance (clocks)
      {
        source: '/butiks/clocks/12',
        destination: '/butiks/clocks/renaissance',
        permanent: true,
      },

      // ID 13: Золотой Ларец (clocks)
      {
        source: '/butiks/clocks/13',
        destination: '/butiks/clocks/zolotoy-larets',
        permanent: true,
      },

      // ID 14: Галерея Времени (clocks, giftsAndBook)
      {
        source: '/butiks/clocks/14',
        destination: '/butiks/clocks/time-gallery',
        permanent: true,
      },
      {
        source: '/butiks/gifts_and_books/14',
        destination: '/butiks/gifts_and_books/time-gallery',
        permanent: true,
      },

      // ID 15: GMT (clocks, giftsAndBook)
      {
        source: '/butiks/clocks/15',
        destination: '/butiks/clocks/gmt',
        permanent: true,
      },
      {
        source: '/butiks/gifts_and_books/15',
        destination: '/butiks/gifts_and_books/gmt',
        permanent: true,
      },

      // ID 16: Branche (giftsAndBook)
      {
        source: '/butiks/gifts_and_books/16',
        destination: '/butiks/gifts_and_books/branche',
        permanent: true,
      },

      // ID 17: Vic Matie (shoesAndBags)
      {
        source: '/butiks/shoes_and_bags/17',
        destination: '/butiks/shoes_and_bags/vic-matie',
        permanent: true,
      },

      // ID 18: Иль де Ботэ (cosmetics)
      {
        source: '/butiks/cosmetics/18',
        destination: '/butiks/cosmetics/ile-de-beaute',
        permanent: true,
      },

      // ID 19: Giorgio (cosmetics)
      {
        source: '/butiks/cosmetics/19',
        destination: '/butiks/cosmetics/giorgio',
        permanent: true,
      },

      // ID 20: Ренессанс (interior, giftsAndBook)
      {
        source: '/butiks/interior/20',
        destination: '/butiks/interior/renesans',
        permanent: true,
      },
      {
        source: '/butiks/gifts_and_books/20',
        destination: '/butiks/gifts_and_books/renesans',
        permanent: true,
      },

      // ID 21: Ловец Снов (interior)
      {
        source: '/butiks/interior/21',
        destination: '/butiks/interior/lovets-snov',
        permanent: true,
      },

      // ID 22: Luxury Living (interior, giftsAndBook)
      {
        source: '/butiks/interior/22',
        destination: '/butiks/interior/luxury-living',
        permanent: true,
      },
      {
        source: '/butiks/gifts_and_books/22',
        destination: '/butiks/gifts_and_books/luxury-living',
        permanent: true,
      },

      // ID 23: FRENCH KISS (kafeAndRestoran, giftsAndBook)
      {
        source: '/butiks/kafe/23',
        destination: '/butiks/kafe/french-kiss',
        permanent: true,
      },
      {
        source: '/butiks/gifts_and_books/23',
        destination: '/butiks/gifts_and_books/french-kiss',
        permanent: true,
      },

      // ID 24: Химчистка Премиум (services)
      {
        source: '/services/24',
        destination: '/services/himchistka-premium',
        permanent: true,
      },

      // ID 25: Игратория (services gameCategory children)
      {
        source: '/services/25',
        destination: '/services/igratoriya',
        permanent: true,
      },
      {
        source: '/butiks/children/25',
        destination: '/services/igratoriya',
        permanent: true,
      },

      // ID 26: Перекресток (services)
      {
        source: '/services/26',
        destination: '/services/perekrestok',
        permanent: true,
      },

      // ID 27: Банкоматы (services)
      {
        source: '/services/27',
        destination: '/services/bankomaty',
        permanent: true,
      },

      // ID 28: Аптека (services)
      {
        source: '/services/28',
        destination: '/services/apteka',
        permanent: true,
      },

      // ID 29: Репассаж (services)
      {
        source: '/services/29',
        destination: '/services/repassaj',
        permanent: true,
      },

      // ID 30: Кинотеатр «МОНИТОР Сity de Luxe» (gameCategory)
      {
        source: '/butiks/game/30',
        destination: '/butiks/game/cinema',
        permanent: true,
      },

      // ID 31: Re:Premium (glasses giftsAndBook)
      {
        source: '/butiks/glasses/31',
        destination: '/butiks/glasses/re-premium',
        permanent: true,
      },
      {
        source: '/butiks/gifts_and_books/31',
        destination: '/butiks/gifts_and_books/re-premium',
        permanent: true,
      },

      // ID 32: STUDIO (manClothing)
      {
        source: '/butiks/men_clothing/32',
        destination: '/butiks/men_clothing/studio',
        permanent: true,
      },

      // ID 33: Gabbiacci (manClothing)
      {
        source: '/butiks/men_clothing/33',
        destination: '/butiks/men_clothing/gabbiacci',
        permanent: true,
      },

      // ID 34: КОНЦЕПТ (manClothing)
      {
        source: '/butiks/men_clothing/34',
        destination: '/butiks/men_clothing/koncept-men',
        permanent: true,
      },

      // ID 35: КОНЦЕПТ W (womenClothing)
      {
        source: '/butiks/women_clothing/35',
        destination: '/butiks/women_clothing/koncept-women',
        permanent: true,
      },

      // ID 36: Braschi (womenClothing)
      {
        source: '/butiks/women_clothing/36',
        destination: '/butiks/women_clothing/braschi',
        permanent: true,
      },

      // ID 37: Mes Demoiselles Paris (womenClothing)
      {
        source: '/butiks/women_clothing/37',
        destination: '/butiks/women_clothing/mes-demoiselles',
        permanent: true,
      },

      // ID 38: Magic Toys (children)
      {
        source: '/butiks/children/38',
        destination: '/butiks/children/magic-toys',
        permanent: true,
      },

      // ID 39: Don Bazilio (kafeAndRestoran)
      {
        source: '/butiks/kafe/39',
        destination: '/butiks/kafe/don-bazilio',
        permanent: true,
      },

      // ID 40: Дети В СИТИ (children)
      {
        source: '/butiks/children/40',
        destination: '/butiks/children/deti-v-city',
        permanent: true,
      },

      // ID 41: Оптрика (glasses)
      {
        source: '/butiks/glasses/41',
        destination: '/butiks/glasses/optrika',
        permanent: true,
      },

      // ID 42: MAX&Co (womenClothing)
      {
        source: '/butiks/women_clothing/42',
        destination: '/butiks/women_clothing/max-and-co',
        permanent: true,
      },

      // ID 43: Weekend Max Mara (womenClothing)
      {
        source: '/butiks/women_clothing/43',
        destination: '/butiks/women_clothing/weekend-max-mara',
        permanent: true,
      },

      // ID 44: Dance культ (shoesAndBags)
      {
        source: '/butiks/shoes_and_bags/44',
        destination: '/butiks/shoes_and_bags/dance-kult',
        permanent: true,
      },

      // ID 45: ZOTTY (clocks)
      {
        source: '/butiks/men_clothing/45',
        destination: '/butiks/men_clothing/zotty',
        permanent: true,
      },

      //  ID 46: Fresh (womenClothing)
      {
        source: '/butiks/women_clothing/46',
        destination: '/butiks/women_clothing/fresh',
        permanent: true,
      },

      //  ID 47: Guess (womenClothing)
      {
        source: '/butiks/women_clothing/47',
        destination: '/butiks/women_clothing/guess',
        permanent: true,
      },

      //  ID 48: Evergreen (interior)
      {
        source: '/butiks/interior/48',
        destination: '/butiks/interior/evergreen',
        permanent: true,
      },

      //  ID 49: D.Exterior (womenClothing)
      {
        source: '/butiks/women_clothing/49',
        destination: '/butiks/women_clothing/d-exterior',
        permanent: true,
      },

      //  ID 50: Togas (interior)
      {
        source: '/butiks/interior/50',
        destination: '/butiks/interior/togas',
        permanent: true,
      },

      //  ID 51: СИТИ Кафе (kafeAndRestoran)
      {
        source: '/butiks/kafe/51',
        destination: '/butiks/kafe/siti-kafe',
        permanent: true,
      },

      //  ID 52: Bugatti (manClothing)
      {
        source: '/butiks/man_clothing/52',
        destination: '/butiks/man_clothing/bugatti',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
