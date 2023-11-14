import Layout from '@/components/Layout';
import React from 'react';
import { useState } from 'react';
import news1 from '@/public/news/1.jpg';
// import news2 from '@/public/news/2.jpg';
// import news3 from '@/public/news/3.jpg';
// import news4 from '@/public/news/4.jpg';
import Image from 'next/image';
import Popup from '@/components/Popup';
// import Link from 'next/link';
// import { BsFilePdf } from 'react-icons/bs';
// import documentDownload from '@/public/news/Polojenie-o-stimulirushei-akcii.docx';
import { news } from '@/public/data/data';

function News() {
  const [isOpen, setOpen] = useState(false);
  const [isModal, setIsModal] = useState({
    id: 1,
    imgm: news1,
    text: [{ t1: '111', id: 1 }],
  });

  function test(imgm, title, text) {
    setIsModal({ imgm, title, text });
    setOpen(true);
  }

  return (
    <Layout title="НОВОСТИ">
      <section className="mt-10 relative">
        <div className="lg:container mx-auto">
          {/* <h1 className="title_main mt-10 mb-5 sm:mb-0">НОВОСТИ</h1>
          <div className="flex flex-col sm:flex-row gap-8">
            <Image
              src={news4}
              alt="Новость"
              width={420}
              height={420}
              sizes="100%"
              className="h-[420px]"
              priority
            />
            <div className="font-classic text-base md:text-xl flex flex-col gap-4 p-4 sm:p-0">
              <p>Уважаемые Гости!</p>
              <p>
                Сегодня — День Рождения ТРК «СИТИ ЦЕНТР» 🎉<br></br>
                Каждый год привносит в ТРК новые уникальные события, красочные
                улучшения и запоминающиеся мероприятия, но одно остается
                неизменным — наше доверие к вам и желание становиться лучше с
                каждым пройденным месяцем🤍 Мы бесконечно благодарны вам за
                эмоции и отдачу, которую мы видим каждый день, и надеемся, что в
                следующем, юбилейном году ТРК мы достигнем еще более новых высот
                вместе с вами — нашими Гостями 🎉
              </p>
              <p>
                В честь 19 Дня Рождения мы приглашаем вас на его празднование,
                которое состоится 11 ноября в Центральном Атриуме ТРК
              </p>
              <p>
                На протяжении шести часов будет проходить анимационная программа
                для детей, включающая в себя аниматоров, аквагрим, мастер-классы
                и неугасающее веселье! 🎈🎊
              </p>
              <p>
                Вечерняя программа для взрослых: ведущий Самир Азарян, живая
                музыка, фуршет и Welcome-Drink, а также масштабный розыгрыш
                призов.
              </p>
              <div>
                <p>Среди гостей будут разыгрываться:</p>
                <p>🎁iPhone 15 PRO 512 GB Black Titanium</p>
                <p>
                  🎁Сертификат на аренду конференц-зала в бизнес-центре
                  «Централь»
                </p>
                <p>
                  🎁Индивидуальная экскурсия по виноградникам «Chateau de Talu»
                </p>
                <p>
                  🎁Свидание для двоих в кинотеатре «Монитор СИТИ de Luxe» с
                  ужином от ресторана «Don Bazilio»
                </p>
                <p>🎁100.000 рублей на шоппинг в нашем ТРК и многое другое!</p>
              </div>
              <p>
                Мы с радостью ждем вас 11.11 на праздновании Дня Рождения ТРК
                «СИТИ ЦЕНТР»!
              </p>
              <div>
                <p>
                  Организатор:
                  ООО&nbsp;ГК&nbsp;«СИТИ&nbsp;ЦЕНТР»&nbsp;ИНН&nbsp;2309076513
                </p>
                <p>
                  Период проведения акции:
                  с&nbsp;04.11.2023&nbsp;г.&nbsp;по&nbsp;11.11.2023 г.
                </p>
              </div>
              <div className="inline-block">
                <a
                  href="/news/Polojenie-o-stimulirushei-akcii.docx"
                  alt="alt text"
                  target="_blank"
                  rel="noopener noreferrer"
                  locale="false"
                  className="text-base md:text-xl border-2 p-2 border-zinc-300 flex max-w-[420px] grow my-10 items-center mx-4 sm:mx-0"
                >
                  <BsFilePdf className="mr-4 text-3xl" />
                  Положение о стимулирующей акции
                </a>
              </div>
            </div>
          </div> */}

          <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-8 sm:px-0">
            <h3 className="text-xl md:text-2xl mt-10 mb-5 sm:mb-0">
              На данный момент новости отсутствуют. Следите за обновлениями...
            </h3>
            {news
              .map(({ id, img, imgm, title, text }) => (
                <li
                  onClick={() => test(imgm, title, text)}
                  key={id}
                  className="h-full w-full relative overflow-hidden cursor-pointer"
                >
                  <Image
                    src={img}
                    alt="Новость"
                    width={420}
                    sizes="100%"
                    className="object-cover ease-in duration-200 hover:scale-105"
                    priority
                  />
                </li>
              ))
              .reverse()}
          </ul>
        </div>
      </section>
      <Popup isOpen={isOpen} setOpen={setOpen}>
        <div className="flex flex-col justify-center font-classic max-w-4xl p-4 sm:p-10 bg-[#1e191a] ">
          <Image
            src={isModal.imgm}
            alt="Новость"
            width={600}
            height={0}
            className="w-7/12 sm:w-1/2 m-auto"
          />
          <h5 className="text-base sm:text-xl text-center mt-2">
            {isModal.title}
          </h5>
          {isModal.text.map(({ id, t1 }) => (
            <p key={id} className="text-sm sm:text-base text-left mt-3">
              {t1}
            </p>
          ))}
        </div>
      </Popup>
    </Layout>
  );
}

export default News;
