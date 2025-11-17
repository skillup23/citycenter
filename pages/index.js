// import ImageLink from '@/components/ImageLink';
import DocumentsPage from '@/components/DocumentsPage';
import Layout from '@/components/Layout';
import ShopListMain from '@/components/ShopListMain';
import SliderMain from '@/components/SliderMain';
import VideoMain from '@/components/VideoMain';
import YandexMap from '@/components/YandexMap';
import { kinoAfisha, shopList, sliderTop } from '@/public/data/data';
import news62 from '@/public/news/62.jpg';
import news59 from '@/public/news/59.jpg';
import news60 from '@/public/news/60.jpg';
import news61 from '@/public/news/61.jpg';
import imgShowroom from '@/public/showroom_img/showroomMainResize.png';
import imgShowroomMob from '@/public/showroom_img/showroomMainResizeMob.png';
import kinoBanner from '@/public/slide_main/kino-banner-12.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { FaBus, FaPhoneAlt } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';
import { MdEmail } from 'react-icons/md';
import { RiTimeFill } from 'react-icons/ri';

export default function Home() {
  return (
    <Layout title="ГЛАВНАЯ">
      {/*                      ОСНОВНОЙ СЛАЙДЕР                         */}

      <SliderMain data={sliderTop} dots={false} />

      {/*                      НОВОСТИ И АКЦИИ                        */}

      <section className="mb-12 sm:mb-20 border_section border-b-0">
        <div className="lg:container mx-auto">
          <div className="w-fill mt-10 py-6 bg-[#881012] text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center">
            Вы&nbsp;по‑прежнему&nbsp;оффлайн?
            В&nbsp;«Сити&nbsp;Центре»&nbsp;вы&nbsp;вновь&nbsp;в&nbsp;онлайне:
            созвониться,&nbsp;отправить&nbsp;файлы,&nbsp;вызвать&nbsp;такси&nbsp;—&nbsp;легко
          </div>
          <h1 className="title_main px-2 sm:px-0 mt-10">Новости и акции</h1>
          {/* <ShopListMain items={news} classItem="mt-10" /> */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 w-full gap-2">
            <Link
              href="/news#new1"
              className="block relative w-full overflow-hidden h-full"
            >
              <Image
                src={news62}
                alt="Новость"
                width="0"
                height="0"
                style={{ width: '100%', height: '100%' }}
                priority
              />
              <div className='background_scale duration-300 text-center text-2xl md:text-3xl sm:text-4xl p-6 bg-[url("../public/news/62.jpg")]'></div>
            </Link>
            <Link
              href="/news#new2"
              className="block relative w-full overflow-hidden h-full"
            >
              <Image
                src={news61}
                alt="Новость"
                width="0"
                height="0"
                style={{ width: '100%', height: '100%' }}
                priority
              />
              <div className='background_scale duration-300 text-center text-2xl md:text-3xl sm:text-4xl p-6 bg-[url("../public/news/61.jpg")]'></div>
            </Link>
            <Link
              href="/news#new3"
              className="block relative w-full overflow-hidden h-full"
            >
              <Image
                src={news60}
                alt="Новость"
                width="0"
                height="0"
                style={{ width: '100%', height: '100%' }}
                priority
              />
              <div className='background_scale duration-300 text-center text-2xl md:text-3xl sm:text-4xl p-6 bg-[url("../public/news/60.jpg")]'></div>
            </Link>
            <Link
              href="/news#new4"
              className="block relative w-full overflow-hidden h-full"
            >
              <Image
                src={news59}
                alt="Новость"
                width="0"
                height="0"
                style={{ width: '100%', height: '100%' }}
                priority
              />
              <div className='background_scale duration-300 text-center text-2xl md:text-3xl sm:text-4xl p-6 bg-[url("../public/news/59.jpg")]'></div>
            </Link>
          </div>
        </div>
      </section>

      {/*                      АНОНСЫ КИНО                         */}

      <section className="mb-2 sm:mb-20">
        <div className="lg:container mx-auto">
          <h2 className="title_main px-2 sm:px-0 text-[50px] sm:text-[7vw] mt-12 mb-10">
            Анонсы кинопоказов
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-6 justify-between gap-2 sm:gap-3">
            {kinoAfisha.map(({ id, img }) => {
              return (
                <Link
                  key={id}
                  href="https://kinomonitor.ru/cinemas/111/seances"
                  className="block relative w-full overflow-hidden h-full"
                  target={'_blank'}
                >
                  <Image
                    src={img}
                    alt="Киноафиша"
                    width="0"
                    height="0"
                    className="ease-in duration-150 md:grayscale hover:grayscale-0"
                    priority
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/*                      СЛАЙДЕР КИНОТЕАТР                         */}

      <section className="relative mt-2 sm:mt-20" id="kinoteatr">
        {/* <SliderMain data={sliderCenter} dots={true} /> */}
        <div className="lg:container mx-auto">
          <Link
            href="https://wa.me/79994120012?text=Добрый%20день.%20Расскажите,%20пожалуйста,%20об%20условиях%20аренды%20кинозала"
            target={'_blank'}
          >
            <Image
              src={kinoBanner}
              alt="Киноафиша"
              width="0"
              height="0"
              className=""
              priority
            />
          </Link>
        </div>

        {/* <Image
          src={text2}
          alt="slide1"
          width="0"
          height="0"
          sizes="100%"
          className="absolute top-2 md:top-6 right-0 w-1/12"
        /> */}
      </section>

      {/*                      БУТИКИ                         */}

      <section className="mb-12 sm:mb-28 scroll-mt-20" id="bitiki">
        <div className="lg:container mx-auto">
          <h2 className="title_main px-2 sm:px-0 mt-12 sm:mt-20 mb-6 sm:mb-10">
            БУТИКИ
          </h2>
          <ShopListMain items={shopList} />
        </div>

        <div className="lg:container mx-auto mt-10 sm:mt-20">
          <Link href="/showroom">
            <Image
              src={imgShowroom}
              alt="Шоурум ссылка"
              width="0"
              height="0"
              className="hidden sm:block"
              priority
            />
            <Image
              src={imgShowroomMob}
              alt="Шоурум ссылка"
              width="0"
              height="0"
              className="block sm:hidden"
              priority
            />
          </Link>
        </div>
      </section>

      {/*                      СЦЕНАРИИ                         */}

      <section className="mt-12 sm:mt-24">
        <div className="lg:container mx-auto sm:pr-5">
          <div className="flex flex-col sm:flex-row mt-12 sm:mt-20 px-3 sm:px-0 gap-10">
            <div className="w-full sm:w-[55%]">
              <h2 className="title_main mb-6 sm:mb-10 -mt-4">О НАС</h2>
              <p className="text-left mr-auto text-2xl sm:text-3xl lg:text-4xl ">
                ТРК «СИТИ ЦЕНТР» — это сочетание изысканного шопинга, ярких
                впечатлений и эстетики. Здесь Вас ждут магазины премиальных
                брендов, ресторан итальянской кухни и VIP-кинотеатр, а также
                уникальные Event-мероприятия для Вас и Ваших близких!
              </p>
            </div>

            <div className="w-full sm:w-[45%]">
              <VideoMain videoLink={'/site_img/city_FHD_6.mp4'} />
            </div>
          </div>
        </div>
      </section>

      {/*                      ДОКУМЕНТЫ                        */}

      <section className="mt-12 sm:mt-20">
        <DocumentsPage />
      </section>

      {/*                      КОНТАКТЫ                        */}

      <section className="mt-12 sm:mt-20">
        <div className="lg:container mx-auto">
          <h2 className="title_main mb-6 sm:mb-10 md:mb-0">КОНТАКТЫ</h2>
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
                    КИНОТЕАТР «МОНИТОР CITI DE LUXE» - ДО ОКОНЧАНИЯ ПОСЛЕДНЕГО
                    СЕАНСА
                  </h4>
                  <h4 className="text-lg md:text-xl mt-2">
                    КАФЕ И РЕСТОРАН - ДО 22:00
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
      {/*                      КИНОТЕАТР ИНФОРМАЦИЯ                        */}

      {/* <section className="mt-20">
        <div className="lg:container mx-auto pr-5 flex flex-col lg:flex-row gap-12">
          <div className="flex flex-col w-full lg:w-1/2 pl-3">
            <div className="flex gap-12 w-1/2 mb-12 items-start px-5 sm:px-0">
              <Link
                href="/events"
                className="h-full flex items-center justify-center"
              >
                <Image
                  src={logoMonitor1}
                  alt="Лого Монитор"
                  width="200"
                  height="0"
                  sizes="100%"
                  className=""
                />
              </Link>
              <Link
                href="https://kinomonitor.ru/vip/afisha"
                className="h-full flex items-center justify-center"
                target={"_blank"}
              >
                <Image
                  src={logoMonitor2}
                  alt="Лого Монитор Делюкс"
                  width="150"
                  height="0"
                  sizes="100%"
                  className=""
                />
              </Link>
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
      </section> */}

      {/*                      КИНОТЕАТР ССЫЛКИ                        */}

      {/* <section className="mt-10 sm:mt-20">
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
      </section> */}

      {/*                      РЕСТОРАНЫ                        */}

      {/* <section className="mb-20 sm:mb-28" id="restoran">
        <div className="lg:container mx-auto">
          <h2 className="title_main mt-14 sm:mt-20">РЕСТОРАНЫ</h2>
          <ListButiks
            butiks={butiks}
            category={'kafeAndRestoran'}
            butiksUrl={'kafe'}
            noBrend={true}
          >
            <ImageLink
              href="https://frenchkiss.ru/stores/"
              src={restoran2}
              target="_blank"
              alt="French kiss"
            />
          </ListButiks>
        </div>
      </section> */}

      {/*                      ДЕТЯМ                        */}

      {/* <section className="mb-20 sm:mb-28" id="detyam">
        <div className="lg:container mx-auto">
          <h2 className="title_main mt-4 sm:mt-20">ДЕТЯМ</h2>
          <ListButiks
            butiks={butiks}
            category={'children'}
            butiksUrl={'children'}
            noBrend={true}
          />

          <Image
            src={PrezentMain}
            alt="ПОДАРКИ И ТОВАРЫ ДЛЯ ДЕТЕЙ"
            width="fill"
            height="0"
            sizes="100%"
            className=""
            priority
          />
        </div>
      </section> */}
      {/* <div className="grid grid-cols-2 gap-y-8 sm:gap-y-0 sm:flex sm:flex-row mt-10 sm:mt-28 lg:mt-64 2xl:mt-40">
            <Link
              href="/scenarios/meeting"
              className="flex flex-col items-center sm:-mt-20 lg:-mt-72 z-10"
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
              className="flex flex-col items-center sm:-mx-10 sm:-mt-14 lg:-mt-56 2xl:-mt-40"
            >
              <Image
                src={event2}
                alt="событие 2"
                width={500}
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
              className="flex flex-col items-center lg:-mt-40 2xl:-mt-10"
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
              className="flex flex-col items-center sm:-ml-10 lg:-mt-20 2xl:mt-10"
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
          </div> */}
    </Layout>
  );
}
