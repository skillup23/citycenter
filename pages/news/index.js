import Layout from '@/components/Layout';
import React from 'react';
// import { useState } from 'react';
import { arrayNews } from '@/public/data/news';
import OneNews from '@/components/OneNews';
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
          <h1 className="title_main mt-10 sm:mb-0">НОВОСТИ</h1>

          {arrayNews
            .map(({ id, img1, img2, img3, img4, text }) => (
              <OneNews
                key={id}
                img1={img1}
                img2={img2}
                img3={img3}
                img4={img4}
                text={text}
              />
            ))
            .reverse()}
        </div>
      </section>
    </Layout>
  );
}

export default News;

//       {/* <Popup isOpen={isOpen} setOpen={setOpen}>
//         <div className="flex flex-col justify-center font-classic max-w-4xl p-4 sm:p-10 bg-[#1e191a] ">
//           <Image
//             src={isModal.imgm}
//             alt="Новость"
//             width={600}
//             height={0}
//             className="w-7/12 sm:w-1/2 m-auto"
//           />
//           <h5 className="text-base sm:text-xl text-center mt-2">
//             {isModal.title}
//           </h5>
//           {isModal.text.map(({ id, t1 }) => (
//             <p key={id} className="text-sm sm:text-base text-left mt-3">
//               {t1}
//             </p>
//           ))}
//         </div>
//       </Popup> */}
//           {/* <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-8 sm:px-0">
//             <h3 className="text-xl md:text-2xl mt-10 mb-5 sm:mb-0">
//               На данный момент новости отсутствуют. Следите за обновлениями...
//             </h3>
//             {news
//               .map(({ id, img, imgm, title, text }) => (
//                 <li
//                   onClick={() => test(imgm, title, text)}
//                   key={id}
//                   className="h-full w-full relative overflow-hidden cursor-pointer"
//                 >
//                   <Image
//                     src={img}
//                     alt="Новость"
//                     width={420}
//                     sizes="100%"
//                     className="object-cover ease-in duration-200 hover:scale-105"
//                     priority
//                   />
//                 </li>
//               ))
//               .reverse()}
//           </ul>
// {/* <div className="flex flex-col sm:flex-row gap-8 items-stretch mt-10 flex-nowrap">
//             <Image
//               src={news14}
//               alt="Новость"
//               width={420}
//               sizes="100%"
//               priority
//               className="w-full sm:w-1/3"
//             />
//             <div className="w-full sm:w-2/3 font-classic text-base md:text-xl flex flex-col justify-between gap-12 p-4 sm:p-0">
//               <div className="flex flex-col gap-4 text-center sm:text-left max-w-[450px]">
//                 <p>
//                   Выставка работ Елены Славных - художника в жанре трэш-арта 🤍
//                 </p>
//                 <p>
//                   В работах Елены сказка встречается с реальностью, образы
//                   оживают через неожиданные материалы и отходы, которые
//                   невозможно переработать.
//                 </p>
//                 <p>Погрузитесь в атмосферу искусства вместе с нами!</p>
//               </div>
//             </div>
//           </div>

//           <div className="w-full flex flex-col items-start sm:flex-row gap-8 mt-10 pt-10 flex-nowrap border-t-2">
//             <Image
//               src={news13}
//               alt="Новость"
//               width={420}
//               sizes="100%"
//               priority
//               className="w-full sm:w-1/3"
//             />
//             <div className="w-full sm:w-2/3 font-classic text-base md:text-xl flex flex-col justify-between gap-12 p-4 sm:p-0">
//               <div className="flex flex-col gap-4 text-center sm:text-left max-w-[450px]">
//                 <p>Театральные сезоны в ТРК «СИТИ ЦЕНТР» 🎭</p>
//                 <p>
//                   Мы рады сообщить, что 9 ноября в 13:00 состоится уникальное
//                   событие, которое объединит магию музыки и балета.
//                 </p>
//                 <p>
//                   Приготовьтесь погрузиться в мир искусства, где мелодии оживут
//                   через каждое движение танцоров!
//                 </p>
//                 <p>
//                   Приходите сами и приглашайте друзей — вместе мы создадим
//                   неповторимый день 🤍
//                 </p>
//               </div>
//             </div>
//           </div> */}

//           {/* <div className="w-full flex flex-col items-start sm:flex-row gap-8 mt-10 pt-10 flex-nowrap border-t-2">
//             <Image
//               src={news12}
//               alt="Новость"
//               width={420}
//               sizes="100%"
//               priority
//               className="w-full sm:w-1/3"
//             />
//             <div className="w-full sm:w-2/3 font-classic text-base md:text-xl flex flex-col justify-between gap-12 p-4 sm:p-0">
//               <div className="flex flex-col gap-4 text-center sm:text-left">
//                 <p>
//                   Vilebrequin расширяет присутствие в России: новый магазин в
//                   Краснодаре СИТИ
//                 </p>
//                 <p>
//                   15 октября 2024 года французский бренд пляжной моды
//                   Vilebrequin открыл новый магазин в ТРК Сити Центр Краснодар (2
//                   этаж). Это событие стало важным шагом в расширении розничной
//                   сети бренда и укреплении его позиций на российском рынке.
//                 </p>
//                 <p>
//                   Посетители магазина смогут ознакомиться с полным ассортиментом
//                   Vilebrequin, включая эксклюзивную капсульную коллекцию
//                   Rayures. Эта коллекция, воплощающая элегантность морского
//                   стиля, включает в себя:
//                 </p>
//                 <p>
//                   Мужскую линию: Популярные шорты MOOREA в белую полоску —
//                   идеальное сочетание комфорта и стиля для пляжного отдыха
//                 </p>
//                 <p>
//                   Женскую линию: Стильный черно-белый слитный купальник Rayures
//                   с асимметричным декольте. Раздельный купальник в стиле 1950-х
//                   с кроп-топом и бикини
//                 </p>
//                 <p>
//                   Особого внимания заслуживает материал, используемый в
//                   коллекции — мягкий полиамид с добавлением эластана. Он быстро
//                   сохнет и сохраняет форму даже после длительного пребывания в
//                   воде, что делает его идеальным для активного пляжного отдыха.
//                 </p>
//                 <p>
//                   Открытие магазина Vilebrequin в ТРК Сити Центр Краснодар дает
//                   жителям и гостям города уникальную возможность приобщиться к
//                   элегантному французскому пляжному стилю, воплощенному в
//                   коллекции 2024 года.
//                 </p>
//               </div>
//             </div>
//           </div> */}

//           {/* <div className="w-full flex flex-col items-start sm:flex-row gap-8 mt-10 pt-10 flex-nowrap border-t-2">
//             <Image
//               src={news11}
//               alt="Новость"
//               width={420}
//               sizes="100%"
//               priority
//               className="w-full sm:w-1/3"
//             />
//           </div>

//           <div className="w-full flex flex-col items-start sm:flex-row gap-8 mt-10 pt-10 flex-nowrap border-t-2">
//             <Image
//               src={news10}
//               alt="Новость"
//               width={420}
//               sizes="100%"
//               priority
//               className="w-full sm:w-1/3"
//             />
//             <div className="font-classic text-base md:text-xl flex flex-col justify-between gap-12 p-4 sm:p-0">
//               <div className="flex flex-col gap-4 text-center sm:text-left">
//                 <p>
//                   Бренд Kiara Onda был основан в 2017 году и представляет собой
//                   премиальную линию одежды для женщин. Основная идея бренда
//                   заключается в создании уникальных и стильных образов, которые
//                   подчеркивают индивидуальность каждой женщины.
//                 </p>
//                 <p>
//                   Одежда от Kiara Onda отличается высоким качеством материалов и
//                   кропотливой работой над каждым элементом дизайна. В коллекциях
//                   бренда можно найти как повседневную одежду, так и вечерние
//                   платья, а также аксессуары, которые дополнят любой образ.
//                 </p>
//                 <p>
//                   Коллекции Kiara Onda представлены в интернет-магазине и
//                   розничных магазинах, расположенных в крупных городах России.
//                   Также бренд активно участвует в различных модных мероприятиях
//                   и показах, что позволяет ему оставаться в центре внимания
//                   fashion-индустрии.
//                 </p>
//                 <p>
//                   Особое внимание уделяется комфорту и удобству при ношении
//                   одежды, поэтому каждая модель проходит тщательное тестирование
//                   перед тем, как попасть в продажу. Кроме того, компания
//                   предлагает услуги индивидуального пошива, что делает каждую
//                   вещь еще более эксклюзивной и уникальной.
//                 </p>
//                 <p>
//                   Kiara Onda – это не просто бренд одежды, это философия стиля и
//                   элегантности, которая помогает женщинам выглядеть безупречно в
//                   любой ситуации
//                 </p>
//               </div>
//             </div>
//           </div> */}

//           {/* <div className="flex flex-col sm:flex-row gap-8 items-stretch mt-10 pt-10 flex-wrap border-t-2">
//             <Image
//               src={news9}
//               alt="Новость"
//               width={420}
//               sizes="100%"
//               priority
//               className="w-full sm:w-1/3"
//             />
//             <div className="font-classic text-base md:text-xl flex flex-col justify-between gap-12 p-4 sm:p-0">
//               <div className="flex flex-col gap-4 text-center sm:text-left max-w-[420px]">
//                 <p>Fashion-day в ТРК «СИТИ ЦЕНТР»</p>
//                 <p>
//                   Уже в эту субботу модный показ с эксклюзивными коллекциями!
//                   Вас ждет незабываемое погружение в мир высокой моды и стиля,
//                   живая музыка и фуршет с изысканными закусками.
//                 </p>
//                 <p>Ждем вас 17 августа в 17:00 🤍</p>
//                 <p>Dress code: black&white</p>
//                 <p>📍ТРК «Сити-центр» Индустриальная 2</p>
//               </div>
//             </div>
//           </div> */}

//           {/* <div className="flex flex-col sm:flex-row gap-8 items-stretch mt-10 pt-10 flex-wrap border-t-2">
//             <Image
//               src={news1}
//               alt="Новость"
//               width={420}
//               height={420}
//               sizes="100%"
//               className="w-full sm:w-1/3"
//               priority
//             />
//             <Image
//               src={news1_1}
//               alt="Новость"
//               width={420}
//               height={420}
//               sizes="100%"
//               className="w-full sm:w-1/3"
//               priority
//             />
//             <div className="font-classic text-base md:text-xl flex flex-col justify-between gap-12 p-4 sm:p-0">
//               <div className="flex flex-col gap-4 text-center sm:text-left">
//                 <p>Летняя распродажа в салонах Х.О.: скидки до 40%!</p>
//                 <p>
//                   Ищете идеальный подарок для мужчины? Или, может быть, хотите
//                   обновить свой гардероб стильной одеждой и аксессуарами? Тогда
//                   вам точно стоит заглянуть в салоны Х.О., где проходит
//                   грандиозная распродажа!
//                 </p>
//                 <p>
//                   Вас ждут мужские коллекции от ведущих мировых брендов: Aubade,
//                   KARL LAGERFELD, Zegna, Bikkembergs, DIESEL, Moschino, Derek
//                   Rose, Hanro, Calida, Emporio Armani, Bluemint, Hugo, Iceberg,
//                   Dolce&Gabbana, Olaf Benz, Zimmerli и многих других. Не
//                   упустите возможность приобрести качественные вещи по приятным
//                   летним ценам!
//                 </p>
//                 <p>
//                   Скидки до 40% действуют на всё: мужское бельё, домашнюю и
//                   верхнюю одежду, спортивные костюмы, брюки, рубашки, футболки,
//                   пляжную коллекцию и аксессуары.
//                 </p>
//                 <p>
//                   Также в этот период в салонах Х.О. за каждые купленные 3
//                   единицы товара вы получите 1000 бонусов в подарок!
//                   Воспользоваться этими бонусами можно будет в сентябре (50% от
//                   стоимости новой коллекции).
//                 </p>
//                 <p>Ждём вас в салонах Х.О.!</p>
//               </div>
//             </div>
//           </div> */}

//           {/* <div className="w-full flex flex-col items-start sm:flex-row gap-8 mt-10 pt-10 flex-wrap border-t-2">
//             <Image
//               src={news3}
//               alt="Новость"
//               width={420}
//               height={420}
//               sizes="100%"
//               className="w-full sm:w-1/3"
//               priority
//             />
//             <Image
//               src={news4}
//               alt="Новость"
//               width={420}
//               height={420}
//               sizes="100%"
//               className="w-full sm:w-1/3"
//               priority
//             />
//             <Image
//               src={news5}
//               alt="Новость"
//               width={420}
//               height={420}
//               sizes="100%"
//               className="w-full sm:w-1/3"
//               priority
//             />
//             <div className="font-classic text-base md:text-xl flex flex-col justify-between gap-12 p-4 sm:p-0">
//               <div className="flex flex-col gap-4 text-center sm:text-left">
//                 <p>
//                   В салоне Эстель Адони появились пляжные новинки от Lise
//                   Charmel, Gottex, Maryan Mehlhorn и других модных брендов,
//                   самое время выбрать новый купальник и запланировать поездку на
//                   море или визит в SPA!!
//                 </p>
//                 <p>
//                   В этом сезоне в трендах изысканная сексуальность и акцентные
//                   украшения: кольца, пряжки, пояса, декоративные цепочки,
//                   шнуровки, а также глубокие вырезы. Среди принтов актуальны
//                   графичные, цветочные, анималистические и этнические рисунки.
//                 </p>
//                 <p>
//                   У нас вы можете собрать полноценный пляжный гардероб, включая
//                   туники, парео, пляжные платья и шорты, а также аксессуары,
//                   среди которых стильные шляпы, сумки и пляжная обувь. Ждем на
//                   вдохновляющий летний шопинг!
//                 </p>
//               </div>
//             </div>
//           </div> */}

//           {/* <div className="flex flex-col sm:flex-row gap-8 items-stretch mt-10 pt-10 border-t-2">
//             <Image
//               src={news8}
//               alt="Новость"
//               width={420}
//               sizes="100%"
//               priority
//               className="w-full sm:w-1/3"
//             />
//             <div className="font-classic text-base md:text-xl flex flex-col justify-between gap-12 p-4 sm:p-0">
//               <div className="flex flex-col gap-4 text-center sm:text-left max-w-[420px]">
//                 <p>27 июля в ТРК «СИТИ ЦЕНТР» состоится модный показ.</p>
//                 <p>
//                   Вас ждет незабываемое погружение в мир высокой моды.
//                   Стилист-имиджмейкер расскажет все о трендах 2024, проведёт
//                   стильный мастер-класс. Также вы сможете собрать красивый букет
//                   и получить уникальные призы от наших партнеров.
//                 </p>
//                 <p>
//                   Не упустите возможность стать частью этого события и окунуться
//                   в атмосферу роскоши, элегантности и стиля.
//                 </p>
//               </div>
//             </div>
//           </div> */}

//           {/* <div className="flex flex-col sm:flex-row gap-8 items-stretch mt-10 pt-10 flex-wrap border-t-2">
//             <Image
//               src={news7}
//               alt="Новость"
//               width={420}
//               sizes="100%"
//               priority
//               className="w-full sm:w-1/3"
//             />
//             <div className="font-classic text-base md:text-xl flex flex-col justify-between gap-12 p-4 sm:p-0">
//               <div className="flex flex-col gap-4 text-center sm:text-left max-w-[420px]">
//                 <p>
//                   Модные, локальные, премиальные бренды в одном пространстве в
//                   ТРК «СИТИ ЦЕНТР»!
//                 </p>
//                 <p>
//                   20 июля открытие POP UP STORE - пространства с уникальными
//                   локальными дизайнерами. Следите за подробностями{' '}
//                   <Link
//                     href="https://vk.com/trkcitycentr"
//                     target="_blank"
//                     className="underline"
//                   >
//                     в&nbsp;наших&nbsp;социальных&nbsp;сетях.
//                   </Link>
//                 </p>
//               </div>
//             </div>
//           </div> */}

//           {/* <div className="flex flex-col sm:flex-row gap-8 items-stretch mt-10 pt-10 border-t-2">
//             <Image
//               src={news6}
//               alt="Новость"
//               width={420}
//               sizes="100%"
//               priority
//               className="w-full sm:w-1/3"
//             />
//             <div className="font-classic text-base md:text-xl flex flex-col justify-between gap-12 p-4 sm:p-0">
//               <div className="flex flex-col gap-4 text-center sm:text-left max-w-[420px]">
//                 <p>Новая коллекция Bikkembergs SS24 в салонах Х.О.</p>
//                 <p>
//                   Дирк Биккембергс — бельгийский дизайнер, который сумел
//                   объединить высокую моду и спорт, создав уникальное направление
//                   — спортивный шик. Его работы стали символом брутального
//                   сексуального тела и постоянного движения вперёд. Коллекции
//                   последних лет только подтверждают это.
//                 </p>
//               </div>
//             </div>
//           </div> */}
