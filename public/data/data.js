// __________________Меню____________________
let id = 0;

const menu = [
  {
    id: id++,
    name: 'Бутики',
    link: '/#bitiki',
  },
  {
    id: id++,
    name: 'Рестораны',
    link: '/butiks/kafe',
  },
  {
    id: id++,
    name: 'Новости',
    link: '/news',
  },
  {
    id: id++,
    name: 'Сервисы',
    link: '/services',
  },
  {
    id: id++,
    name: 'Кинотеатр',
    link: '/events',
  },
  {
    id: id++,
    name: 'Детям',
    link: '/butiks/children',
  },
  {
    id: id++,
    name: 'Сервисы',
    link: '/services',
  },
  {
    id: id++,
    name: 'Контакты',
    link: '/contacts',
  },
  {
    id: id++,
    name: 'Парковка',
    link: '/parking',
  },
  {
    id: id++,
    name: 'Арендаторам',
    link: '/rent',
  },
  {
    id: id++,
    name: 'Рекламодателям',
    link: '/marketing',
  },
  {
    id: id++,
    name: 'Юридическая информация',
    link: '/documents',
  },
];

// __________________Верхний слайдер___________________
const sliderTop = [
  {
    id: 1,
    src: '/slide_main/m_8.jpg',
    alt: 'Изображение 1',
  },
  // {
  //   id: 4,
  //   src: '/slide_main/m_1.jpg',
  //   alt: 'Изображение 1',
  // },
  // {
  //   id: 2,
  //   src: '/slide_main/m_2.jpg',
  //   alt: 'Изображение 2',
  // },
];

// __________________Слайдер Кино____________________
const sliderCenter = [
  {
    id: 1,
    src: '/slide_main/kino-banner-6.jpg',
    alt: 'Кинобаннер 1',
  },
  {
    id: 2,
    src: '/slide_main/kino-banner-7.jpg',
    alt: 'Кинобаннер 2',
  },
  {
    id: 3,
    src: '/slide_main/kino-banner-8.jpg',
    alt: 'Кинобаннер 3',
  },
  {
    id: 4,
    src: '/slide_main/kino-banner-9.jpg',
    alt: 'Кинобаннер 4',
  },
  {
    id: 5,
    src: '/slide_main/kino-banner-10.jpg',
    alt: 'Кинобаннер 5',
  },

  // {
  //   id: 1,
  //   src: '/slide_main/kino-banner-1.jpg',
  //   alt: 'Кинобаннер 1',
  // },
  // {
  //   id: 2,
  //   src: '/slide_main/kino-banner-2.jpg',
  //   alt: 'Кинобаннер 2',
  // },
  // {
  //   id: 3,
  //   src: '/slide_main/kino-banner-3.jpg',
  //   alt: 'Кинобаннер 3',
  // },
  // {
  //   id: 4,
  //   src: '/slide_main/kino-banner-4.jpg',
  //   alt: 'Кинобаннер 4',
  // },
  // {
  //   id: 5,
  //   src: '/slide_main/kino-banner-5.jpg',
  //   alt: 'Кинобаннер 5',
  // },
];

// _______Список Бутиков на Главной_____________

const shopList = [
  {
    id: 1,
    title: 'Женская одежда',
    link: '/butiks/women_clothing',
    url: 'bg-[url("../public/site_img/shop-1.png")]',
  },
  {
    id: 2,
    title: 'Мужская одежда',
    link: '/butiks/men_clothing',
    url: 'bg-[url("../public/site_img/shop-2.png")]',
  },
  {
    id: 3,
    title: 'Для детей',
    link: '/butiks/children',
    url: 'bg-[url("../public/site_img/shop-3.png")]',
  },
  {
    id: 4,
    title: 'Купальники и нижнее белье',
    link: '/butiks/underwear',
    url: 'bg-[url("../public/site_img/shop-4.png")]',
  },
  {
    id: 5,
    title: 'Ювелирные изделия и часы',
    link: '/butiks/clocks',
    url: 'bg-[url("../public/site_img/shop-5.png")]',
  },
  {
    id: 6,
    title: 'Обувь и сумки',
    link: '/butiks/shoes_and_bags',
    url: 'bg-[url("../public/site_img/shop-6.png")]',
  },
  {
    id: 7,
    title: 'КОСМЕТИКА И ПАРФЮМЕРИЯ',
    link: '/butiks/cosmetics',
    url: 'bg-[url("../public/site_img/shop-7.png")]',
  },
  {
    id: 8,
    title: 'Интерьер',
    link: '/butiks/interior',
    url: 'bg-[url("../public/site_img/shop-8.png")]',
  },
  {
    id: 9,
    title: 'Подарки и книги',
    link: '/butiks/gifts_and_books',
    url: 'bg-[url("../public/site_img/shop-9.png")]',
  },
  {
    id: 10,
    title: 'Очки и аксессуары',
    link: '/butiks/glasses',
    url: 'bg-[url("../public/site_img/shop-10.png")]',
  },
  {
    id: 11,
    title: 'РЕСТОРАНЫ И КАФЕ',
    link: '/butiks/kafe',
    url: 'bg-[url("../public/site_img/shop-12.png")]',
  },
  {
    id: 12,
    title: 'Развлечения',
    link: '/butiks/game',
    url: 'bg-[url("../public/site_img/shop-11.png")]',
  },
];

// __________________Галерея____________________
const galleryVesna = [
  {
    id: 1,
    src: '/gallery/vesna/1.jpg',
  },
  {
    id: 2,
    src: '/gallery/vesna/2.jpg',
  },
  {
    id: 3,
    src: '/gallery/vesna/3.jpg',
  },
  {
    id: 4,
    src: '/gallery/vesna/4.jpg',
  },
  {
    id: 5,
    src: '/gallery/vesna/5.jpg',
  },
];
const galleryBigCinema = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 19, 20, 21, 22, 23, 24,
  25, 26, 27, 29, 30, 31, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45,
  46, 47, 48, 49, 50, 51, 52, 54, 56, 57, 58, 59, 60, 61, 63, 64, 65, 66, 67,
  68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86,
  87, 88, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105,
  106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 134, 135, 136, 137, 138,
  139, 140, 141, 142, 143, 146, 147, 148, 149, 150, 151,
];
const champion = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67,
];

const june = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
  80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98,
  99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114,
  115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129,
  130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144,
  145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159,
  160, 161, 162, 163, 164, 165,
];

const mart = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
  80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98,
  99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114,
  115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129,
  130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144,
  145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159,
  160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174,
  175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189,
  190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204,
  205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219,
  220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234,
  235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249,
];

const flamenko = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
  80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98,
  99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114,
  115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129,
  130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144,
  145, 146, 147, 148, 149, 150,
];

const birthday = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
  80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 92, 96, 97, 98, 99, 100, 101, 102,
  103, 106, 107, 108, 109, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123,
  124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138,
  139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153,
  154, 155, 156, 157, 159, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172,
  173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187,
  188, 189,
];

const dayYoungBrand = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
  80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98,
  99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114,
  115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127,
];

const starsInCity = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73,
];

import event1 from '@/public/event_city/Flamenko/1.jpg';
import event2 from '@/public/event_city/Vesna/1.jpg';
import event3 from '@/public/event_city/ONEDAYkids/1.jpg';
import event4 from '@/public/event_city/Pasxa/1.jpg';
import event5 from '@/public/event_city/1_june/1.jpg';
import event6 from '@/public/event_city/Birthday/1.jpg';
import event7 from '@/public/event_city/KUBAN_DESIGNSTORE_open/1.jpg';
import event8 from '@/public/event_city/ModniyBrend/1.jpg';
import event9 from '@/public/event_city/StarsInCity/1.jpg';
import event10 from '@/public/event_city/Papaya/1.jpg';
import event11 from '@/public/event_city/ConceptStore/1.jpg';
import event12 from '@/public/event_city/OtherCinema/1.jpg';
import event13 from '@/public/event_city/Giorgio/1.jpg';
import event14 from '@/public/event_city/CinemaVine/1.jpg';
import event15 from '@/public/event_city/ParfumeGiorgio/1.jpg';
import event16 from '@/public/event_city/Miller/1.jpg';
import event17 from '@/public/event_city/Audi/2.jpg';
import event18 from '@/public/event_city/Aromat/1.jpg';
import event19 from '@/public/event_city/MissKrasnodar/1.jpg';
import event20 from '@/public/event_city/Zabeg/1.jpg';
import event21 from '@/public/event_city/FashionDay/1.jpg';
import event22 from '@/public/event_city/OtherCinema2/1.jpg';
import event23 from '@/public/event_city/FirstLady/1.jpg';
import event24 from '@/public/event_city/MysikaBalet/1.jpg';
import event25 from '@/public/event_city/Teatr/1.jpg';
import event26 from '@/public/event_city/HappyBith2024/1.jpg';

//              Мероприятия
const eventArray = [
  {
    id: id++,
    link: 'https://geometria.ru/reportage/790551-den-rozhdeniya-trk-siti-tsentr-20-let/',
    img: event26,
    text: 'ДЕНЬ РОЖДЕНИЯ ТРК «СИТИ ЦЕНТР»',
    target: '_blank',
  },
  {
    id: id++,
    link: 'https://geometria.ru/reportage/790257-seriya-immersivnykh-sobytiy-teatralnye-sezony-postanovka-teatra-veritas-v-trk-siti-tsentr/',
    img: event25,
    text: '«Театральные сезоны»',
    target: '_blank',
  },
  {
    id: id++,
    link: 'https://yanaaleksann18.wfolio.pro/disk/09-11-2024-siti-tsentr-ok-3-n77ksf',
    img: event24,
    text: 'Музыка&Балет 9.11.2024',
    target: '_blank',
  },
  {
    id: id++,
    link: 'https://geometria.ru/reportage/789251-drugoe-kino/?sphrase_id=1356447',
    img: event23,
    text: 'Клуб первых леди',
    target: '_blank',
  },
  {
    id: id++,
    link: 'https://geometria.ru/reportage/789251-drugoe-kino/?sphrase_id=1356447',
    img: event22,
    text: 'Другое Кино',
    target: '_blank',
  },
  {
    id: id++,
    link: 'https://vk.com/album-16899955_303885732',
    img: event21,
    text: 'CITY FASHION DAY',
    target: '_blank',
  },
  {
    id: id++,
    link: '/event_city/stars_in_city/',
    img: event9,
    text: 'Звезды в Сити',
    target: '',
  },
  {
    id: id++,
    link: '/event_city/day_young_brand/',
    img: event8,
    text: 'День Модного Бренда',
    target: '',
  },
  {
    id: id++,
    link: 'https://geometria.ru/reportage/786030-kuban-design-store-otkrytie/',
    img: event7,
    text: 'KUBAN DESIGNSTORE OPEN',
    target: '_blank',
  },
  {
    id: id++,
    link: 'https://geometria.ru/reportage/783594-odin-den-s-blogerami-i-detmi-siti-tsentr/',
    img: event3,
    text: 'ONE DAY kids',
    target: '_blank',
  },
  {
    id: id++,
    link: 'https://geometria.ru/reportage/782706-paskhalnye-master-klassy-v-trk-siti-tsentr/',
    img: event4,
    text: 'Пасхальный мастер класс',
    target: '_blank',
  },
  {
    id: id++,
    link: '/event_city/birthday',
    img: event6,
    text: 'День рождения сити центра',
    target: '',
  },
  {
    id: id++,
    link: 'https://geometria.ru/reportage/775785-otkrytie-flagmanskogo-magazina-rossiyskogo-brenda-zhenskoy-odezhdy-papaya-papaya/',
    img: event10,
    text: 'Открытие магазина PAPAYA',
    target: '_blank',
  },
  {
    id: id++,
    link: 'https://geometria.ru/reportage/774521-den-rozhdeniya-concept-store-1god/',
    img: event11,
    text: 'День Рождения Concept Store',
    target: '_blank',
  },
  {
    id: id++,
    link: '/event_city/1_june',
    img: event5,
    text: 'День защиты детей',
    target: '',
  },
  {
    id: id++,
    link: 'https://geometria.ru/reportage/727490-monitor-siti-de-luxe-drugoe-kino/',
    img: event12,
    text: 'МОНИТОР «Другое Кино»',
    target: '_blank',
  },
  {
    id: id++,
    link: '/event_city/vesna_v_citycenter/',
    img: event2,
    text: 'ВЕСНА В ТРК «СИТИ ЦЕНТР»',
    target: '',
  },
  {
    id: id++,
    link: 'https://geometria.ru/reportage/723868-sedmaya-vesna-v-giorgio-siti-tsentr/',
    img: event13,
    text: 'Седьмая весна в GIORGIO',
    target: '_blank',
  },
  {
    id: id++,
    link: '/event_city/flamenko/',
    img: event1,
    text: 'ФОТОВЫСТАВКА «ФЛАМЕНКО»',
    target: '',
  },
  {
    id: id++,
    link: 'https://geometria.ru/reportage/684923-zvyezdnaya-premera-filma-v-vinnom-otrazhenii-v-kinoteatre-monitor-siti-de-luxe/',
    img: event14,
    text: 'Фильм "В винном отражении"',
    target: '_blank',
  },
  {
    id: id++,
    link: 'https://geometria.ru/reportage/683920-parfyumernyi-butik-giorgio-seks-kotiki-i-rock-n-roll/',
    img: event15,
    text: 'Парфюмерный бутик Giorgio',
    target: '_blank',
  },
  {
    id: id++,
    link: 'https://geometria.ru/reportage/26696-pervaya-personalnaya-vystavka-khudozhnitsy-aleksandry-miller/',
    img: event16,
    text: 'Выставка Александры Миллер',
    target: '_blank',
  },
  {
    id: id++,
    link: 'https://geometria.ru/reportage/7082-siti-tsentr-zakrytyi-pokaz-filma-mstiteli-final-ot-audi-tsentra-kuban-i-audi-tsentra-krasnodar/',
    img: event17,
    text: 'Показ фильма от Ауди Центра',
    target: '_blank',
  },
  {
    id: id++,
    link: 'https://geometria.ru/reportage/434733-prezentatsiya-aromata-ot-maestro-laurent-mazzone-korolevskie-grezy-v-parfyumernom-butike-giorgio/',
    img: event18,
    text: 'Презентация аромата Giorgio',
    target: '_blank',
  },
  {
    id: id++,
    link: 'https://geometria.ru/reportage/149162-1-08-trk-siti-tsentr-miss-krasnodar-2008/',
    img: event19,
    text: 'МИСС КРАСНОДАР 2008',
    target: '_blank',
  },
  {
    id: id++,
    link: 'https://geometria.ru/reportage/139510-trk-siti-tsentr-zabeg-na-shpilkakh/',
    img: event20,
    text: 'Забег на шпильках',
    target: '_blank',
  },
];

// __________________Афиша кино____________________
import kino1 from '@/public/kino/kino-1.jpg';
import kino2 from '@/public/kino/kino-2.jpg';
import kino3 from '@/public/kino/kino-3.jpg';
import kino4 from '@/public/kino/kino-4.jpg';
import kino5 from '@/public/kino/kino-5.jpg';
import kino6 from '@/public/kino/kino-6.jpg';

const kinoAfisha = [
  {
    id: id++,
    img: kino1,
  },
  {
    id: id++,
    img: kino2,
  },
  {
    id: id++,
    img: kino3,
  },
  {
    id: id++,
    img: kino4,
  },
  {
    id: id++,
    img: kino5,
  },
  {
    id: id++,
    img: kino6,
  },
];

export {
  menu,
  sliderTop,
  sliderCenter,
  galleryVesna,
  galleryBigCinema,
  champion,
  june,
  mart,
  flamenko,
  birthday,
  shopList,
  dayYoungBrand,
  starsInCity,
  eventArray,
  kinoAfisha,
};
