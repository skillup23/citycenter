import FormOysters from "@/components/FormOysters";
import Layout from "@/components/Layout";
import FeedBackOysters from "@/components/oysters/FeedBackOysters";
import MenuOystersBlock from "@/components/oysters/MenuOystersBlock";
import VideoMain from "@/components/VideoMain";
import endImage from "@/public/butiks/kafe/Oysters/EndImage.jpg";
import imageFeedBack from "@/public/butiks/kafe/Oysters/imageFeedBack.jpg";
import crabOrange from "@/public/butiks/kafe/Oysters/krabOrange.png";
import krabWhite from "@/public/butiks/kafe/Oysters/krabWhite.png";
import logo from "@/public/butiks/kafe/Oysters/logo.png";
import logoCity from "@/public/butiks/kafe/Oysters/logoCity.png";
import menu1 from "@/public/butiks/kafe/Oysters/menu/menu1.jpg";
import menu10 from "@/public/butiks/kafe/Oysters/menu/menu10.jpg";
import menu11 from "@/public/butiks/kafe/Oysters/menu/menu11.jpg";
import menu12 from "@/public/butiks/kafe/Oysters/menu/menu12.jpg";
import menu2 from "@/public/butiks/kafe/Oysters/menu/menu2.jpg";
import menu3 from "@/public/butiks/kafe/Oysters/menu/menu3.jpg";
import menu4 from "@/public/butiks/kafe/Oysters/menu/menu4.jpg";
import menu5 from "@/public/butiks/kafe/Oysters/menu/menu5.jpg";
import menu6 from "@/public/butiks/kafe/Oysters/menu/menu6.jpg";
import menu7 from "@/public/butiks/kafe/Oysters/menu/menu7.jpg";
import menu8 from "@/public/butiks/kafe/Oysters/menu/menu8.jpg";
import menu9 from "@/public/butiks/kafe/Oysters/menu/menu9.jpg";
import oRestorane1 from "@/public/butiks/kafe/Oysters/oRestorane1.jpg";
import oRestorane10 from "@/public/butiks/kafe/Oysters/oRestorane10.jpg";
import oRestorane2 from "@/public/butiks/kafe/Oysters/oRestorane2.jpg";
import oRestorane3 from "@/public/butiks/kafe/Oysters/oRestorane3.jpg";
import oRestorane4 from "@/public/butiks/kafe/Oysters/oRestorane4.jpg";
import oRestorane5 from "@/public/butiks/kafe/Oysters/oRestorane5.jpg";
import oRestorane6 from "@/public/butiks/kafe/Oysters/oRestorane6.jpg";
import oRestorane7 from "@/public/butiks/kafe/Oysters/oRestorane7.jpg";
import oRestorane8 from "@/public/butiks/kafe/Oysters/oRestorane8.jpg";
import oRestorane9 from "@/public/butiks/kafe/Oysters/oRestorane9.jpg";
import ravnoWhite from "@/public/butiks/kafe/Oysters/ravnoWhite.png";
import SalesFotoMan from "@/public/butiks/kafe/Oysters/SalesFotoMan.jpg";
import tableWhiteIcon from "@/public/butiks/kafe/Oysters/tableWhiteIcon.png";
import telegramIcon from "@/public/butiks/kafe/Oysters/telegram-icon.png";
import vinoIcon from "@/public/butiks/kafe/Oysters/vinoIcon.png";
import yandexGoodPlace from "@/public/butiks/kafe/Oysters/yandexGoodPlace.png";
import ystriciWhite from "@/public/butiks/kafe/Oysters/ystriciWhite.png";
import ystriciWhiteTwo from "@/public/butiks/kafe/Oysters/ystriciWhiteTwo.png";
import Image from "next/image";
import Link from "next/link";
import { BsFilePdf } from "react-icons/bs";

function Oysters() {
  return (
    <Layout
      title="Ресторан устриц Oysters в в ТРЦ «Сити Центр»"
      description="Oysters — твое место безупречного вкуса в ТРК «Сити Центр». Мы превратили гастрономию в искусство: от живых королевских крабов и премиальных устриц Жилардо до атмосферных вечеров под звуки живой скрипки."
    >
      <section className='relative w-full h-[30vh] md:h-[89vh] pt-10 md:pt-20 2xl:pt-[120px] pb-24 bg-[url("../public/butiks/kafe/Oysters/firstScreen2.jpg")] bg-center bg-cover'>
        <div className="lg:container mx-4 md:mx-auto h-full">
          <div className="flex flex-col h-full">
            <h1 className="oysters_title mb-2 md:mb-6">
              <span className="font-bold">Oysters</span> в ТРЦ «Сити Центр»
            </h1>
            <h2 className="oysters_text">
              свежие устрицы, морская кухня и вино
            </h2>

            <Link
              href="/butiks/kafe/oysters#formfeed"
              className="hidden md:block w-fit mt-auto"
            >
              <div className="py-2 px-8 lg:py-3 lg:px-16 bg-white text-black text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-center hover:bg-[#FBF79F]">
                забронировать столик
              </div>
            </Link>
          </div>
        </div>

        <Link
          href="/butiks/kafe/oysters#sales"
          className='absolute w-[150px] lg:w-[300px] xl:w-[365px] 2xl:w-[402px] h-[120px] lg:h-[270px] xl:h-[300px] 2xl:h-[322px] px-1 md:px-4 pt-5 md:pt-14 flex flex-col justify-center items-end bottom-0 right-0 bg-[url("../public/butiks/kafe/Oysters/RectangleFirstScreen.png")] bg-right-bottom bg-cover'
        >
          <Image
            src={crabOrange}
            alt="Акция"
            width="100"
            height="100"
            priority
            className="w-8 md:w-[100px]"
          />
          <h5 className="mr-1 md:mr-2 text-base leading-none lg:text-2xl xl:text-3xl 2xl:text-4xl text-black text-right">
            Дарим <br />
            дюжину устриц <br />
            при покупке краба!
          </h5>
        </Link>
      </section>

      <Link
        href="/butiks/kafe/oysters#formfeed"
        className="block md:hidden w-full"
      >
        <div className="mx-4 mt-4 py-2 px-8 bg-white text-black text-xl text-center hover:bg-[#FBF79F]">
          забронировать столик
        </div>
      </Link>

      <section className="pt-10 md:pt-[100px] 2xl:pt-[120px]">
        <div className="lg:container mx-4 md:mx-auto">
          <div>
            <h2 className="oysters_title w-2/3 md:w-full">
              Ресторан устриц в&nbsp;ТРЦ&nbsp;«СИТИ ЦЕНТР»
            </h2>
            <p className="mt-6 md:mt-16 2xl:mt-20 oysters_text">
              Свежие устрицы, утончённая подача, безупречный вкус и особое
              настроение — всё, чтобы превратить обычный визит в ТРК «СИТИ
              ЦЕНТР» в настоящее гастрономическое удовольствие. Теперь атмосфера
              безупречного шопинга дополняется изысканными морскими деликатесами
              и&nbsp;эстетикой настоящего luxury-формата.
            </p>

            <Image
              src={logo}
              alt="Логотип ресторана"
              width="467"
              height="212"
              className="w-[200px] md:w-[467px] mx-auto mt-6 md:mt-8"
            />
          </div>

          <div
            className="flex flex-col md:flex-row gap-6 scroll-mt-28"
            id="sales"
          >
            <Image
              src={SalesFotoMan}
              alt="Акция ресторана - дарим дюжину устриц при покупке краба."
              width="768"
              height="996"
              sizes="(max-width: 768px) 100vw, 768px"
              className="w-full md:w-1/2 h-auto"
            />
            <div className="w-full md:w-1/2 flex flex-col items-center">
              <h2 className="oysters_title">акция</h2>
              <h4 className="mt-6 md:mt-20 oysters_text text-[#FBF79F]">
                дарим дюжину устриц при покупке краба.
              </h4>
              <div className="mt-6 md:mt-[73px] flex items-center justify-center gap-4 md:gap-8">
                <Image
                  src={krabWhite}
                  alt="Краб иконка"
                  width="122"
                  height="122"
                  className="w-16 md:w-28 2xl:w-[122px] h-16 md:h-28 2xl:h-[122px]"
                />
                <Image
                  src={ravnoWhite}
                  alt="Равно иконка"
                  width="60"
                  height="18"
                  className="w-10 md:w-14 2xl:w-[60px] h-3 md:h-4 2xl:h-[18px]"
                />
                <div className="flex items-center justify-center gap-2">
                  <h3 className="mt-1 md:mt-0 text-4xl md:text-5xl 2xl:text-6xl">
                    12 Х
                  </h3>
                  <Image
                    src={ystriciWhite}
                    alt="Устрицы иконка"
                    width="100"
                    height="80"
                    className="w-14 md:w-24 2xl:w-[100px] h-14 md:h-[74px] 2xl:h-20"
                  />
                </div>
              </div>

              <h4 className="mt-6 md:mt-20 w-11/12 oysters_text text-center md:text-start">
                чтобы воспользоваться акцией - введите промокод{" "}
                <span className="text-[#FBF79F]">«СИТИ ЦЕНТР»</span> при
                бронировании столика или скажите его своему официанту.
              </h4>

              <Link
                href="/butiks/kafe/oysters#formfeed"
                className="mt-6 md:mt-auto w-full"
              >
                <div className="py-2 px-8 lg:py-3 lg:px-16 bg-white text-black text-xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-center hover:bg-[#FBF79F]">
                  забронировать столик
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="hidden pt-[120px]">
        <div className="lg:container mx-auto">
          <h2 className="oysters_title">почему к нам?</h2>
          <div className="mt-20 grid grid-cols-2">
            <div className="pb-20 flex flex-col items-center justify-end border-b border-r border-white">
              <Image
                src={ystriciWhiteTwo}
                alt="Устрицы иконка"
                width="271"
                height="165"
                className="w-60 ml-6 2xl:w-[271px] h-36 2xl:h-[165px]"
              />
              <h4 className="max-w-[272px] oysters_text text-center">
                Свежие устрицы каждый день
              </h4>
            </div>

            <div className="pb-20 flex flex-col items-center justify-end border-b border-white">
              <Image
                src={vinoIcon}
                alt="Вино иконка"
                width="296"
                height="241"
                className="w-[270px] ml-6 2xl:w-[296px] h-[210px] 2xl:h-[241px]"
              />
              <h4 className="max-w-[272px] oysters_text text-center">
                Морская кухня и&nbsp;вино
              </h4>
            </div>

            <div className="pt-20 flex flex-col items-center justify-end border-r border-white">
              <Image
                src={tableWhiteIcon}
                alt="Вино иконка"
                width="191"
                height="191"
                className="w-[180px] 2xl:w-[191px] h-[180px] 2xl:h-[191px]"
              />
              <h4 className="mt-6 max-w-[272px] oysters_text text-center">
                Атмосфера ресторана
              </h4>
            </div>

            <div className="pt-20 flex flex-col items-center justify-end">
              <Image
                src={logoCity}
                alt="Вино иконка"
                width="200"
                height="197"
                className="w-[185px] 2xl:w-[200px] h-[182px] 2xl:h-[197px]"
              />
              <h4 className="mt-6 max-w-[272px] oysters_text text-center">
                Удобно в ТРЦ Сити Центр
              </h4>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-[120px]" id="formfeed">
        <div className="lg:container mx-auto">
          <div className="h-full flex gap-6">
            {/* Левая колонка */}
            <div className="w-1/2 flex flex-col">
              <h2 className="oysters_title">забронировать столик</h2>
              <h4 className="mt-2 text-[2.4vw] leading-none 2xl:text-4xl">
                оставьте контактны данные , и мы вам перезвоним
              </h4>
              <div className="mt-28 2xl:mt-[120px] h-full">
                <FormOysters />
              </div>
            </div>

            {/* Правая колонка */}
            <div className="w-1/2">
              <Image
                src={imageFeedBack}
                alt="Акция ресторана - дарим дюжину устриц при покупке краба."
                width="768"
                height="1214"
              />
            </div>
          </div>

          <FeedBackOysters classMarginTop={"mt-0"} classVisible={"hidden"} />
        </div>
      </section>

      <section className="pt-[120px]">
        <div className="lg:container mx-auto">
          <h2 className="oysters_title">о ресторане</h2>
          <p className="mt-16 oysters_text">
            Oysters — твое место безупречного вкуса в ТРК «СИТИ ЦЕНТР». Мы
            превратили гастрономию в&nbsp;искусство: от{" "}
            <span className="text-[#FBF79F]">
              живых королевских крабов и премиальных устриц Жилардо
            </span>{" "}
            до атмосферных вечеров под звуки живой скрипки.
          </p>

          <div className="mt-20 flex gap-6">
            <div className="w-1/2">
              <Image
                src={oRestorane1}
                alt="Фото ресторана"
                width="768"
                height="519"
              />
            </div>
            <div className="w-1/2">
              <Image
                src={oRestorane2}
                alt="Фото ресторана"
                width="768"
                height="338"
              />
              <p className="mt-14 oysters_text text-end indent-16">
                уютная атмосфера и эстетика настоящего luxury-формата
              </p>
            </div>
          </div>

          <div className="mt-6 flex gap-6">
            <div className="flex-1">
              <VideoMain
                videoLink={"/butiks/kafe/Oysters/oRestoraneVideo1.mp4"}
              />
            </div>

            <div className="flex-[3] relative overflow-hidden">
              <Image
                src={oRestorane3}
                alt="Фото ресторана"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-6 flex gap-6">
            <div className="flex-[2]">
              <p className="mt-8 mb-14 oysters_text">
                элегантная подача блюд морской кухни, приготовленных на ваших
                глазах
              </p>
              <Image
                src={oRestorane4}
                alt="Фото ресторана"
                width="768"
                height="790"
              />
              <p className="mt-8 oysters_text">
                Сочно, нежно, ярко. <br /> В Oysters краб — это не просто блюдо,
                <br /> это гастрономическое событие
              </p>
            </div>

            <div className="flex-[2] flex flex-col gap-6">
              <div className="flex gap-6">
                <div className="w-[50%]">
                  <VideoMain
                    videoLink={"/butiks/kafe/Oysters/oRestoraneVideo2.mp4"}
                  />
                </div>
                <div className="flex-1 relative overflow-hidden">
                  <Image
                    src={oRestorane9}
                    alt="Фото ресторана"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 relative overflow-hidden">
                <Image
                  src={oRestorane10}
                  alt="Фото ресторана"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex gap-6 items-stretch">
            <div className="flex-[0_0_calc(50%-12px)] relative">
              <Image
                src={oRestorane5}
                alt="Фото ресторана"
                width={768}
                height={940}
                className="w-full h-auto block"
              />
            </div>

            <div className="flex-[0_0_calc(25%-12px)] flex flex-col gap-6">
              <div className="flex-1 relative overflow-hidden">
                <Image
                  src={oRestorane6}
                  alt="Фото ресторана"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 relative overflow-hidden">
                <Image
                  src={oRestorane7}
                  alt="Фото ресторана"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex-[0_0_calc(25%-24px)] relative overflow-hidden">
              <Image
                src={oRestorane8}
                alt="Фото ресторана"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <FeedBackOysters classMarginTop={"mt-20"} classVisible={""} />
        </div>
      </section>

      <section className="pt-[120px]">
        <div className="lg:container mx-auto">
          <h2 className="oysters_title">меню</h2>
          <div className="mt-14">
            <MenuOystersBlock
              menu1={menu1}
              menu2={menu2}
              menu3={menu3}
              menu4={menu4}
              menu5={menu5}
              menu6={menu6}
            />
            <MenuOystersBlock
              menu1={menu7}
              menu2={menu8}
              menu3={menu9}
              menu4={menu10}
              menu5={menu11}
              menu6={menu12}
            />
          </div>

          <Link
            href="/butiks/kafe/oysters/menu/menu_23_01_26.pdf"
            target="_blank"
            className="w-1/2"
          >
            <div className="mt-20 py-2 lg:py-5 flex items-center justify-center gap-[10px] text-white text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-center border border-white hover:border-[#FBF79F]">
              <BsFilePdf className="-mt-1 text-3xl 2xl:text-4xl leading-none" />
              <h4 className="mt-1 oysters_text">
                посмотреть полное меню ресторана
              </h4>
            </div>
          </Link>

          <FeedBackOysters classMarginTop={"mt-20"} classVisible={""} />
        </div>
      </section>

      <section className="pt-[120px]">
        <div className="lg:container mx-auto">
          <h2 className="text-[3.65vw] 2xl:text-6xl leading-none">
            Подарите себе день, наполненный вкусом моря и эстетикой роскоши.
            Ждем вас в Oysters! 🥂
          </h2>

          <div className="relative">
            <Image
              src={endImage}
              alt="Краб и мидии"
              width="1920"
              height="1000"
              className="mt-20"
            />
            <Image
              src={yandexGoodPlace}
              alt="Яндекс хорошее место"
              width="212"
              height="358"
              className="absolute -bottom-40 right-0 w-[150px]"
            />
          </div>

          <table class="table-auto mt-12 oysters_text border-separate border-spacing-y-8">
            <tbody>
              <tr>
                <td class="pr-40">режим работы:</td>
                <td>с 12:00 до 21:00</td>
              </tr>
              <tr>
                <td>телефон:</td>
                <td>+7 (988) 195-27-75</td>
              </tr>
              <tr>
                <td class="align-top">адрес:</td>
                <td>
                  ТРК «Сити центр»,
                  <br /> ул. Индустриальная 2,
                  <br /> 2 этаж
                </td>
              </tr>
              <tr>
                <td>соцсети: </td>
                <td className="flex items-center gap-2">
                  <Image
                    src={telegramIcon}
                    alt="телеграм иконка"
                    width="48"
                    height="48"
                    className="-mt-1 w-8 2xl:w-10"
                  />
                  oysters_krd
                </td>
              </tr>
            </tbody>
          </table>

          <FeedBackOysters classMarginTop={"mt-6"} classVisible={""} />
        </div>
      </section>
    </Layout>
  );
}

export default Oysters;
