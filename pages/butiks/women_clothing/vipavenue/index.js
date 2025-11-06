import Butik from '@/components/Butik';
import Layout from '@/components/Layout';
import SliderVipAvenue from '@/components/SliderVipAvenue';
import { sliderVipAvenue } from '@/public/data/data';
import Link from 'next/link';

function Vipavenue() {
  const butik = {
    id: 1001,
    category: 'womenClothing',
    url: 'VIPAVENUE',
    logo: '/butiks/womenClothing/VIPAVENUE/logo.png',
    image: [
      {
        id: 1,
        src: '/butiks/womenClothing/VIPAVENUE/logo.png',
        alt: 'VIPAVENUE',
      },
    ],
    description1:
      'VIPAVENUE – Ваш модный проводник в мир премиальных брендов и высококлассного сервиса. Интернет-бутик является частью фэшн-ритейлера AVENUEVIP, в котором представлены более 750 ведущих мировых и российских брендов. Уже более четырех лет мы работаем, как маркетплейс с самыми проверенными и надежными партнерами на российском рынке, для того, чтобы радовать Вас новым ассортиментом.',
    description2:
      'Нашими главными преимуществами являются - персонализированный подход к каждому клиенту, удобство покупок на сайте и в мобильном приложении, возможность примерки перед покупкой, лучшие предложения и акции, еженедельное обновление ассортимента и услуга онлайн-стилиста, который подберет Вам образ для любого случая.',
    description3:
      'Познакомиться поближе с нашими бутиками Вы можете на официальном сайте сети AVENUE VIP www.avenuevip.ru',
    floor: '2 этаж',
    tel: '+7 861 21 87 810',
    telUrl: '88612187810',
    instagram: '',
  };

  return (
    <Layout title="VIPAVENUE - бутик в ТРК «СИТИ ЦЕНТР» ">
      <Butik butik={butik}></Butik>

      <div className="mt-10 -mb-2 sm:-mb-16 pt-8 pb-16 sm:pb-8 bg-white">
        <h2 className="title_main text-black text-center px-2 sm:px-0 text-[40px] sm:text-[3vw]">
          Актуальные образы
        </h2>
        <div className="mx-auto mt-4 sm:mt-0">
          <SliderVipAvenue data={sliderVipAvenue} />
        </div>

        <div className="lg:container mx-auto px-4 lg:px-0">
          <Link
            href="https://vipavenue.ru/"
            target="_blank"
            className="w-72 my-10 mx-auto block text-center text-2xl sm:text-3xl md:text-4xl border-2 p-2 border-black hover:bg-black text-black hover:text-white ease-in duration-200"
          >
            Получить подарок*
          </Link>

          <p className="text-black text-center">
            *При личном получении онлайн-заказа в ТРК «СИТИ ЦЕНТР»
            VIPAVENUE&nbsp;дарит 5% дополнительно
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Vipavenue;
