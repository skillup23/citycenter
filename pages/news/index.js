import Layout from '@/components/Layout';
import React from 'react';
// import { useState } from 'react';
// import news1 from '@/public/news/1.jpg';
// import news2 from '@/public/news/2.jpg';
// import news3 from '@/public/news/3.jpg';
// import news4 from '@/public/news/4-2.jpg';
// import Image from 'next/image';
// import Popup from '@/components/Popup';
// import Link from 'next/link';
// import { BsFilePdf } from 'react-icons/bs';
// import documentDownload from '@/public/news/Polojenie-o-stimulirushei-akcii.docx';
// import { news } from '@/public/data/data';

function News() {
  // const [isOpen, setOpen] = useState(false);
  // const [isModal, setIsModal] = useState({
  //   id: 1,
  //   imgm: news1,
  //   text: [{ t1: '111', id: 1 }],
  // });

  // function test(imgm, title, text) {
  //   setIsModal({ imgm, title, text });
  //   setOpen(true);
  // }

  return (
    <Layout
      title="НОВОСТИ"
      description="Новогодние праздники в ТРК «СИТИ ЦЕНТР». Новогодний базар «Русские сказки»"
    >
      <section className="mt-10 relative">
        <div className="lg:container mx-auto">
          <h1 className="title_main mt-10 mb-5 sm:mb-0">НОВОСТИ</h1>
          {/* <div className="flex flex-col sm:flex-row gap-8 items-center">
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
              <p>
                Близятся новогодние праздники: заснеженный город, подарки,
                семейные вечера с родными и близкими, а также постоянно
                окружающие нас символы приближающегося Нового Года.
              </p>
              <p>
                Cпециально для Вас, уже с 1 декабря ТРК «СИТИ ЦЕНТР» открывает
                Новогодний базар «Русские сказки», посвященный любимым героям
                сказок из нашего детства!
              </p>
              <p>
                Это не просто классическая ярмарка, это — удивительные образы
                героев, знакомых нам с малых лет, эмоции и воспоминания,
                связанные с ними, а также возможность приобрести предметы
                интерьера для Вашего дома. Среди них будут представлены: фарфор
                от мастерской майолики Павловой и Шепелева, утонченная
                сервировка стола натуральными льняными изделиями, елочные
                игрушки ручной работы, посуда из хрусталя и другие уникальные
                подарки для Ваших близких. С ними новогодний стол станет
                изысканным, а праздник — великолепным!
              </p>
              <p>
                Блистательные выступления аниматоров, большой выбор новогодних
                подарков, тематические фотозоны для Вас и ваших детей, яркие
                впечатления и новогоднее настроение — все это ждет вас в ТРК
                «СИТИ ЦЕНТР» уже с 1 декабря!
              </p>
              <p>Реклама. ИП Божко С.Ю. ИНН 236400601971. Erie: LjN8K5jNZ</p>
            </div>
          </div> */}

          <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-8 sm:px-0">
            <h3 className="text-xl md:text-2xl mt-10 mb-5 sm:mb-0">
              На данный момент новости отсутствуют. Следите за обновлениями...
            </h3>
            {/* {news
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
              .reverse()} */}
          </ul>
        </div>
      </section>
      {/* <Popup isOpen={isOpen} setOpen={setOpen}>
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
      </Popup> */}
    </Layout>
  );
}

export default News;
