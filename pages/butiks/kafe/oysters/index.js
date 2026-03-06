import Layout from '@/components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import crabOrange from '@/public/butiks/kafe/Oysters/krabOrange.png';
import logo from '@/public/butiks/kafe/Oysters/logo.png';
import SalesFotoMan from '@/public/butiks/kafe/Oysters/SalesFotoMan.jpg';
import krabWhite from '@/public/butiks/kafe/Oysters/krabWhite.png';
import ravnoWhite from '@/public/butiks/kafe/Oysters/ravnoWhite.png';
import ystriciWhite from '@/public/butiks/kafe/Oysters/ystriciWhite.png';

function Oysters() {
  return (
    <Layout
      title="Ресторан устриц Oysters в в ТРЦ «Сити Центр»"
      description="Oysters — твое место безупречного вкуса в ТРК «Сити Центр». Мы превратили гастрономию в искусство: от живых королевских крабов и премиальных устриц Жилардо до атмосферных вечеров под звуки живой скрипки."
    >
      <section className='relative w-full h-[89vh] pt-[120px] pb-24 bg-[url("../public/butiks/kafe/Oysters/firstScreen.jpg")] bg-[center_top_-185px] bg-cover'>
        <div className="lg:container mx-auto">
          <div className="flex flex-col">
            <h1 className="text-8xl mb-8">
              <span className="font-bold">Oysters</span> в ТРЦ «Сити Центр»
            </h1>
            <h2 className="text-5xl">свежие устрицы, морская кухня и вино</h2>

            <Link
              href="/butiks/kafe/oysters#formfeed"
              className="w-fit mt-[421px]"
            >
              <div className="py-2 px-8 lg:py-3 lg:px-16 bg-white text-black text-lg md:text-xl lg:text-2xl xl:text-4xl text-center hover:bg-[#FBF79F]">
                забронировать столик
              </div>
            </Link>
          </div>
        </div>

        <Link
          href="/butiks/kafe/oysters#formfeed"
          className='absolute w-[402px] h-[322px] px-4 pt-14 flex flex-col justify-center items-end bottom-0 right-0 bg-[url("../public/butiks/kafe/Oysters/RectangleFirstScreen.png")] bg-right-bottom bg-cover'
        >
          <Image
            src={crabOrange}
            alt="Акция"
            width="100"
            height="100"
            priority
          />
          <h5 className="mr-2 text-4xl text-black text-right">
            Дарим <br />
            дюжину устриц <br />
            при покупке краба!
          </h5>
        </Link>
      </section>

      <section className="pt-[120px]">
        <div className="lg:container mx-auto">
          <div>
            <h2 className="text-8xl">Ресторан устриц в ТРЦ «СИТИ ЦЕНТР»</h2>
            <p className="mt-20 text-[46px] leading-none indent-16">
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
              className="mx-auto mt-8"
            />
          </div>

          <div className="flex gap-6">
            <Image
              src={SalesFotoMan}
              alt="Акция ресторана - дарим дюжину устриц при покупке краба."
              width="768"
              height="996"
              sizes="(max-width: 768px) 100vw, 768px"
              className="w-1/2 h-auto"
            />
            <div className="w-1/2 flex flex-col">
              <h2 className="text-8xl">акция</h2>
              <h4 className="mt-20 text-5xl text-[#FBF79F]">
                дарим дюжину устриц при покупке краба.
              </h4>
              <div className="mt-[73px] flex items-center justify-center gap-8">
                <Image
                  src={krabWhite}
                  alt="Краб иконка"
                  width="122"
                  height="122"
                />
                <Image
                  src={ravnoWhite}
                  alt="Равно иконка"
                  width="60"
                  height="18"
                />
                <div className="flex items-center justify-center gap-2">
                  <h3 className="text-6xl">12 Х</h3>
                  <Image
                    src={ystriciWhite}
                    alt="Устрицы иконка"
                    width="100"
                    height="80"
                  />
                </div>
              </div>

              <h4 className="mt-20 w-11/12 text-5xl">
                чтобы воспользоваться акцией - введите промокод{' '}
                <span className="text-[#FBF79F]">«СИТИ ЦЕНТР»</span> при
                бронировании столика или скажите его своему официанту.
              </h4>

              <Link href="/butiks/kafe/oysters#formfeed" className="mt-auto">
                <div className="py-2 px-8 lg:py-3 lg:px-16 bg-white text-black text-lg md:text-xl lg:text-2xl xl:text-4xl text-center hover:bg-[#FBF79F]">
                  забронировать столик
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-[120px]">
        <div className="lg:container mx-auto">
          <h2 className="text-8xl">почему к нам?</h2>
        </div>
      </section>
    </Layout>
  );
}

export default Oysters;
