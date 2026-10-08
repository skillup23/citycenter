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
  // eslint: {
  //   // Warning: This allows production builds to successfully complete even if
  //   // your project has ESLint errors.
  //   ignoreDuringBuilds: true,
  // },
  // typescript: {
  //   // !! WARN !!
  //   // Dangerously allow production builds to successfully complete even if
  //   // your project has type errors.
  //   // !! WARN !!
  //   ignoreBuildErrors: true,
  // },
};

module.exports = nextConfig;
