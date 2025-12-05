import Link from 'next/link';
import { useState, useEffect } from 'react';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Проверяем, было ли уже дано согласие
    const hasConsent = document.cookie
      .split(';')
      .some((cookie) => cookie.trim().startsWith('cookie_consent='));

    if (!hasConsent) {
      // Небольшая задержка для лучшего UX
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  // Установка куки на 30 дней
  const setCookie = (value) => {
    const date = new Date();
    date.setTime(date.getTime() + 30 * 24 * 60 * 60 * 1000);
    const expires = 'expires=' + date.toUTCString();
    document.cookie = `cookie_consent=${value};${expires};path=/`;
    setShowBanner(false);
  };

  // Принятие куки
  const acceptCookies = () => {
    setCookie('accepted');
  };

  if (!showBanner) return null;

  return (
    <div className="sm:w-[500px] fixed bottom-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg p-2 sm:p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 sm:gap-4">
          <div className="text-sm sm:text-lg text-center sm:text-start text-black">
            <span className="font-medium">Мы используем файлы cookie</span> для
            улучшения работы сайта. Продолжая использование сайта, вы
            соглашаетесь с нашей{' '}
            <Link
              href="/cookie-policy"
              className="hover:text-black underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              политикой использования cookie
            </Link>
            .
          </div>

          <div className="flex gap-3 shrink-0">
            <button
              onClick={acceptCookies}
              className="px-5 py-1 sm:py-2 bg-[#1e1a1b] text-white text-sm font-medium  
                       hover:bg-black transition-colors duration-200"
            >
              Принять
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
