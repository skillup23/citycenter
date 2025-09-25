import FormShowRoom from '@/components/FormShowRoom';
import Layout from '@/components/Layout';
import { stilistShowRoom } from '@/public/data/data';
import Image from 'next/image';
import Link from 'next/link';

function ShowRoom() {
  return (
    <Layout title="Шоурум для VIP‑клиентов">
      <div className="h-[89vh] bg-[url('/showroom_img/showroomMain.png')]"></div>

      <section className="mt-10">
        <div className="lg:container mx-auto px-4 lg:px-0">
          <h1 className="mt-20 mb-20 show_room_title text-center">
            VIP SHowroom - это новый уровень шопинга
          </h1>

          <p className="mb-20 text-2xl md:text-3xl lg:text-4xl xl:text-5xl indent-16">
            Представляем вам уникальную услугу, которая позволит раскрыть всю
            палитру вашей индивидуальности. выберете персонального стилиста,
            который профессионально создаст ваш идеальный образ из лучших
            коллекций элитных бутиков ТРК «СИТИ ЦЕНТР».
          </p>

          <Link href="/showroom#formfeed">
            <div className="w-fill mt-10 py-6 bg-white text-black text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center">
              выбрать стилиста и заказать услугу можно на нашем сайте
            </div>
          </Link>

          <h3 className="mt-24 mb-20 show_room_title leading-none">
            наши стилисты
          </h3>

          <div>
            {stilistShowRoom.map(
              ({ id, foto, title, subtitle, image, text }) => (
                <div key={id}>
                  <div className="flex justify-between gap-36">
                    <div>
                      <h4 className="mt-24 show_room_title">{title}</h4>
                      <p className="mb-20 show_room_text">{subtitle}</p>
                      {text.map((item, index) => (
                        <p key={index} className="show_room_text">
                          {item}
                        </p>
                      ))}

                      <Link href="/showroom#formfeed">
                        <div className="mt-20 py-4 bg-white text-black text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center hover:bg-[#1e1a1b] hover:text-white border-white border">
                          заказать услугу
                        </div>
                      </Link>
                    </div>
                    <div className="w-2/5">
                      <Image
                        src={foto}
                        alt={id}
                        width="700"
                        height="700"
                        style={{ width: '100%', height: '100%' }}
                        priority
                      />
                    </div>
                  </div>

                  <div className="mt-20 flex gap-4">
                    {image.map(({ src, alt, id }) => (
                      <Image
                        key={id}
                        src={src}
                        alt={alt}
                        width="500"
                        height="500"
                        style={{ width: '100%', height: '100%' }}
                        priority
                      />
                    ))}
                  </div>
                </div>
              )
            )}
          </div>

          <h3 className="mt-20 show_room_title leading-none">
            заказать услуги стилиста
          </h3>
          <h5 className="text-[2.3vw]">
            оставьте контактны данные и выберете специалиста, мы вам перезвоним
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
