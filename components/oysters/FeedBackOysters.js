import phoneIcon from "@/public/butiks/kafe/Oysters/phone-icon.png";
import telegramIcon from "@/public/butiks/kafe/Oysters/telegram-icon.png";
import Image from "next/image";
import Link from "next/link";

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

      <div className="flex gap-6">
        <Link href="/butiks/kafe/oysters#" className="w-1/2">
          <div className="mt-6 py-2 px-8 lg:py-[14px] lg:px-16 flex items-center justify-center gap-[10px] text-white text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-center border border-white hover:border-[#FBF79F]">
            <Image
              src={phoneIcon}
              alt="телефон иконка"
              width="48"
              height="48"
              className="-mt-1 w-8 2xl:w-10"
            />
            позвонить
          </div>
        </Link>

        <Link href="/butiks/kafe/oysters#" className="w-1/2">
          <div className="mt-6 py-2 px-8 lg:py-[14px] lg:px-16 flex items-center justify-center gap-[10px] text-white text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-center border border-white hover:border-[#FBF79F]">
            <Image
              src={telegramIcon}
              alt="телеграм иконка"
              width="48"
              height="48"
              className="-mt-1 w-8 2xl:w-10"
            />
            написать в telegram
          </div>
        </Link>
      </div>
    </div>
  );
}

export default FeedBackOysters;
