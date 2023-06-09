// /** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
