import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';
import SliderMain from '@/components/SliderMain';
import text1 from '@/public/site_img/текст-1.png';
import text2 from '@/public/site_img/текст-2.png';
import event1 from '@/public/site_img/event1.png';
import event2 from '@/public/site_img/event2.png';
import event3 from '@/public/site_img/event3.png';
import event4 from '@/public/site_img/event4.png';
import logoMonitor1 from '@/public/site_img/лого-монитор.png';
import logoMonitor2 from '@/public/site_img/лого-монитор-2.png';
import cinemaIkon1 from '@/public/site_img/кино-иконка-1.png';
import cinemaIkon2 from '@/public/site_img/кино-иконка-2.png';
import cinemaIkon3 from '@/public/site_img/кино-иконка-3.png';
import cinemaIkon4 from '@/public/site_img/кино-иконка-4.png';
import ShopListMain from '@/components/ShopListMain';
import { sliderTop, sliderCenter } from '@/public/data/data';

export default function Home() {
  return (
    <Layout title="Главная">
      <SliderMain data={sliderTop} dots={false} />
      <section className="border_section border-b-0">
        <div className="container mx-auto pr-5">
          <h2 className="title_main text-right mt-12">СЦЕНАРИИ</h2>

          <Image
            src={text1}
            alt="slide1"
            width="0"
            height="0"
            sizes="100vw"
            className="w-3/5 h-auto block ml-auto mt-2"
            priority
          />

          <p className="w-2/5 text-right ml-auto subtitle_main mt-8">
            ТРК “СИТИ ЦЕНТР” — место притяжения успешных людей. В комплексе
            представлено большое количество премиальных брендов с разнообразным
            ассортиментом, рестораны итальянской кухни и VIP-кинотеатр. В ТРК
            «СИТИ ЦЕНТР» вы с удовольствием проведёте время в комфортной
            обстановке спокойствия и люксового шоппинга.
          </p>

          <div className="flex flex-row mt-10">
            <Link href="/" className="flex flex-col items-center -mt-96 z-10">
              <Image
                src={event1}
                alt="событие 1"
                width={450}
                className="ease-in duration-300 grayscale hover:grayscale-0"
                priority
              />
              <div className="bg-white max-w-xs -mt-12 z-20">
                <p className="text-center text-2xl text-black py-4 px-4">
                  Проведите романтическое <br></br>свидание
                </p>
              </div>
            </Link>

            <Link href="/" className="flex flex-col items-center -mx-28 -mt-36">
              <Image
                src={event2}
                alt="событие 2"
                width={700}
                className="ease-in duration-300 grayscale hover:grayscale-0"
                priority
              />
              <div className="bg-white max-w-xs -mt-12 z-20">
                <p className="text-center text-2xl text-black py-4 px-5">
                  Семейный праздник и <br></br>десткий день рождения
                </p>
              </div>
            </Link>

            <Link href="/" className="flex flex-col items-center -mt-10">
              <Image
                src={event3}
                alt="событие 3"
                width={500}
                className="ease-in duration-300 grayscale hover:grayscale-0"
                priority
              />
              <div className="bg-white max-w-xs -mt-12 z-20">
                <p className="text-center text-2xl text-black py-4 px-5">
                  Приготовьтесь <br></br>к особому случаю
                </p>
              </div>
            </Link>

            <Link href="/" className="flex flex-col items-center -ml-10 mt-10">
              <Image
                src={event4}
                alt="событие 4"
                width={500}
                className="ease-in duration-300 grayscale hover:grayscale-0"
                priority
              />
              <div className="bg-white max-w-xs -mt-12 z-20">
                <p className="text-center text-2xl text-black py-4 px-5">
                  Проведите <br></br>деловую встречу
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section className="mb-28">
        <div className="container mx-auto">
          <h2 className="title_main mt-12">БУТИКИ</h2>
          <ShopListMain />
        </div>
      </section>
      <section className="relative">
        <SliderMain data={sliderCenter} dots={true} />
        <Image
          src={text2}
          alt="slide1"
          width="0"
          height="0"
          sizes="100%"
          className="absolute top-6 right-0 w-1/12"
        />
      </section>
      <section className="mt-24">
        <div className="container mx-auto pr-5 flex flex-row gap-12">
          <div className="flex flex-col w-1/2">
            <div className="flex gap-12 w-1/2 mb-12">
              <Image
                src={logoMonitor1}
                alt="Лого Монитор"
                width="200"
                height="auto"
                sizes="100%"
                className=""
              />
              <Image
                src={logoMonitor2}
                alt="Лого Монитор Делюкс"
                width="200"
                height="0"
                sizes="100%"
                className=""
              />
            </div>
            <p className="mb-8 text-xl">
              «МОНИТОР Сити de Luxe» — кинотеатр нового уровня, соответствующий
              актуальным трендам мирового кинопоказа и современного дизайна.
              Кинотеатр оборудован высококачественной кинопроекционной системой
              Sony Digital.Cinema 4K с функцией показа максимально чёткого
              изображения.
            </p>
            <p className="mb-8 text-xl">
              В двух комфортных залах на 62 и 64 места установлены удобные
              кресла с выдвижными столиками, огромным личным пространством и
              большим расстоянием между рядами. Все кресла имеют выдвижную
              слайдер-систему. Последний ряд оборудован раскладывающимися
              креслами-реклайнерами с подставкой для ног, которые можно привести
              в полностью горизонтальное положение.
            </p>
            <p className="mb-8 text-xl">
              Также у нас вы можете заказать еду из ресторана прямо в кинозал.
              Официант принесёт заказ и разместит его на столике у кресла.
            </p>
          </div>

          <div className="flex flex-row flex-wrap w-1/2">
            <div className="flex flex-row w-1/2">
              <Image
                src={cinemaIkon1}
                alt="Кесло"
                width="0"
                height="0"
                sizes="100%"
                className="w-1/2"
              />
              <h4>Только Vip-кресла</h4>
            </div>
            <div className="flex flex-row w-1/2">
              <Image
                src={cinemaIkon2}
                alt="Кесло"
                width="0"
                height="0"
                sizes="100%"
                className="w-1/2"
              />
              <h4>Lounge-зона</h4>
            </div>
            <div className="flex flex-row w-1/2">
              <Image
                src={cinemaIkon3}
                alt="Кесло"
                width="100"
                height="0"
                sizes="100%"
                className=""
              />
              <h4>Sony digital cinema 4k</h4>
            </div>
            <div className="flex flex-row w-1/2">
              <Image
                src={cinemaIkon4}
                alt="Кесло"
                width="100"
                height="0"
                sizes="100%"
                className=""
              />
              <h4>Обслуживание официантами</h4>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
