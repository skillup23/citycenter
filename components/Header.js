import { menu } from '@/public/data/data';
import logoKinext from '@/public/site_img/Kinext2026.png';
import logo from '@/public/site_img/logo-nav.png';
import logoBlack from '@/public/site_img/logoBlackMob.png';
import logoMonitor2m from '@/public/site_img/лого-монитор-3-black.svg';
import logoMonitor2 from '@/public/site_img/лого-монитор-3.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import { FiMenu, FiSearch } from 'react-icons/fi';
import { GrFormClose } from 'react-icons/gr';
import { MdArrowRight } from 'react-icons/md';
import { SlSocialVkontakte } from 'react-icons/sl';
import SearchModal from './SearchModal';

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);

  function visibleMenu() {
    setMenuOpen(!isMenuOpen);
  }

  // Горячая клавиша Ctrl+K / Cmd+K для открытия поиска с клавиатуры
  useEffect(() => {
    const handleShortcut = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleShortcut);
    return () => window.removeEventListener('keydown', handleShortcut);
  }, []);

  return (
    <>
      <header className="sticky top-0 py-2 sm:py-4 my-1 border_section z-50 self-start bg-[#1e191a] w-full">
        <nav className="xl:container flex mx-auto px-3 md:px-5 lg:px-0 justify-between content-center items-center relative min-h-[50px] xl:min-h-[65px]">
          <Link href="https://city.kinext.ru" target={'_blank'}>
            <Image
              src={logoKinext}
              alt="Лого Kinext"
              width="95"
              height="0"
              className="mr-2 xl:mr-0"
            />
          </Link>

          <ul className="hidden sm:flex gap-3 xl:gap-4">
            <Link href="https://vk.com/trkcitycentr" target={'_blank'}>
              <SlSocialVkontakte className="text-3xl xl:text-3xl ease-in duration-200 hover:scale-105" />
            </Link>
            <Link href="https://t.me/ciiitycenter" target={'_blank'}>
              <FaTelegramPlane className="text-3xl xl:text-3xl ease-in duration-200 hover:scale-105 mr-1" />
            </Link>
          </ul>

          {menu.slice(0, 4).map(({ id, name, link }) => {
            return (
              <Link
                key={id}
                href={link}
                scroll={true}
                className="text-xl xl:text-xl ease-in duration-200 hover:scale-105 xl:mr-0 hidden lg:block"
              >
                {name}
              </Link>
            );
          })}

          {/* Логотип Ситицентра: на мобильных строго по центру экрана, на ПК в потоке */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 w-[50px] h-[50px] xl:w-[65px] xl:h-[65px]"
          >
            <Image
              src={logo}
              alt="logo"
              fill
              priority
              sizes="65px"
              className="ease-in duration-200 hover:scale-105"
            />
          </Link>

          {/* Мобильная группа кнопок справа: Поиск + Бургер */}
          <div className="flex items-center gap-5 mr-1 sm:mr-3 lg:hidden">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Поиск по бутикам"
              className="p-1 text-2xl md:text-3xl hover:scale-105 transition-transform"
            >
              <FiSearch />
            </button>
            <FiMenu
              onClick={() => visibleMenu()}
              className="cursor-pointer text-3xl md:text-4xl"
            />
          </div>

          {menu.slice(6, 10).map(({ id, name, link }) => {
            return (
              <Link
                key={id}
                href={link}
                scroll={true}
                className="text-xl xl:text-xl ease-in duration-200 hover:scale-105 hidden lg:block"
              >
                {name}
              </Link>
            );
          })}

          {/* Кнопка поиска на ПК (перед лого Монитор) */}
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            aria-label="Поиск по бутикам"
            title="Поиск по бутикам (Ctrl+K)"
            className="hidden lg:flex items-center justify-center p-1.5 text-2xl hover:scale-110 transition-transform"
          >
            <FiSearch />
          </button>

          <Link
            href="https://kinomonitor.ru/vip/afisha"
            className="hidden lg:flex h-full items-center justify-center"
            target={'_blank'}
          >
            <Image
              src={logoMonitor2}
              alt="Лого Монитор Делюкс"
              width="100"
              height="0"
              className=""
            />
          </Link>
        </nav>

        {/* Мобильное раскрывающееся меню */}
        <div
          className={`${
            isMenuOpen ? 'block lg:hidden' : 'hidden'
          } fixed top-0 left-0 h-full text-black w-full bg-black/[.9] z-50`}
        >
          <div className="fixed top-0 left-0 p-3 sm:p-5 flex flex-col h-full bg-white w-4/5 animate-showmenu">
            <div className="flex justify-between items-center pb-4">
              <GrFormClose
                onClick={() => visibleMenu()}
                className="text-5xl cursor-pointer"
              />
              <Link
                href="/"
                className="w-[120px] h-[30px] sm:w-[170px] sm:h-[40px] relative"
              >
                <Image
                  src={logoBlack}
                  alt="logo"
                  fill
                  sizes="200px"
                  className="ease-in duration-200 hover:scale-105"
                />
              </Link>

              <ul className="flex gap-3 sm:gap-6">
                <Link href="https://vk.com/trkcitycentr" target={'_blank'}>
                  <SlSocialVkontakte className="text-2xl sm:text-3xl ease-in duration-200 hover:scale-105" />
                </Link>
                <Link href="https://t.me/ciiitycenter" target={'_blank'}>
                  <FaTelegramPlane className="text-2xl sm:text-3xl ease-in duration-200 hover:scale-105 mr-3" />
                </Link>
              </ul>
            </div>
            {menu.map(({ id, name, link }) => {
              return (
                <Link
                  key={id}
                  href={link}
                  scroll={true}
                  onClick={() => visibleMenu()}
                  className="group text-xl sm:text-2xl ml-3 mb-3 flex justify-between"
                >
                  {name}
                  <MdArrowRight className="text-3xl group-hover:-translate-x-1 duration-150" />
                </Link>
              );
            })}
            <Link
              href="https://kinomonitor.ru/vip/afisha"
              className="mt-1 ml-4 flex items-start"
              target={'_blank'}
            >
              <Image
                src={logoMonitor2m}
                alt="Лого Монитор Делюкс"
                width="110"
                height="0"
                className=""
              />
            </Link>
          </div>
        </div>
      </header>

      {/* Модальное окно поиска */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}

export default Header;
