import React, { useState } from 'react';
import Image from 'next/image';
import logo from '@/public/site_img/logo-nav.png';
import logoBlack from '@/public/site_img/logoBlackMob.png';
import Link from 'next/link';
import { FaTelegramPlane } from 'react-icons/fa';
import { SlSocialVkontakte } from 'react-icons/sl';
import { GrFormClose } from 'react-icons/gr';
import { MdArrowRight } from 'react-icons/md';
import { BsPinMap } from 'react-icons/bs';
import { TbMapPins } from 'react-icons/tb';
import { FiMenu } from 'react-icons/fi';
// import { BiCaretDown } from 'react-icons/bi';
import { menu } from '@/public/data/data';
import logoMonitor2 from '@/public/site_img/лого-монитор-2.png';
import logoMonitor2m from '@/public/site_img/лого-монитор-2-black.png';
import logoKrd from '@/public/site_img/logoKrdRed.png';

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  // const [isServiseMenu, setServiseMenu] = useState(false);

  function visibleMenu() {
    setMenuOpen(!isMenuOpen);
  }

  // function visibleServiseMenu() {
  //   setServiseMenu(!isServiseMenu);
  // }

  // function hiddenServiseMenu() {
  //   setServiseMenu(false);
  // }

  return (
    <header className="sticky top-0 py-2 sm:py-4 my-1 border_section z-50 self-start bg-[#1e191a]">
      <nav className="lg:container flex mx-auto px-5 justify-between content-center items-center relative">
        <Image
          src={logoKrd}
          alt="Лого Краснодар"
          width="45"
          height="0"
          sizes="100%"
          className="mr-2 xl:mr-0"
        />

        <ul className="flex gap-5 xl:gap-8">
          <Link href="https://vk.com/trkcitycentr" target={'_blank'}>
            <SlSocialVkontakte className="text-3xl xl:text-4xl ease-in duration-200 hover:scale-105" />
          </Link>
          <Link href="https://t.me/ciiitycenter" target={'_blank'}>
            <FaTelegramPlane className="text-3xl xl:text-4xl ease-in duration-200 hover:scale-105 mr-3" />
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

        <Link
          href="/"
          className="w-[50px] h-[50px] xl:w-[65px] xl:h-[65px] relative"
        >
          <Image
            src={logo}
            alt="logo"
            fill
            priority
            sizes="100%"
            className="ease-in duration-200 hover:scale-105"
          />
        </Link>

        {/* Мобильная бургер кнопка */}
        <FiMenu
          onClick={() => visibleMenu()}
          className="ml-3 mr-3 cursor-pointer text-3xl md:text-4xl block lg:hidden"
        />

        {menu.slice(7, 11).map(({ id, name, link }) => {
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
            sizes="100%"
            className=""
          />
        </Link>

        {/* <div
          className="text-2xl xl:text-3xl ease-in duration-200 hover:scale-105 mr-5 hidden lg:block cursor-pointer"
          onClick={() => visibleServiseMenu()}
          // onMouseLeave={() => hiddenServiseMenu()}
        >
          <div className="flex gap-1">
            Услуги
            <BiCaretDown className="" />
          </div>
        </div> */}

        {/* Раскрывающиеся меню Услуги на ПК*/}
        {/* <div
          className={`${
            isServiseMenu ? 'block' : 'hidden'
          } bg-[#1e191a] p-3 pt-1 absolute right-0 lg:top-[68px] xl:top-[76px] border-b-2 border-l-2 border-r-2 border-zinc-300`}
        >
          {menu.slice(7, 10).map(({ id, name, link }) => {
            return (
              <Link
                key={id}
                href={link}
                scroll={true}
                className="text-2xl xl:text-3xl ease-in duration-200 hover:scale-105 mt-2 hidden lg:block text-center"
              >
                {name}
              </Link>
            );
          })}
        </div> */}
      </nav>

      {/* Мобильное раскрывающиеся меню */}
      <div
        className={`${
          isMenuOpen ? 'block lg:hidden' : 'hidden'
        } fixed top-0 h-full text-black w-full bg-black/[.9]`}
      >
        <div className="fixed top-0 p-3 sm:p-5 flex flex-col h-full bg-white w-4/5 animate-showmenu">
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
                priority
                sizes="100%"
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
              sizes="100%"
              className=""
            />
          </Link>
          <div className="w-full absolute left-0 bottom-0">
            <Link
              href="#"
              className="group text-xl sm:text-2xl pl-5 sm:pl-7 py-2 bg-zinc-200 w-full border-b border-zinc-400 flex justify-between"
            >
              Карта этажей (в разработке)
              <BsPinMap className="text-3xl group-hover:-translate-x-1 duration-150 mr-4" />
            </Link>
            <Link
              href="https://yandex.ru/maps/?rtext=~45.001269,38.961937"
              target="_blank"
              className="group text-xl sm:text-2xl pl-5 sm:pl-7 py-2 bg-zinc-200 w-full border-b border-zinc-400 flex justify-between"
            >
              Проложить маршрут
              <TbMapPins className="text-3xl group-hover:-translate-x-1 duration-150 mr-4" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
