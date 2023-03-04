import Layout from "@/components/Layout";
import Link from "next/link";
import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { RiTimeFill } from "react-icons/ri";
import { FaBus, FaPhoneAlt, FaTelegramPlane } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";

function index() {
  return (
    <Layout title='Контакты'>
      <section className='mt-10'>
        <div className='container mx-auto'>
          <h2 className='title_main mt-20'>Контакты</h2>

          <div className='mt-10 w-11/12 m-auto flex flex-row justify-between'>
            <h4 className='text-5xl w-1/3'>ТРК «СИТИ ЦЕНТР»</h4>
            <h4 className='text-5xl w-1/3'>
              ОТДЕЛ АРЕНДНЫХ <br></br>ОТНОШЕНИЙ
            </h4>
            <h4 className='text-5xl w-1/3'>
              ОТДЕЛ РЕКЛАМЫ,<br></br> МАРКЕТИНГА И PR
            </h4>
          </div>

          <div className='mt-5 w-11/12 m-auto flex flex-row justify-between'>
            <ul className='flex flex-col w-1/3'>
              <li className='flex flex-row w-fill items-center mt-1'>
                <HiLocationMarker className='text-xl mr-5' />
                <h4 className='text-xl'>
                  350007, Г. КРАСНОДАР, УЛ. ИНДУСТРИАЛЬНАЯ, 2
                </h4>
              </li>
              <li className='flex flex-row w-fill items-center mt-1'>
                <FaPhoneAlt className='text-xl mr-5' />
                <Link href='tel:88612134700' className='text-xl'>
                  +7 (861) 213 47 00
                </Link>
              </li>
              <li className='flex flex-row w-fill items-center mt-1'>
                <FaPhoneAlt className='text-xl mr-5' />
                <h4 className='text-xl'>+7 (861) 213 47 06 (ФАКС)</h4>
              </li>
              <li className='flex flex-row w-fill items-center mt-1'>
                <MdEmail className='text-xl mr-5' />
                <Link href='mailto:INFO@CITYCENTER.RU' className='text-xl'>
                  INFO@CITYCENTER.RU
                </Link>
              </li>
            </ul>

            <ul className='flex flex-col w-1/3'>
              <li className='flex flex-row w-fill items-center mt-1'>
                <FaPhoneAlt className='text-xl mr-5' />
                <Link href='tel:88612134733' className='text-xl'>
                  +7 (861) 213 47 33
                </Link>
              </li>
              <li className='flex flex-row w-fill items-center mt-1'>
                <MdEmail className='text-xl mr-5' />
                <Link href='mailto:INFO@CITYCENTER.RU' className='text-xl'>
                  INFO@CITYCENTER.RU
                </Link>
              </li>
            </ul>

            <ul className='flex flex-col w-1/3'>
              <li className='flex flex-row w-fill items-center mt-1'>
                <FaPhoneAlt className='text-xl mr-5' />
                <Link href='tel:88612134700' className='text-xl'>
                  +7 (861) 213 47 00
                </Link>
              </li>
              <li className='flex flex-row w-fill items-center mt-1'>
                <MdEmail className='text-xl mr-5' />
                <Link href='mailto:ADMINCC@CITYCENTER.RU' className='text-xl'>
                  ADMINCC@CITYCENTER.RU
                </Link>
              </li>
              <li className='flex flex-row w-fill items-center mt-1'>
                <h4 className='text-xl'>
                  ОТДЕЛ РЕКЛАМЫ, МАРКЕТИНГА И PR ГОТОВ ПРЕДОСТАВИТЬ САМЫЕ
                  ШИРОКИЕ ВОЗМОЖНОСТИ ДЛЯ ПРОДВИЖЕНИЯ ВАШЕГО БРЕНДА НА
                  ТЕРРИТОРИИ ТРК «СИТИ ЦЕНТР»
                </h4>
              </li>
            </ul>
          </div>

          <div className='mt-16 w-11/12 m-auto flex flex-row justify-between'>
            <h4 className='text-5xl w-1/3'>ЧАСЫ РАБОТЫ</h4>
            <h4 className='text-5xl w-1/3'>КАК ДОБРАТЬСЯ</h4>
            <h4 className='text-5xl w-1/3'></h4>
          </div>
          <div className='mt-5 w-11/12 m-auto flex flex-row justify-between'>
            <ul className='flex flex-col w-1/3'>
              <li className='flex flex-row w-fill items-center mt-1'>
                <RiTimeFill className='text-xl mr-5' />
                <h4 className='text-xl'>
                  УНИВЕРСАМ «ПЕРЕКРЕСТОК» - КРУГЛОСУТОЧНО
                </h4>
              </li>
              <li className='flex flex-row w-fill items-start mt-1'>
                <RiTimeFill className='text-xl mr-5 mt-1' />
                <h4 className='text-xl'>
                  КИНОТЕАТР «СИТИ DE LUXE» <br></br>- ДО ОКОНЧАНИЯ ПОСЛЕДНЕГО
                  СЕАНСА
                </h4>
              </li>
              <li className='flex flex-row w-fill items-center mt-1'>
                <RiTimeFill className='text-xl mr-5' />
                <h4 className='text-xl'>КАФЕ И РЕСТОРАН - ДО 23:00</h4>
              </li>
              <li className='flex flex-row w-fill items-center mt-1'>
                <RiTimeFill className='text-xl mr-5' />
                <h4 className='text-xl'>МАГАЗИНЫ - С 10:00 ДО 22:00</h4>
              </li>
            </ul>

            <ul className='flex flex-col w-1/3'>
              <li className='flex flex-row w-fill items-center mt-1'>
                <FaBus className='text-xl mr-5' />
                <h4 className='text-xl'>
                  МАРШРУТНОЕ ТАКСИ № 3, 5А, 7А, 8А, 21, 26А, 44, 95
                </h4>
              </li>
              <li className='flex flex-row w-fill items-center mt-1'>
                <FaBus className='text-xl mr-5' />
                <h4 className='text-xl'>ТРОЛЛЕЙБУСОМ № 9, 10, 15</h4>
              </li>
              <li className='flex flex-row w-fill items-center mt-1'>
                <FaBus className='text-xl mr-5' />
                <h4 className='text-xl'>ТРАМВАЕМ № 4, 2</h4>
              </li>
            </ul>

            <ul className='flex gap-8 w-1/3 ml-10'>
              <Link href='https://vk.com/trkcitycentr' target={"_blank"}>
                <SlSocialVkontakte className='text-5xl ease-in duration-200 hover:scale-105' />
              </Link>
              <Link href='https://t.me/ciiitycenter' target={"_blank"}>
                <FaTelegramPlane className='text-5xl ease-in duration-200 hover:scale-105 mr-5' />
              </Link>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default index;
