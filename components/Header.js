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
import { menu } from '@/public/data/data';

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  function visibleMenu() {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <header className="py-3 sm:py-5 my-1 border_section z-50">
      <nav className="lg:container flex mx-auto px-5 justify-between content-center items-center">
        {menu.slice(0, 5).map(({ id, name, link }) => {
          return (
            <Link
              key={id}
              href={link}
              scroll={false}
              className="text-2xl xl:text-3xl ease-in duration-200 hover:scale-105 mr-2 xl:mr-0 hidden lg:block"
            >
              {name}
            </Link>
          );
        })}

        {/* Мобильное меню */}
        <FiMenu
          onClick={() => visibleMenu()}
          className="ml-3 mr-10 cursor-pointer text-3xl md:text-4xl block lg:hidden"
        />
        {/* <h3
          onClick={() => visibleMenu()}
          className="bg-white text-black ml-0 sm:ml-5 py-2 px-8 cursor-pointer text-xl md:text-2xl block lg:hidden"
        >
          Меню
        </h3> */}
        {/* Конец Мобильное меню*/}

        <Link
          href="/"
          className="w-[120px] h-[62px] xl:w-[150px] xl:h-[77px] relative"
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

        {menu.slice(5, 8).map(({ id, name, link }) => {
          return (
            <Link
              key={id}
              href={link}
              scroll={false}
              className="text-2xl xl:text-3xl ease-in duration-200 hover:scale-105 mr-5 hidden lg:block"
            >
              {name}
            </Link>
          );
        })}

        <ul className="flex gap-5 xl:gap-10">
          <Link href="https://vk.com/trkcitycentr" target={'_blank'}>
            <SlSocialVkontakte className="text-3xl xl:text-4xl ease-in duration-200 hover:scale-105" />
          </Link>
          <Link href="https://t.me/ciiitycenter" target={'_blank'}>
            <FaTelegramPlane className="text-3xl xl:text-4xl ease-in duration-200 hover:scale-105 mr-3" />
          </Link>
        </ul>
      </nav>

      {/* Мобильное раскрывающиеся меню */}
      <div
        className={`${
          isMenuOpen ? 'block lg:hidden' : 'hidden'
        } fixed top-0 h-full text-black w-full bg-black/[.9]`}
      >
        <div className="fixed top-0 p-3 sm:p-5 flex flex-col h-full bg-white w-4/5 animate-showmenu">
          <div className="flex justify-between items-center pb-8">
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
                scroll={false}
                onClick={() => visibleMenu()}
                className="group text-xl sm:text-2xl ml-3 mb-3 flex justify-between"
              >
                {name}
                <MdArrowRight className="text-3xl group-hover:-translate-x-1 duration-150" />
              </Link>
            );
          })}
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
