import FormShowRoom from '@/components/FormShowRoom';
import Layout from '@/components/Layout';
import { stilistShowRoom } from '@/public/data/data';
import Image from 'next/image';
import Link from 'next/link';

function ShowRoom() {
  return (
    <Layout
      title="Шоурум для VIP‑клиентов"
      description="Представляем вам уникальную услугу, которая позволит раскрыть всю
            палитру вашей индивидуальности. выберете персонального стилиста,
            который профессионально создаст ваш идеальный образ из лучших
            коллекций элитных бутиков ТРК «СИТИ ЦЕНТР»."
    >
      <div className="h-[25vh] sm:h-[89vh] bg-[url('/showroom_img/showroomMain.png')] bg-cover"></div>

      <section className="mt-10">
        <div className="lg:container mx-auto px-4 lg:px-0">
          <h1 className="mt-10 mb-8 sm:mt-14 sm:mb-14 lg:mt-20 lg:mb-20 show_room_title">
            VIP Showroom - это новый уровень шопинга
          </h1>

          <p className="mb-14 lg:mb-20 text-[5.3vw] lg:text-3xl xl:text-5xl indent-6 sm:indent-16 leading-none sm:leading-normal">
            Представляем вам уникальную услугу, которая позволит раскрыть всю
            палитру вашей индивидуальности. выберете персонального стилиста,
            который профессионально создаст ваш идеальный образ из лучших
            коллекций элитных бутиков ТРК «СИТИ ЦЕНТР».
          </p>

          <Link href="/showroom#formfeed">
            <div className="w-fill mt-10 py-2 sm:py-4 lg:py-6 bg-white text-black text-2xl lg:text-3xl xl:text-4xl text-center leading-none sm:leading-normal">
              выбрать стилиста и заказать
              услугу&nbsp;можно&nbsp;на&nbsp;нашем&nbsp;сайте
            </div>
          </Link>

          <h3 className="mt-12 mb-6 sm:mt-16 sm:mb-12 lg:mt-24 lg:mb-20 show_room_title leading-none">
            наши стилисты
          </h3>

          <div>
            {stilistShowRoom.map(
              ({ id, foto, title, subtitle, image, text }) => (
                <div
                  key={id}
                  className="mb-20 last:mb-0 lg:mb-40 flex flex-col sm:flex-row justify-between gap-5"
                >
                  <div className="w-full sm:w-1/2 flex flex-col justify-between">
                    <div className="w-full">
                      <Image
                        src={foto}
                        alt={id}
                        width="400"
                        height="800"
                        style={{ width: '100%', height: '100%' }}
                        priority
                      />
                    </div>
                    <h4 className="mt-6 sm:mt-0 show_room_title">{title}</h4>
                    <p className="show_room_text">{subtitle}</p>
                    <div className="mt-6 sm:mt-0">
                      {text.map((item, index) => (
                        <p key={index} className="show_room_text">
                          {item}
                        </p>
                      ))}
                    </div>

                    <Link href="/showroom#formfeed">
                      <div className="hidden sm:block py-2 lg:py-4 bg-white text-black text-lg md:text-xl lg:text-2xl xl:text-4xl text-center hover:bg-[#1e1a1b] hover:text-white border-white border">
                        заказать услугу
                      </div>
                    </Link>
                  </div>

                  <div className="w-full sm:w-1/2 grid grid-cols-2 gap-2 sm:gap-5">
                    {image.map(({ src, alt, id }) => (
                      <div key={id}>
                        <Image
                          src={src}
                          alt={alt}
                          width="416"
                          height="834"
                          style={{ width: '100%', height: '100%' }}
                          priority
                        />
                      </div>
                    ))}
                  </div>

                  <Link href="/showroom#formfeed">
                    <div className="mt-2 block w-full sm:hidden py-2 bg-white text-black text-2xl text-center hover:bg-[#1e1a1b] hover:text-white border-white border">
                      заказать услугу
                    </div>
                  </Link>
                </div>
              ),
            )}
          </div>

          <h3 className="mt-14 sm:mt-20 show_room_title leading-none">
            заказать услуги стилиста
          </h3>
          <h5 className="text-xl sm:text-[2.3vw]">
            оставьте контактны данные и выберете специалиста,
            мы&nbsp;вам&nbsp;перезвоним
          </h5>

          <div id="formfeed">
            <FormShowRoom />
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default ShowRoom;
