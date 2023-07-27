import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';
import SliderMain from '@/components/SliderMain';
import ShopListMain from '@/components/ShopListMain';
import ImageLink from '@/components/ImageLink';
import text1 from '@/public/site_img/текст-1.png';
import text2 from '@/public/site_img/текст-2.png';
import event1 from '@/public/site_img/event1.png';
import event2 from '@/public/site_img/event2.png';
import event3 from '@/public/site_img/event3.png';
import event4 from '@/public/site_img/event4.png';
import PrezentMain from '@/public/site_img/PrezentMain.jpg';
import logoMonitor1 from '@/public/site_img/лого-монитор.png';
import logoMonitor2 from '@/public/site_img/лого-монитор-2.png';
import cinemaIkon1 from '@/public/site_img/кино-иконка-1.png';
import cinemaIkon2 from '@/public/site_img/кино-иконка-2.png';
import cinemaIkon3 from '@/public/site_img/кино-иконка-3.png';
import cinemaIkon4 from '@/public/site_img/кино-иконка-4.png';
import restoran1 from '@/public/site_img/1-дон-базилио.png';
import restoran2 from '@/public/site_img/3-френч-кис.png';
import children1 from '@/public/site_img/игратория.png';
import children2 from '@/public/site_img/LapinHouse.png';
// import children4 from '@/public/site_img/3-метро-беби.png';
import children5 from '@/public/site_img/2-книжный-лабиринт.png';
import { HiLocationMarker } from 'react-icons/hi';
import { MdEmail } from 'react-icons/md';
import { RiTimeFill } from 'react-icons/ri';
import { FaBus, FaPhoneAlt } from 'react-icons/fa';
import { sliderTop, sliderCenter } from '@/public/data/data';
import YandexMap from '@/components/YandexMap';
// import NewsMain from '@/components/NewsMain';

export default function Home() {
  return (
    <Layout title="ГЛАВНАЯ">
      {/*                      ОСНОВНОЙ СЛАЙДЕР                         */}

      <SliderMain data={sliderTop} dots={false} />

      {/*                      СЦЕНАРИИ                         */}

      <section className="border_section border-b-0">
        <div className="lg:container mx-auto pr-5">
          <h2 className="title_main text-right mt-6 sm:mt-12">СЦЕНАРИИ</h2>

          <Image
            src={text1}
            alt="slide1"
            width="0"
            height="0"
            sizes="100vw"
            className="w-10/12 sm:w-3/5 h-auto block ml-auto mt-2"
            priority
          />

          <p className="w-full sm:w-2/5 text-right ml-auto subtitle_main mt-8">
            ТРК “СИТИ ЦЕНТР” — место притяжения успешных людей. В комплексе
            представлено большое количество премиальных брендов с разнообразным
            ассортиментом, рестораны итальянской кухни и VIP-кинотеатр. В ТРК
            «СИТИ ЦЕНТР» вы с удовольствием проведёте время в комфортной
            обстановке спокойствия и люксового шоппинга.
          </p>

          <div className="grid grid-cols-2 gap-y-8 sm:gap-y-0 sm:flex sm:flex-row mt-10">
            <Link
              href="/scenarios/meeting"
              className="flex flex-col items-center sm:-mt-64 lg:-mt-96 z-10"
            >
              <Image
                src={event1}
                alt="событие 1"
                width={450}
                className="ease-in duration-300 grayscale hover:grayscale-0"
                priority
              />
              <div className="bg-white max-w-xs -mt-12 z-20">
                <p className="text-center text-base mb:text-xl lg:text-2xl text-black py-2 px-3 mb:py-4 mb:px-5">
                  Проведите романтическое <br></br>свидание
                </p>
              </div>
            </Link>

            <Link
              href="/scenarios/holiday"
              className="flex flex-col items-center sm:-mx-24 sm:-mt-16 lg:-mt-36"
            >
              <Image
                src={event2}
                alt="событие 2"
                width={700}
                className="ease-in duration-300 grayscale hover:grayscale-0"
                priority
              />
              <div className="bg-white max-w-xs -mt-12 z-20">
                <p className="text-center text-base mb:text-xl lg:text-2xl text-black py-2 px-3 mb:py-4 mb:px-5">
                  Семейный праздник и <br></br>детский день рождения
                </p>
              </div>
            </Link>

            <Link
              href="/scenarios/case"
              className="flex flex-col items-center lg:-mt-10"
            >
              <Image
                src={event3}
                alt="событие 3"
                width={500}
                className="ease-in duration-300 grayscale hover:grayscale-0"
                priority
              />
              <div className="bg-white max-w-xs -mt-12 z-20">
                <p className="text-center text-base mb:text-xl lg:text-2xl text-black py-2 px-3 mb:py-4 mb:px-5">
                  Приготовьтесь <br></br>к особому случаю
                </p>
              </div>
            </Link>

            <Link
              href="/scenarios/business"
              className="flex flex-col items-center sm:-ml-10 sm:mt-10"
            >
              <Image
                src={event4}
                alt="событие 4"
                width={500}
                className="ease-in duration-300 grayscale hover:grayscale-0"
                priority
              />
              <div className="bg-white max-w-xs -mt-12 z-20">
                <p className="text-center text-base mb:text-xl lg:text-2xl text-black py-2 px-3 mb:py-4 mb:px-5">
                  Проведите <br></br>деловую встречу
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/*                      БУТИКИ                         */}

      <section className="mb-20 sm:mb-28" id="bitiki">
        <div className="lg:container mx-auto">
          <h2 className="title_main mt-12">БУТИКИ</h2>
          <ShopListMain />
        </div>
      </section>

      {/*                      СЛАЙДЕР КИНОТЕАТР                         */}

      <section className="relative" id="kinoteatr">
        <SliderMain data={sliderCenter} dots={true} />
        <Image
          src={text2}
          alt="slide1"
          width="0"
          height="0"
          sizes="100%"
          className="absolute top-2 md:top-6 right-0 w-1/12"
        />
      </section>

      {/*                      КИНОТЕАТР ИНФОРМАЦИЯ                        */}

      <section className="mt-20">
        <div className="lg:container mx-auto pr-5 flex flex-col lg:flex-row gap-12">
          <div className="flex flex-col w-full lg:w-1/2 pl-3">
            <div className="flex gap-12 w-1/2 mb-12 items-start px-5 sm:px-0">
              <Image
                src={logoMonitor1}
                alt="Лого Монитор"
                width="200"
                height="0"
                sizes="100%"
                className=""
              />
              <Image
                src={logoMonitor2}
                alt="Лого Монитор Делюкс"
                width="150"
                height="0"
                sizes="100%"
                className=""
              />
            </div>
            <p className="mb-5 sm:mb-8 text-l sm:text-xl">
              «МОНИТОР Сити de Luxe» — кинотеатр нового уровня, соответствующий
              актуальным трендам мирового кинопоказа и современного дизайна.
              Кинотеатр оборудован высококачественной кинопроекционной системой
              Sony Digital.Cinema 4K с функцией показа максимально чёткого
              изображения.
            </p>
            <p className="mb-5 sm:mb-8 text-l sm:text-xl">
              В двух комфортных залах на 62 и 64 места установлены удобные
              кресла с выдвижными столиками, огромным личным пространством и
              большим расстоянием между рядами. Все кресла имеют выдвижную
              слайдер-систему. Последний ряд оборудован раскладывающимися
              креслами-реклайнерами с подставкой для ног, которые можно привести
              в полностью горизонтальное положение.
            </p>
            <p className="mb-5 sm:mb-8 text-l sm:text-xl">
              Также у нас вы можете заказать еду из ресторана прямо в кинозал.
              Официант принесёт заказ и разместит его на столике у кресла.
            </p>
          </div>

          <div className="flex flex-row flex-wrap w-full lg:w-1/2 items-start content-start">
            <div className="flex flex-row w-1/2 items-center">
              <Image
                src={cinemaIkon1}
                alt="Кесло"
                width="100"
                height="0"
                sizes="100%"
                className="px-4 sm:pl-0 sm:pr-8"
              />
              <h4 className="sm:w-3/5 text-xl sm:text-3xl xl:text-4xl">
                Только Vip&#8209;кресла
              </h4>
            </div>
            <div className="flex flex-row w-1/2 items-center">
              <Image
                src={cinemaIkon2}
                alt="Кесло"
                width="100"
                height="0"
                sizes="100%"
                className="px-4 sm:pl-0 sm:pr-8"
              />
              <h4 className="sm:w-3/5 text-xl sm:text-3xl xl:text-4xl">
                Lounge-зона
              </h4>
            </div>
            <div className="flex flex-row w-1/2 items-center mt-12 sm:mt-28">
              <Image
                src={cinemaIkon3}
                alt="Кесло"
                width="100"
                height="0"
                sizes="100%"
                className="px-4 sm:pl-0 sm:pr-8"
              />
              <h4 className="sm:w-3/5 text-xl sm:text-3xl xl:text-4xl">
                Sony digital cinema 4k
              </h4>
            </div>
            <div className="flex flex-row w-1/2 items-center mt-12 sm:mt-28">
              <Image
                src={cinemaIkon4}
                alt="Кесло"
                width="100"
                height="0"
                sizes="100%"
                className="px-5 sm:pl-0 sm:pr-8"
              />
              <h4 className="sm:w-3/5 text-xl sm:text-3xl xl:text-4xl -ml-3 sm:ml-0">
                Обслуживание официантами
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/*                      КИНОТЕАТР ССЫЛКИ                        */}

      <section className="mt-10 sm:mt-20">
        <div className="lg:container mx-auto">
          <ul className="flex w-full items-center justify-between">
            <Link
              href="https://kinomonitor.ru/cinemas/sity/schedule/#tabs"
              target="_blank"
              className="link_kino text-base sm:text-xl mb:text-2xl"
            >
              Расписание
            </Link>
            <Link
              href="/events"
              className="link_kino text-base sm:text-xl mb:text-2xl"
            >
              События
            </Link>
            <Link
              href="https://kinomonitor.ru/cinemas/sity/hallplans/"
              target="_blank"
              className="link_kino text-base sm:text-xl mb:text-2xl"
            >
              Схема зала
            </Link>
            <Link
              href="/events/#cinemacontacts"
              className="link_kino text-base sm:text-xl mb:text-2xl"
            >
              Контакты
            </Link>
          </ul>
        </div>
      </section>

      {/*                      РЕСТОРАНЫ                        */}

      <section className="mb-20 sm:mb-28" id="restoran">
        <div className="lg:container mx-auto">
          <h2 className="title_main mt-14 sm:mt-20">РЕСТОРАНЫ</h2>
          <div className="flex justify-center items-start gap-10 sm:gap-48 my-10 sm:my-24">
            <ImageLink
              href="http://donbazilio.ru/"
              src={restoran1}
              alt="Дон Базилио"
            />
            <ImageLink
              href="https://frenchkiss.ru/stores/"
              src={restoran2}
              alt="French kiss"
            />
          </div>
        </div>
      </section>

      {/*                      ДЕТЯМ                        */}

      <section className="mb-20 sm:mb-28" id="detyam">
        <div className="lg:container mx-auto">
          <h2 className="title_main mt-4 sm:mt-20">ДЕТЯМ</h2>
          <div className="flex justify-center items-center my-4 sm:my-24 gap-8 sm:gap-36 flex-wrap md:flex-nowrap">
            <ImageLink
              href="/butiks/game/41"
              src={children1}
              alt="Игратория"
              cssClass="mr-auto ml-auto -mt-1"
            />
            <ImageLink
              href="/butiks/children/19"
              src={children2}
              alt="Lapin House"
              cssClass="mr-auto ml-auto"
            />
            <ImageLink
              href="/butiks/game/20"
              src={children5}
              alt="Книжный лабиринт"
              className=""
            />
            <Link
              href="/butiks/children/42"
              className="w-1/3 h-fill text-base sm:text-3xl lg:text-5xl ease-in duration-200 hover:scale-105"
            >
              Дом детской моды
            </Link>
          </div>
          <Image
            src={PrezentMain}
            alt="ПОДАРКИ И ТОВАРЫ ДЛЯ ДЕТЕЙ"
            width="fill"
            height="0"
            sizes="100%"
            className=""
            priority
          />
          {/* <div className="flex justify-center items-center my-6 sm:my-24 gap-8 sm:gap-36">
            <ImageLink
              href="/butiks/children/30"
              src={children4}
              alt="Metro Baby"
            />
            <ImageLink
              href="/butiks/game/20"
              src={children5}
              alt="Книжный лабиринт"
              className="w-1/3"
            />
            <div className="w-1/3"></div>
            <div className="w-1/3"></div>
            <div className="w-1/3"></div>
          </div> */}
        </div>
      </section>

      {/*                      КОНТАКТЫ                        */}

      <section className="mt-20">
        <div className="lg:container mx-auto">
          <h2 className="title_main mt-20 mb-10 md:mb-0">КОНТАКТЫ</h2>
          <div className="pr-5 flex flex-col md:flex-row gap-12">
            <div className="flex flex-col w-fill md:w-1/3 pl-3 justify-between gap-5">
              <div className="flex flex-row w-fill items-center">
                <HiLocationMarker className="text-lg md:text-xl mr-5" />
                <h4 className="text-lg md:text-xl">
                  Г. КРАСНОДАР, УЛ. ИНДУСТРИАЛЬНАЯ, 2
                </h4>
              </div>
              <div className="flex flex-row w-fill items-center">
                <FaPhoneAlt className="text-lg md:text-xl mr-5" />
                <Link href="tel:88612134700" className="text-lg md:text-xl">
                  8 (861) 213 47 00
                </Link>
              </div>
              <div className="flex flex-row w-fill items-center">
                <MdEmail className="text-lg md:text-xl mr-5" />
                <Link
                  href="mailto:info@citycenter.ru"
                  className="text-lg md:text-xl"
                >
                  INFO@CITYCENTER.RU
                </Link>
              </div>
              <div className="flex flex-row w-fill items-start">
                <RiTimeFill className="text-lg md:text-xl mr-5 mt-1" />
                <div>
                  <h4 className="text-lg md:text-xl">ЧАСЫ РАБОТЫ:</h4>
                  <h4 className="text-lg md:text-xl mt-2">
                    УНИВЕРСАМ «ПЕРЕКРЕСТОК» - КРУГЛОСУТОЧНО
                  </h4>
                  <h4 className="text-lg md:text-xl mt-2">
                    КИНОТЕАТР «CITI DE LUXE» - ДО ОКОНЧАНИЯ ПОСЛЕДНЕГО СЕАНСА
                  </h4>
                  <h4 className="text-lg md:text-xl mt-2">
                    КАФЕ И РЕСТОРАН - ДО 23:00
                  </h4>
                  <h4 className="text-lg md:text-xl mt-2">
                    МАГАЗИНЫ - С 10:00 ДО 22:00
                  </h4>
                </div>
              </div>
              <div className="flex flex-row w-fill items-start">
                <FaBus className="text-lg md:text-xl mr-5 mt-1" />
                <div>
                  <h4 className="text-lg md:text-xl">КАК ДОБРАТЬСЯ:</h4>
                  <h4 className="text-lg md:text-xl mt-2">
                    МАРШРУТНОЕ ТАКСИ № 3, 5А, 7А, 8А, 21, 26А, 44, 95
                  </h4>
                  <h4 className="text-lg md:text-xl mt-2">
                    ТРОЛЛЕЙБУСОМ № 9, 10, 15
                  </h4>
                  <h4 className="text-lg md:text-xl mt-2">ТРАМВАЕМ № 4, 2</h4>
                </div>
              </div>
            </div>
            <div className="flex flex-row flex-wrap w-full md:w-2/3 items-start content-start">
              <YandexMap />
            </div>
          </div>
        </div>
      </section>

      {/* <NewsMain /> */}
    </Layout>
  );
}
