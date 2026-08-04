import { politicaPDF } from '@/public/data/data';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // БЛОКИРУЕМ Яндекс.Метрику ДО согласия
    if (typeof window !== 'undefined') {
      window.ym =
        window.ym ||
        function () {
          // Заглушка пока нет согласия
          console.log('Yandex Metrika: ожидание согласия пользователя');
        };
    }

    // Проверяем существующее согласие
    const cookieValue = document.cookie
      .split('; ')
      .find((row) => row.startsWith('cookie_consent='))
      ?.split('=')[1];

    if (cookieValue === 'accepted') {
      // Если согласие уже дано — инициализируем метрику (работает на всех страницах)
      initializeYandexMetrika();
    } else if (!cookieValue && pathname !== '/cookie-policy') {
      // Показываем баннер ТОЛЬКО если согласия нет И мы НЕ на странице политики cookie
      setShowBanner(true);
    } else {
      // Если мы на странице /cookie-policy без согласия — скрываем баннер,
      // но Метрика остается неактивной (работает stub-заглушка)
      setShowBanner(false);
    }
  }, [pathname]); // Перезапускаем проверку при смене страницы

  // Инициализация Яндекс.Метрики после согласия
  const initializeYandexMetrika = () => {
    if (typeof window === 'undefined') return;

    // Предотвращаем повторную загрузку скрипта, если он уже есть
    if (document.querySelector('script[src*="metrika/tag.js"]')) return;

    // Загружаем скрипт Яндекс.Метрики
    const script = document.createElement('script');
    script.src = 'https://mc.yandex.ru/metrika/tag.js';
    script.async = true;

    script.onload = () => {
      window.ym(95623671, 'init', {
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true,
      });
    };

    document.head.appendChild(script);
  };

  // Установка куки на 365 дней
  const setCookie = (value) => {
    const date = new Date();
    date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000);
    const expires = 'expires=' + date.toUTCString();
    document.cookie = `cookie_consent=${value};${expires};path=/;SameSite=Lax`;

    // Обязательное уведомление о выборе
    if (value === 'accepted') {
      console.log(
        'Пользователь согласился на обработку данных Яндекс.Метрикой',
      );
      initializeYandexMetrika();
    } else {
      console.log('Пользователь отказался от Яндекс.Метрики');
      // Гарантируем блокировку
      window.ym = function () {
        console.log('Yandex Metrika отключена по выбору пользователя');
      };
    }

    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center p-4">
      <div className="bg-white max-w-md w-full p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-3">
          Согласие на обработку данных
        </h3>

        <div className="text-sm sm:text-base text-gray-700 mb-6 space-y-3">
          <p>
            <strong>Внимание!</strong> Мы используем Яндекс.Метрику для сбора
            данных о посещаемости.
          </p>
          <p>
            <strong>Собираемые данные:</strong> IP-адрес, cookie, данные об
            устройствах, действия на сайте (клики, просмотры).
          </p>
          <p>
            <strong>Цель:</strong> анализ посещаемости и улучшение работы сайта.
          </p>
          <p>
            <strong>Правовое основание:</strong> Федеральный закон №152-ФЗ «О
            персональных данных».
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 mt-4">
            <p className="text-sm text-yellow-800">
              Нажимая «Принять», вы даёте согласие на обработку персональных
              данных.
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => setCookie('declined')}
            className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 text-base font-medium 
                     hover:bg-gray-50 transition-colors duration-200"
          >
            Отклонить
          </button>
          <button
            onClick={() => setCookie('accepted')}
            className="flex-1 px-4 py-3 bg-[#1e1a1b] text-white text-base font-medium 
                     hover:bg-black transition-colors duration-200"
          >
            Принять
          </button>
        </div>

        <div className="mt-4 text-center flex flex-col">
          <Link
            href="/cookie-policy"
            className="text-sm text-black underline"
            target="_blank"
          >
            Политика использования файлов cookie
          </Link>
          <Link
            href={politicaPDF}
            className="mt-2 text-sm text-black underline"
            target="_blank"
          >
            Политика обработки персональных данных
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
