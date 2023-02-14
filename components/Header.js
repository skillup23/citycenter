import React from 'react';
import Image from 'next/image';
import logo from '@/public/site_img/logo-nav.png';
import Link from 'next/link';
import { FaTelegramPlane } from 'react-icons/fa';
import { SlSocialVkontakte } from 'react-icons/sl';
import { menu } from '@/public/data/data';

function Header() {
  return (
    <header className="py-5 my-1 border-t-2 border-b-2 border-zinc-300 w-screen">
      <nav className="container mx-auto flex justify-between content-center items-center">
        {menu.slice(0, 4).map(({ id, name, link }) => {
          return (
            <Link
              key={id}
              href={link}
              className="text-3xl ease-in duration-200 hover:scale-105"
            >
              {name}
            </Link>
          );
        })}

        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            width={150}
            priority
            className="ease-in duration-200 hover:scale-105"
          />
        </Link>

        {menu.slice(4, 7).map(({ id, name, link }) => {
          return (
            <Link
              key={id}
              href={link}
              className="text-3xl ease-in duration-200 hover:scale-105"
            >
              {name}
            </Link>
          );
        })}

        <ul className="flex gap-8">
          <Link href="https://vk.com/trkcitycentr" target={'_blank'}>
            <SlSocialVkontakte className="text-4xl ease-in duration-200 hover:scale-105" />
          </Link>
          <Link href="https://t.me/ciiitycenter" target={'_blank'}>
            <FaTelegramPlane className="text-4xl ease-in duration-200 hover:scale-105" />
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
