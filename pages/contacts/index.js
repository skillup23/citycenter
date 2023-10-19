import Layout from '@/components/Layout';
import Link from 'next/link';
import React from 'react';
import { HiLocationMarker } from 'react-icons/hi';
import { MdEmail } from 'react-icons/md';
import { RiTimeFill } from 'react-icons/ri';
import { FaBus, FaPhoneAlt, FaTelegramPlane } from 'react-icons/fa';
import { SlSocialVkontakte } from 'react-icons/sl';

function Contacts() {
  return (
    <Layout title="Контакты">
      <section className="mt-10">
        <div className="lg:container mx-auto">
          <h1 className="title_main mt-10">Контакты</h1>

          <div className="mt-5 w-fill md:w-11/12 m-auto flex flex-row flex-wrap justify-between px-6 md:px-0">
            <div className="flex flex-col w-full sm:w-1/2 md:w-1/3">
              <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:h-[100px] lg:h-[120px]">
                ТРК «СИТИ ЦЕНТР»
              </h4>
              <ul>
                <li className="flex flex-row w-fill items-center mt-1">
                  <HiLocationMarker className="text-xl mr-5" />
                  <h4 className="text-lg md:text-xl">
                    350007, Г. КРАСНОДАР, УЛ. ИНДУСТРИАЛЬНАЯ, 2
                  </h4>
                </li>
                <li className="flex flex-row w-fill items-center mt-1">
                  <FaPhoneAlt className="text-xl mr-5" />
                  <Link href="tel:88612134700" className="text-lg md:text-xl">
                    +7 (861) 213 47 00
                  </Link>
                </li>
                <li className="flex flex-row w-fill items-center mt-1">
                  <FaPhoneAlt className="text-xl mr-5" />
                  <h4 className="text-lg md:text-xl">
                    +7 (861) 213 47 06 (ФАКС)
                  </h4>
                </li>
                <li className="flex flex-row w-fill items-center mt-1">
                  <MdEmail className="text-xl mr-5" />
                  <Link
                    href="mailto:INFO@CITYCENTER.RU"
                    className="text-lg md:text-xl"
                  >
                    INFO@CITYCENTER.RU
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 mt-10 sm:mt-0">
              <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:h-[100px] lg:h-[120px]">
                ОТДЕЛ АРЕНДНЫХ <br></br>ОТНОШЕНИЙ
              </h4>
              <ul>
                <li className="flex flex-row w-fill items-center mt-1">
                  <FaPhoneAlt className="text-xl mr-5" />
                  <Link href="tel:88612134844" className="text-lg md:text-xl">
                    +7 (861) 213 48 44
                  </Link>
                </li>
                <li className="flex flex-row w-fill items-center mt-1">
                  <FaPhoneAlt className="text-xl mr-5" />
                  <Link href="tel:89193500771" className="text-lg md:text-xl">
                    +7 (919) 350 07 71
                  </Link>
                </li>
                <li className="flex flex-row w-fill items-center mt-1">
                  <MdEmail className="text-xl mr-5" />
                  <Link
                    href="mailto:INFO@CITYCENTER.RU"
                    className="text-lg md:text-xl"
                  >
                    INFO@CITYCENTER.RU
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 mt-10 md:mt-0">
              <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:h-[100px] lg:h-[120px]">
                ОТДЕЛ РЕКЛАМЫ,<br></br> МАРКЕТИНГА И PR
              </h4>
              <ul>
                <li className="flex flex-row w-fill items-center mt-1">
                  <FaPhoneAlt className="text-xl mr-5" />
                  <Link href="tel:88612134844" className="text-lg md:text-xl">
                    +7 (861) 213 48 44
                  </Link>
                </li>
                <li className="flex flex-row w-fill items-center mt-1">
                  <FaPhoneAlt className="text-xl mr-5" />
                  <Link href="tel:89189370965" className="text-lg md:text-xl">
                    +7 (918) 937 09 65
                  </Link>
                </li>
                <li className="flex flex-row w-fill items-center mt-1">
                  <MdEmail className="text-xl mr-5" />
                  <Link
                    href="mailto:ADMINCC@CITYCENTER.RU"
                    className="text-lg md:text-xl"
                  >
                    ADMINCC@CITYCENTER.RU
                  </Link>
                </li>
                <li className="flex flex-row w-fill items-center mt-1">
                  <h4 className="text-lg md:text-xl">
                    ОТДЕЛ РЕКЛАМЫ, МАРКЕТИНГА И PR ГОТОВ ПРЕДОСТАВИТЬ САМЫЕ
                    ШИРОКИЕ ВОЗМОЖНОСТИ ДЛЯ ПРОДВИЖЕНИЯ ВАШЕГО БРЕНДА НА
                    ТЕРРИТОРИИ ТРК «СИТИ ЦЕНТР»
                  </h4>
                </li>
              </ul>
            </div>
            <ul className="flex md:hidden gap-8 w-1/2 mt-16">
              <Link href="https://vk.com/trkcitycentr" target={'_blank'}>
                <SlSocialVkontakte className="text-5xl ease-in duration-200 hover:scale-105" />
              </Link>
              <Link href="https://t.me/ciiitycenter" target={'_blank'}>
                <FaTelegramPlane className="text-5xl ease-in duration-200 hover:scale-105 mr-5" />
              </Link>
            </ul>
          </div>

          <div className="my-10 md:my-20 w-fill md:w-11/12 m-auto flex flex-row flex-wrap justify-between px-6 md:px-0">
            <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 mt-5 md:mt-0">
              <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 sm:mb-5">
                ЧАСЫ РАБОТЫ
              </h4>
              <ul>
                <li className="flex flex-row w-fill items-center mt-1">
                  <RiTimeFill className="text-xl mr-5" />
                  <h4 className="text-lg md:text-xl">
                    УНИВЕРСАМ «ПЕРЕКРЕСТОК» - КРУГЛОСУТОЧНО
                  </h4>
                </li>
                <li className="flex flex-row w-fill items-start mt-1">
                  <RiTimeFill className="text-xl mr-5 mt-1" />
                  <h4 className="text-lg md:text-xl">
                    КИНОТЕАТР «СИТИ DE LUXE» <br></br>- ДО ОКОНЧАНИЯ ПОСЛЕДНЕГО
                    СЕАНСА
                  </h4>
                </li>
                <li className="flex flex-row w-fill items-center mt-1">
                  <RiTimeFill className="text-xl mr-5" />
                  <h4 className="text-lg md:text-xl">
                    КАФЕ И РЕСТОРАН - ДО 23:00
                  </h4>
                </li>
                <li className="flex flex-row w-fill items-center mt-1">
                  <RiTimeFill className="text-xl mr-5" />
                  <h4 className="text-lg md:text-xl">
                    МАГАЗИНЫ - С 10:00 ДО 22:00
                  </h4>
                </li>
              </ul>
            </div>

            <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 mt-10 md:mt-0">
              <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 sm:mb-5">
                КАК ДОБРАТЬСЯ
              </h4>
              <ul>
                <li className="flex flex-row w-fill items-center mt-1">
                  <FaBus className="text-xl mr-5" />
                  <h4 className="text-lg md:text-xl">
                    МАРШРУТНОЕ ТАКСИ № 3, 5А, 7А, 8А, 21, 26А, 44, 95
                  </h4>
                </li>
                <li className="flex flex-row w-fill items-center mt-1">
                  <FaBus className="text-xl mr-5" />
                  <h4 className="text-lg md:text-xl">
                    ТРОЛЛЕЙБУСОМ № 9, 10, 15
                  </h4>
                </li>
                <li className="flex flex-row w-fill items-center mt-1">
                  <FaBus className="text-xl mr-5" />
                  <h4 className="text-lg md:text-xl">ТРАМВАЕМ № 4, 2</h4>
                </li>
              </ul>
            </div>

            <ul className="hidden md:flex gap-8 w-1/3 pl-10">
              <Link href="https://vk.com/trkcitycentr" target={'_blank'}>
                <SlSocialVkontakte className="text-5xl ease-in duration-200 hover:scale-105" />
              </Link>
              <Link href="https://t.me/ciiitycenter" target={'_blank'}>
                <FaTelegramPlane className="text-5xl ease-in duration-200 hover:scale-105 mr-5" />
              </Link>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Contacts;
