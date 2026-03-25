import phoneIcon from '@/public/butiks/kafe/Oysters/phone-icon.png';
import telegramIcon from '@/public/butiks/kafe/Oysters/telegram-icon.png';
import Image from 'next/image';
import Link from 'next/link';

function FeedBackOysters({ classMarginTop, classVisible }) {
  return (
    <div className={`${classMarginTop}`}>
      <Link
        href="/butiks/kafe/oysters#formfeed"
        className={`w-full ${classVisible}`}
      >
        <div className="py-2 px-8 lg:py-4 lg:px-16 bg-white text-black text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-center hover:bg-[#FBF79F]">
          забронировать столик
        </div>
      </Link>

      <div className="flex gap-4 md:gap-6">
        <Link href="tel:89898248564" className="w-1/2">
          <div className="mt-6 py-3 md:py-2 px-2 md:px-8 lg:py-[14px] lg:px-16 flex items-center justify-center gap-[10px] text-white text-[4.2vw] md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-center border border-white hover:border-[#FBF79F]">
            <Image
              src={phoneIcon}
              alt="телефон иконка"
              width="48"
              height="48"
              className="mt-0 md:-mt-1 w-6 md:w-8 2xl:w-10"
            />
            позвонить
          </div>
        </Link>

        <Link
          href="https://t.me/Oysters_krd_city"
          className="w-1/2"
          target="_blank"
        >
          <div className="mt-6 py-3 px-2 md:px-8 lg:py-[14px] lg:px-16 flex items-center justify-center gap-[10px] text-white text-[4.2vw] md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-center border border-white hover:border-[#FBF79F]">
            <Image
              src={telegramIcon}
              alt="телеграм иконка"
              width="48"
              height="48"
              className="mt-0 md:-mt-1 w-6 md:w-8 2xl:w-10"
            />
            написать в telegram
          </div>
        </Link>
      </div>
    </div>
  );
}

export default FeedBackOysters;
