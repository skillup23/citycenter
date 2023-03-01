import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import logoBlack from '@/public/site_img/logoBlack.png';
import { menu } from '@/public/data/data';
import { FaTelegramPlane } from 'react-icons/fa';
import { SlSocialVkontakte } from 'react-icons/sl';

function Footer() {
  return (
    <footer className="shrink-0 bg-white py-5 mt-16">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <Image
            src={logoBlack}
            alt="Логотип"
            width="120"
            height="0"
            sizes="100%"
          />
        </Link>
        {menu.map(({ id, name, link }) => {
          return (
            <Link
              key={id}
              href={link}
              className="text-3xl ease-in duration-200 hover:scale-105 text-black"
            >
              {name}
            </Link>
          );
        })}
        <div className="flex">
          <Link href="https://vk.com/trkcitycentr" target={'_blank'}>
            <SlSocialVkontakte className="text-4xl ease-in duration-200 hover:scale-105 text-black mr-5" />
          </Link>
          <Link href="https://t.me/ciiitycenter" target={'_blank'}>
            <FaTelegramPlane className="text-4xl ease-in duration-200 hover:scale-105 text-black" />
          </Link>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
