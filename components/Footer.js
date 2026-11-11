import { menu, politicaPDF } from '@/public/data/data';
import logoBlack from '@/public/site_img/logoBlack.png';
import Image from 'next/image';
import Link from 'next/link';
import { FaTelegramPlane } from 'react-icons/fa';
import { SlSocialVkontakte } from 'react-icons/sl';
import { FiClock, FiMapPin, FiPhone } from 'react-icons/fi';

function Footer() {
  return (
    <footer className="shrink-0 bg-white border-t border-neutral-200 pt-12 pb-8 sm:mt-16 text-black">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Основная сетка футера */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-neutral-200">
          {/* Колонка 1: Логотип, адрес и телефон (4 колонки) */}
          <div className="lg:col-span-4 flex sm:flex-col items-start justify-between gap-4">
            <Link href="/" className="w-[70px] h-[70px] relative inline-block">
              <Image
                src={logoBlack}
                alt="ТРК Сити Центр"
                fill
                sizes="70px"
                className="object-contain transition-transform duration-200 hover:scale-105"
              />
            </Link>

            <div className="flex flex-col gap-2.5 text-sm sm:text-base text-neutral-800 sm:mt-2">
              <div className="flex items-center gap-2.5">
                <FiPhone className="text-lg shrink-0 mt-0.5 text-neutral-500" />
                <a
                  href="tel:+78612134700"
                  className="text-xl font-bold hover:opacity-75 transition-opacity"
                >
                  8 861 213 47 00
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <FiMapPin className="text-lg shrink-0 mt-0.5 text-neutral-500" />
                <span className="text-sm sm:text-base">
                  г. Краснодар, ул. Индустриальная, 2
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <FiClock className="text-lg shrink-0 mt-0.5 text-neutral-500" />
                <div>
                  <p className="text-base font-semibold">10:00 — 22:00</p>
                  <p className="text-xs text-neutral-500">ежедневно</p>
                </div>
              </div>
            </div>
          </div>

          {/* Колонка 2: Разделы сайта (5 колонок) */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-3 content-start">
            {menu.slice(0, 12).map(({ id, name, link }) => (
              <Link
                key={id}
                href={link}
                className="text-base uppercase tracking-wider text-neutral-700 hover:text-black transition-colors"
              >
                {name}
              </Link>
            ))}
          </div>

          {/* Колонка 3: Соцсети в стиле Ситицентра (3 колонки) */}
          <div className="lg:col-span-3 flex flex-col items-start lg:items-end gap-4">
            <span className="text-base font-semibold uppercase tracking-widest text-neutral-400">
              Присоединяйтесь к нам
            </span>
            <div className="flex gap-4">
              <Link
                href="https://vk.com/trkcitycentr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-neutral-300 flex items-center justify-center text-xl transition-all duration-200 hover:bg-black hover:text-white hover:border-black"
                aria-label="ВКонтакте"
              >
                <SlSocialVkontakte />
              </Link>
              <Link
                href="https://t.me/ciiitycenter"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-neutral-300 flex items-center justify-center text-xl transition-all duration-200 hover:bg-black hover:text-white hover:border-black"
                aria-label="Telegram"
              >
                <FaTelegramPlane />
              </Link>
            </div>
          </div>
        </div>

        {/* Нижняя служебная плашка */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-base text-neutral-500">
          <p>
            © ТРК «СИТИ ЦЕНТР», {new Date().getFullYear()}. Все права защищены.
          </p>

          <Link
            href={politicaPDF}
            target="_blank"
            className="px-2 sm:px-6 py-2 mb:py-4 flex items-center underline hover:text-black transition-colors"
          >
            <div className="flex flex-col gap-1 lg:gap-2">
              <p className="text-base">
                Политика обработки персональных данных
              </p>
            </div>
          </Link>
          <p>
            Объект под управлением УК «АЛЬФА»{' '}
            <Link
              href="https://alpha-am.ru"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-black transition-colors"
            >
              alpha-am.ru
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
