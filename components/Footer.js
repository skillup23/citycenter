import { menu } from "@/public/data/data";
import logoBlack from "@/public/site_img/logoBlack.png";
import Image from "next/image";
import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";

function Footer() {
  return (
    <footer className="shrink-0 bg-white py-5 sm:mt-16">
      <nav className="lg:container mx-auto flex justify-between items-center min-[320px]:px-3 min-[400px]:px-6 sm:px-2 lg:pr-5">
        <Link
          href="/"
          // className="w-[75px] h-[35px] lg:w-[100px] lg:h-[51px] xl:w-[62px] xl:h-[80px] relative"
          className="w-[70px] h-[70px] md:w-[59px] md:h-[78px] xl:w-[62px] xl:h-[62px] relative"
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

        <div className="grid grid-cols-3 sm:grid-cols-4 md:flex items-center justify-between gap-x-8 gap-y-4 sm:gap-4 md:gap-4 lg:gap-6 xl:gap-8 2xl:gap-12">
          {menu.slice(0, 5).map(({ id, name, link }) => {
            return (
              <Link
                key={id}
                href={link}
                className="text-lg sm:text-xl xl:text-2xl ease-in duration-200 hover:scale-105 text-black text-center"
              >
                {name}
              </Link>
            );
          })}
          {menu.slice(7, 8).map(({ id, name, link }) => {
            return (
              <Link
                key={id}
                href={link}
                className="text-lg sm:text-xl xl:text-2xl ease-in duration-200 hover:scale-105 text-black text-center"
              >
                {name}
              </Link>
            );
          })}
          {menu.slice(11, 12).map(({ id, name, link }) => {
            return (
              <Link
                key={id}
                href={link}
                className="text-lg sm:text-xl xl:text-2xl ease-in duration-200 hover:scale-105 text-black text-center col-span-3 sm:col-span-2"
              >
                {name}
              </Link>
            );
          })}
        </div>
        <div className="hidden sm:flex ml-6">
          <Link href="https://vk.com/trkcitycentr" target={"_blank"}>
            <SlSocialVkontakte className="text-xl sm:text-3xl xl:text-4xl ease-in duration-200 hover:scale-105 text-black mr-5" />
          </Link>
          <Link href="https://t.me/ciiitycenter" target={"_blank"}>
            <FaTelegramPlane className="text-xl sm:text-3xl xl:text-4xl ease-in duration-200 hover:scale-105 text-black" />
          </Link>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
