import '@/styles/globals.css';
import { Inter } from '@next/font/google';
import localFont from '@next/font/local';

const bebas = localFont({
  src: '../public/fonts/BebasNeueRegular.woff2',
  variable: '--font-bebas',
  weight: 'normal',
});

// const bebas = localFont({
//   src: [
//     {
//       path: '../public/fonts/BebasNeueRegular.woff2',
//       weight: 'normal',
//       variable: '--font-bebas',
//     },
//     {
//       path: '../public/fonts/BebasNeueLight.woff2',
//       weight: '300',
//       variable: '--font-light',
//     },
//     {
//       path: '../public/fonts/BebasNeueBold.woff2',
//       weight: 'bold',
//       variable: '--font-bold',
//     },
//   ],
// });

export default function App({ Component, pageProps }) {
  return (
    <main className={`${bebas.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
