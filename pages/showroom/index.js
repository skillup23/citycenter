import FormShowRoom from '@/components/FormShowRoom';
import Layout from '@/components/Layout';
import { stilistShowRoom } from '@/public/data/data';
import Image from 'next/image';
import Link from 'next/link';

function ShowRoom() {
  return (
    <Layout title="Шоурум для VIP‑клиентов">
      <div className="h-[89vh] bg-[url('/showroom_img/showroomMain.png')] bg-cover"></div>

      <section className="mt-10">
        <div className="lg:container mx-auto px-4 lg:px-0">
          <h1 className="mt-20 mb-20 show_room_title">
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
                <div key={id} className="mb-40 flex justify-between gap-5">
                  <div className="w-1/2 flex flex-col justify-between">
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
                    <h4 className="show_room_title">{title}</h4>
                    <p className="show_room_text">{subtitle}</p>
                    <div>
                      {text.map((item, index) => (
                        <p key={index} className="show_room_text">
                          {item}
                        </p>
                      ))}
                    </div>

                    <Link href="/showroom#formfeed">
                      <div className="py-4 bg-white text-black text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center hover:bg-[#1e1a1b] hover:text-white border-white border">
                        заказать услугу
                      </div>
                    </Link>
                  </div>

                  <div className="w-1/2 grid grid-cols-2 gap-5">
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
