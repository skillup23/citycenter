let id = 1;

export const butiks = [
  //Женская одежда    womenClothing
  //Мужская одежда    manClothing
  //Для детей         children
  //Купальники        underwear
  //Ювелирка и часы   clocks
  //Обувь и сумки     shoesAndBags
  //Косметика         cosmetics
  //Интерьер          interior
  //Подарки и книги   giftsAndBook
  //Очки и аксесс     glasses
  //Рестораны и кафе  kafeAndRestoran
  //Развлечения       gameCategory

  //Сервисы           services

  {
    id: id++,
    category: 'womenClothing manClothing shoesAndBags',
    url: 'cosmo-store',
    logo: '/butiks/womenClothing/COSMO-STORE/logo.png',
    image: [
      {
        id: 1,
        src: '/butiks/womenClothing/COSMO-STORE/1n.jpg',
        alt: 'cosmo-store',
      },
      {
        id: 2,
        src: '/butiks/womenClothing/COSMO-STORE/2n.jpg',
        alt: 'cosmo-store',
      },
      {
        id: 3,
        src: '/butiks/womenClothing/COSMO-STORE/3n.jpg',
        alt: 'cosmo-store',
      },
    ],
    description1:
      'В бутике COSMO STORE  представлены эксклюзивные бренды, такие как Diesel, Vic Matie, C.P. Company, Fred Perry, MOMA, Edwin, Blauer, Birkenstock, а также успешно развивающиеся молодые российские бренды Atelier18, SHU.',
    description2:
      'Компания COSMO STORE остается верной трем главным принципам: высокое качество продукта, актуальный европейский стиль и уникальный ассортимент.',
    floor: '2 этаж',
    tel: '+7 861 213 47 31',
    telUrl: '88612134731',
    instagram: 'cosmostore.krd',
  },
  {
    id: id++,
    category: 'womenClothing',
    url: 'Twinset-milano',
    logo: '/butiks/womenClothing/Twinset-milano/logo.png',
    image: [
      {
        id: 1,
        src: '/butiks/womenClothing/Twinset-milano/1n.jpg',
        alt: 'Twinset-milano',
      },
      {
        id: 2,
        src: '/butiks/womenClothing/Twinset-milano/2n.jpg',
        alt: 'Twinset-milano',
      },
      {
        id: 3,
        src: '/butiks/womenClothing/Twinset-milano/3n.jpg',
        alt: 'Twinset-milano',
      },
      {
        id: 4,
        src: '/butiks/womenClothing/Twinset-milano/4n.jpg',
        alt: 'Twinset-milano',
      },
      {
        id: 5,
        src: '/butiks/womenClothing/Twinset-milano/5n.jpg',
        alt: 'Twinset-milano',
      },
      {
        id: 6,
        src: '/butiks/womenClothing/Twinset-milano/6n.jpg',
        alt: 'Twinset-milano',
      },
    ],
    description1:
      'TWINSET — итальянский бренд разнообразной женской одежды, сумок и аксессуаров. Нежная цветовая гамма, оригинальные вышивки, аппликации, сделанные вручную, отменный крой и выделка материи делают каждое изделие от TWINSET шедевром.',
    description2:
      'Изделия, производимые брендом TWINSET, ассоциируются с удобством, утонченностью и элегантностью.',
    floor: '2 этаж',
    tel: '+7 861 213 47 82',
    telUrl: '88612134782',
    instagram: 'twin_set_krasnodar',
  },
  {
    id: id++,
    category: 'womenClothing',
    url: 'Marccain',
    logo: '/butiks/womenClothing/Marccain/logo.png',
    image: [
      {
        id: 1,
        src: '/butiks/womenClothing/Marccain/1n.jpg',
        alt: 'Marccain',
      },
      {
        id: 2,
        src: '/butiks/womenClothing/Marccain/2n.jpg',
        alt: 'Marccain',
      },
      {
        id: 3,
        src: '/butiks/womenClothing/Marccain/3n.jpg',
        alt: 'Marccain',
      },
      {
        id: 4,
        src: '/butiks/womenClothing/Marccain/4n.jpg',
        alt: 'Marccain',
      },
      {
        id: 5,
        src: '/butiks/womenClothing/Marccain/5n.jpg',
        alt: 'Marccain',
      },
    ],
    description1:
      'Marc Cain - это всемирно известный бренд премиум−класса в сегменте рынка модной женской одежды с собственным производством в Германии.',
    description2:
      'Высочайшие стандарты в дизайне, качестве, материалах, использование новейших технологий обработки и кроя – главное кредо Marc Cain.',
    floor: '2 этаж',
    tel: '+7 989 810 41 61',
    telUrl: '89898104161',
    instagram: 'krd_marccain',
  },
  {
    id: id++,
    category: 'kafeAndRestoran',
    url: 'Oysters',
    logo: '/butiks/kafe/Oysters/logo.png',
    image: [
      {
        id: 1,
        src: '/butiks/loaderImgSmall.png',
        alt: 'Oysters',
      },
    ],
    description1:
      'Устричный ресторан Oysters! Теперь атмосфера безупречного шопинга дополняется изысканными морскими деликатесами и эстетикой настоящего luxury-формата 🥂',
    description2:
      'Свежие устрицы, утончённая подача, безупречный вкус и особое настроение — всё, чтобы превратить обычный визит в ТРК «СИТИ ЦЕНТР» в настоящее гастрономическое удовольствие.',
    description3:
      'Приглашаем открыть для себя новый уровень гастрономии и позволить себе чуть больше роскоши в Oysters 🤍',
    floor: '1 этаж',
    tel: '',
    telUrl: '',
    instagram: '',
  },
  {
    id: id++,
    category: 'womenClothing manClothing',
    url: 'Paul-shark',
    logo: '/butiks/womenClothing/Paul-shark/logo.png',
    image: [
      {
        id: 1,
        src: '/butiks/womenClothing/Paul-shark/1n.jpg',
        alt: 'Paul-shark',
      },
      {
        id: 2,
        src: '/butiks/womenClothing/Paul-shark/2n.jpg',
        alt: 'Paul-shark',
      },
      {
        id: 3,
        src: '/butiks/womenClothing/Paul-shark/3n.jpg',
        alt: 'Paul-shark',
      },
      {
        id: 4,
        src: '/butiks/womenClothing/Paul-shark/4n.jpg',
        alt: 'Paul-shark',
      },
    ],
    description1:
      'Paul&Shark – известный итальянский бренд, одежды, обуви и аксессуаров в стиле casual. Главные источники вдохновения бренда — морская стихия и яхтенный спорт. Для изготовления одежды используются натуральные материалы: лён, хлопок, кожа, шелк, мериносовая шерсть.',
    description2:
      'Разработка и применение новейших технологий обеспечивает функциональность и высокое качество изделий с логотипом Paul&Shark.',
    floor: '2 этаж',
    tel: '+7 861 213 47 25',
    telUrl: '88612134725',
    instagram: 'paulandshark',
  },
  {
    id: id++,
    category: 'womenClothing manClothing',
    url: 'Bogner',
    logo: '/butiks/womenClothing/Bogner/logo.png',
    image: [
      {
        id: 1,
        src: '/butiks/womenClothing/Bogner/1n.jpg',
        alt: 'Bogner',
      },
      {
        id: 2,
        src: '/butiks/womenClothing/Bogner/2n.jpg',
        alt: 'Bogner',
      },
      {
        id: 3,
        src: '/butiks/womenClothing/Bogner/3n.jpg',
        alt: 'Bogner',
      },
      {
        id: 4,
        src: '/butiks/womenClothing/Bogner/4n.jpg',
        alt: 'Bogner',
      },
    ],
    description1:
      'Спортивная мода премиального класса. Непревзойденное сочетание атлетического шика, функциональности и стиля.',
    description2:
      'Бренд BOGNER - это высочайшее качество, стиль, непохожий на другие, создаваемый теми, кто любит и понимает, что такое активный образ жизни, последние модные тенденции, и придерживается высокого уровня жизни.',
    floor: '2 этаж',
    tel: '+7 8612 13 47 27',
    telUrl: '88612134727',
    instagram: 'bogner_krasnodar',
  },
  // {
  //   id: id++,
  //   category: "womenClothing underwear",
  //   url: "Wolford",
  //   logo: "/butiks/womenClothing/Wolford/logo.png",
  //   image: [
  //     {
  //       id: 1,
  //       src: "/butiks/womenClothing/Wolford/1n.jpg",
  //       alt: "Wolford",
  //     },
  //     {
  //       id: 2,
  //       src: "/butiks/womenClothing/Wolford/2n.jpg",
  //       alt: "Wolford",
  //     },
  //     {
  //       id: 3,
  //       src: "/butiks/womenClothing/Wolford/3n.jpg",
  //       alt: "Wolford",
  //     },
  //     {
  //       id: 4,
  //       src: "/butiks/womenClothing/Wolford/4n.jpg",
  //       alt: "Wolford",
  //     },
  //   ],
  //   description1:
  //     "Компания Wolford – это всемирно известный бренд в сегменте доступной роскоши, один из лидеров индустрии. Wolford использует в производстве только лучшие ткани, которые облегают женское тело, украшая его и подчеркивая силуэт. Wolford – это всегда идеальное качество, легкий уход, комфорт в использовании, особенное ощущение тканей на коже и безупречный крой.",
  //   floor: "1 этаж",
  //   tel: "+7 861 213 47 77",
  //   telUrl: "88612134767",
  //   instagram: "wolford_krasnodar",
  // },
  {
    id: id++,
    category: 'womenClothing manClothing',
    url: 'PP',
    logo: '/butiks/womenClothing/PP/logo.png',
    image: [
      {
        id: 1,
        src: '/butiks/womenClothing/PP/1n.jpg',
        alt: 'PP',
      },
      {
        id: 2,
        src: '/butiks/womenClothing/PP/2n.jpg',
        alt: 'PP',
      },
      {
        id: 3,
        src: '/butiks/womenClothing/PP/3n.jpg',
        alt: 'PP',
      },
      {
        id: 4,
        src: '/butiks/womenClothing/PP/4n.jpg',
        alt: 'PP',
      },
    ],
    description1:
      'PHILIPP PLEIN – немецкий бренд, специализирующийся на производстве одежды, обуви и аксессуаров. Эстетика PHILIPP PLEIN в заклепках, шипах и черепах. Отличительной особенностью бренда является использование в коллекциях принтов в виде черепа.',
    floor: '2 этаж',
    tel: '+7 988 243 70 00',
    telUrl: '89882437000',
    instagram: 'plein_shop_',
  },
  {
    id: id++,
    category: 'womenClothing',
    url: 'Elizabetta-franchi',
    logo: '/butiks/womenClothing/Elizabetta-franchi/logo.png',
    image: [
      {
        id: 1,
        src: '/butiks/womenClothing/Elizabetta-franchi/1n.jpg',
        alt: 'Elizabetta-franchi',
      },
      {
        id: 2,
        src: '/butiks/womenClothing/Elizabetta-franchi/2n.jpg',
        alt: 'Elizabetta-franchi',
      },
      {
        id: 3,
        src: '/butiks/womenClothing/Elizabetta-franchi/3n.jpg',
        alt: 'Elizabetta-franchi',
      },
      {
        id: 4,
        src: '/butiks/womenClothing/Elizabetta-franchi/4n.jpg',
        alt: 'Elizabetta-franchi',
      },
    ],
    description1:
      'Бренд Elisabetta Franchi – создатель идеального прет-а-порте в лучших традициях Made in Italy, обязанный своим большим успехом стилю и особенной производственной стратегии, основанной на качестве и тщательной проработке деталей. Стилистическая эволюция бренда и неизменно тщательная проработка деталей делают эту марку одной из самых востребованных среди звёзд мирового уровня. Одежду бренда носят такие дивы, как Анджелина Джоли, Кейт Хадсон, Джессика Альба, Эмили Блант, Дженнифер Лопес, Леди Гага, Кендалл Дженнер, Дита фон Тиз, Кортни Кардашьян и другие.',
    floor: '2 этаж',
    tel: '+7 861 213 47 14',
    telUrl: '88612134714',
    instagram: 'fashion_brands_krd',
  },
  {
    id: id++,
    category: 'manClothing underwear',
    url: 'XO',
    logo: '/butiks/menClothing/XO/logo.png',
    image: [
      {
        id: 1,
        src: '/butiks/menClothing/XO/1n.jpg',
        alt: 'XO',
      },
      {
        id: 2,
        src: '/butiks/menClothing/XO/2n.jpg',
        alt: 'XO',
      },
      {
        id: 3,
        src: '/butiks/menClothing/XO/3n.jpg',
        alt: 'XO',
      },
      {
        id: 4,
        src: '/butiks/menClothing/XO/4n.jpg',
        alt: 'XO',
      },
      {
        id: 5,
        src: '/butiks/menClothing/XO/5n.jpg',
        alt: 'XO',
      },
    ],
    description1:
      'Сеть магазинов мужского белья X.O. — это философия оригинального стиля и исключительного вкуса.',
    description2:
      'В магазинах сети X.O. представлено более 30 всемирно известных марок мужского белья и домашней одежды: Ermenegildo Zegna, Roberto Cavalli, Bikkembergs, Moschino, Derek Rose, Falke, Hanro, Dsquared2, La Perla, Emporio Armani, Hugo Boss, Dolce&Gabbana, Guess, Bruno Banani, Olaf Benz, Calida, Zimmerli, Jockey.',
    floor: '2 этаж',
    tel: '+7 861 213 47 23',
    telUrl: '88612134723',
    instagram: 'xo_man_ru',
  },
  {
    id: id++,
    category: 'manClothing',
    url: 'Richard',
    logo: '/butiks/menClothing/Richard/logo.png',
    image: [
      {
        id: 1,
        src: '/butiks/menClothing/Richard/1n.jpg',
        alt: 'Richard',
      },
      {
        id: 2,
        src: '/butiks/menClothing/Richard/2n.jpg',
        alt: 'Richard',
      },
      {
        id: 3,
        src: '/butiks/menClothing/Richard/3n.jpg',
        alt: 'Richard',
      },
      {
        id: 4,
        src: '/butiks/menClothing/Richard/4n.jpg',
        alt: 'Richard',
      },
    ],
    description1:
      'Индивидуальный пошив мужской классической одежды. Костюмы, сорочки, пальто, на заказ. Ателье работает только с премиальными тканями лучших фабрик мира: Loro Piana, Ermenegildo Zegna, Scabal, Holland&Sherry и др. Вся одежда шьется в Португалии и Италии на одних из лучших фабрик Европы, с многолетним опытом индивидуального пошива.',
    floor: '2 этаж',
    tel: '+7 861 205 14 36',
    telUrl: '88612051436',
    instagram: 'richardhampton_krd',
  },
  {
    id: id++,
    category: 'underwear',
    url: 'WildOrchid',
    logo: '/butiks/underwear/WildOrchid/logo.png',
    image: [
      {
        id: 1,
        src: '/butiks/underwear/WildOrchid/1n.jpg',
        alt: 'WildOrchid',
      },
      {
        id: 2,
        src: '/butiks/underwear/WildOrchid/2n.jpg',
        alt: 'WildOrchid',
      },
      {
        id: 3,
        src: '/butiks/underwear/WildOrchid/3n.jpg',
        alt: 'WildOrchid',
      },
      {
        id: 4,
        src: '/butiks/underwear/WildOrchid/4n.jpg',
        alt: 'WildOrchid',
      },
    ],
    description1:
      '«Дикая Орхидея» – мультибрендовая сеть магазинов премиального женского белья, купальников и одежды. «Дикая Орхидея», основанная в 1993 году, предлагает женщинам трендовые коллекции, созданные для их красоты и комфорта.',
    description2:
      'Здесь вы найдете белье ведущих модных брендов, таких как RITRATTI MILANO, PLUTO, VIVIS, ANNETTE LINGERIE, MAX MOI PARIS сети магазинов «Дикая Орхидея» – изысканная и непревзойденная по комфорту марка Beatrice, сдержанно сексуальная Wild Orchid. Белье этих брендов разрабатывается в собственном дизайн-конструкторском бюро и производится из самых качественных материалов с использованием передовых технологий. Сегодня в магазинах сети кроме белья и купальников представлены и коллекции одежды. Женственные модели платьев и кардиганов, топов, жакетов и брюк помогают создать цельный гармоничный образ в едином изысканном стиле. Высококвалифицированный персонал обеспечит индивидуальный подход к каждому клиенту, поможет с подбором нужной модели и профессионально проконсультирует по бельевому стайлингу.',
    floor: '1 этаж',
    tel: '+7 861 213 47 15',
    telUrl: '88612134715',
    instagram: 'wildorchidofficial',
  },
  {
    id: id++,
    category: 'underwear womenClothing',
    url: 'Laperila',
    logo: '/butiks/underwear/Laperila/logo.png',
    image: [
      {
        id: 1,
        src: '/butiks/underwear/Laperila/1n.jpg',
        alt: 'Laperila',
      },
      {
        id: 2,
        src: '/butiks/underwear/Laperila/2n.jpg',
        alt: 'Laperila',
      },
      {
        id: 3,
        src: '/butiks/underwear/Laperila/3n.jpg',
        alt: 'Laperila',
      },
      {
        id: 4,
        src: '/butiks/underwear/Laperila/4n.jpg',
        alt: 'Laperila',
      },
    ],
    description1:
      'La Perla – знаменитый итальянский бренд, выпускающий нижнее белье и купальные костюмы, женскую одежду и коллекции мужского белья. И уже не секрет, что каждая представительница прекрасного пола желает хотя бы в жизни раз стать обладательницей предмета коллекции La Perla.',
    floor: '2 этаж',
    tel: '+7 918 079 80 80',
    telUrl: '89180798080',
    instagram: 'lingerie_krd',
  },
  {
    id: id++,
    category: 'underwear',
    url: 'EstelAdony',
    logo: '/butiks/underwear/EstelAdony/logo.png',
    image: [
      {
        id: 1,
        src: '/butiks/underwear/EstelAdony/1n.jpg',
        alt: 'EstelAdony',
      },
      {
        id: 2,
        src: '/butiks/underwear/EstelAdony/2n.jpg',
        alt: 'EstelAdony',
      },
      {
        id: 3,
        src: '/butiks/underwear/EstelAdony/3n.jpg',
        alt: 'EstelAdony',
      },
      {
        id: 4,
        src: '/butiks/underwear/EstelAdony/4n.jpg',
        alt: 'EstelAdony',
      },
    ],
    description1:
      'Сеть салонов «Эстель Адони» — признанный лидер на рынке премиального  белья. Одним из основных преимуществ салонов «Эстель Адони» является многообразие брендов: Lise Charmel, Chantelle, Maison Lejaby, Ambra, Pleasure State и Freya и Fantasie, Moschino, Emporio Armani, Stella McCartney,DKNY, Max Mara, Andres Sarda , Chantal Thomass, Marlies Dekkers, и I.D. Sarrieri.',
    floor: '2 этаж',
    tel: '+7 861 213 48 55',
    telUrl: '88612134855',
    instagram: 'estelle_adony',
  },
  {
    id: id++,
    category: 'clocks',
    url: 'Renaissance',
    logo: '/butiks/clocks/Renaissance/logo.png',
    image: [
      {
        id: 1,
        src: '/butiks/clocks/Renaissance/1n.jpg',
        alt: 'Renaissance',
      },
      {
        id: 2,
        src: '/butiks/clocks/Renaissance/2n.jpg',
        alt: 'Renaissance',
      },
      {
        id: 3,
        src: '/butiks/clocks/Renaissance/3n.jpg',
        alt: 'Renaissance',
      },
      {
        id: 4,
        src: '/butiks/clocks/Renaissance/4n.jpg',
        alt: 'Renaissance',
      },
    ],
    description1:
      'Ювелирный бутик Renaissance — новое прочтение роскоши. Украшения, вдохновленные образом современной женщины. В бутике представлены лучшие коллекции ювелирных брендов Европы и Азии: Giampiero Fiorini, Jjewels Milano, Annamaria Cammilli, Key Gems, Korloff Paris, Astorga. Особое место занимает приватная коллекция бутика Renaissance, в которой собраны выставочные экземпляры международных ювелирных выставок. Также, бутик предоставляет возможность приобретения отдельно драгоценных камней, как инвестиции или  изготовления эксклюзивных украшений с ними.',
    description2:
      'Все украшения ювелирного бутика Renaissance имеют различную философию, но призваны подчеркнуть женскую красоту, грациозность и величие.',
    floor: '1 этаж',
    tel: '+7 995 169 85 80',
    telUrl: '89951698580',
    instagram: 'renaissance_boutique',
  },
  {
    id: id++,
    category: 'clocks',
    url: 'FreyWille',
    logo: '/butiks/clocks/FreyWille/logo.png',
    image: [
      {
        id: 1,
        src: '/butiks/clocks/FreyWille/1n.jpg',
        alt: 'Freywille',
      },
      {
        id: 2,
        src: '/butiks/clocks/FreyWille/2n.jpg',
        alt: 'Freywille',
      },
      {
        id: 3,
        src: '/butiks/clocks/FreyWille/3n.jpg',
        alt: 'Freywille',
      },
      {
        id: 4,
        src: '/butiks/clocks/FreyWille/4n.jpg',
        alt: 'Freywille',
      },
    ],
    description1:
      'Австрийский ювелирный дом FREYWILLE создает высокохудожественные изделия из драгоценной эмали ручной работы. Лимитированные объемы производства – гарантия высочайших стандартов качества всех изделий. Художественный дизайн – главная деталь любого ювелирного изделия FREYWILLE.',
    description2:
      'В бутике вы можете приобрести: серьги, кулоны, браслеты, кольца, часы, броши, клатчи, шелковые шарфы, галстуки, запонки, зажимы для галстука и письменные принадлежности.',
    floor: '2 этаж',
    tel: '+7 861 213 48 58',
    telUrl: '88612134858',
    instagram: 'freywille_ru',
  },
  {
    id: id++,
    category: 'clocks',
    url: 'GoldLarec',
    logo: '/butiks/clocks/GoldLarec/logo2.png',
    image: [
      {
        id: 1,
        src: '/butiks/clocks/GoldLarec/1n.jpg',
        alt: 'GoldLarec',
      },
      {
        id: 2,
        src: '/butiks/clocks/GoldLarec/2n.jpg',
        alt: 'GoldLarec',
      },
      {
        id: 3,
        src: '/butiks/clocks/GoldLarec/3n.jpg',
        alt: 'GoldLarec',
      },
    ],
    description1:
      '«Сеть ювелирных салонов «Золотой Ларец» образована в 1994 году. На сегодняшний день это крупнейшая сеть розничных ювелирных салонов Краснодарского края.',
    description2:
      '1 декабря 2004 года — открытие ювелирного салона «Золотой Ларец» в ТРК «СИТИ ЦЕНТР» — первом в Краснодаре торгово-развлекательном центре класса «премиум». Здесь же, спустя пять лет, в 2009 году, под маркой Diamond Couture компания «Золотой Ларец» открывает бутик, представляющий украшения с бриллиантами как итальянских брендов (Stefan Hafner, Palmiero, Roberto Coin, Giovanni Ferraris) так и российской марки “Смоленские бриллианты». Сегодня «Золотой Ларец» сотрудничает более чем с 80 производителями и поставщиками ювелирных украшений, часов, предметов интерьера и роскоши.',
    description3:
      '«Золотой Ларец» — эксклюзивный дистрибьютор в Краснодарском крае таких ювелирных итальянских брендов, как Giovanni Ferraris, Palmiero, Roberto Coin, Baraka, Graziella, Giloro, Falchinelli. Для любителей русских бриллиантов в сети «Золотой Ларец» представлены украшения «МЭЮЗ», «Ювелирного дома», «Арт Модерн», «Арт Ювелир», «Ринго», «Наталиголд» и других. Наряду с ювелирными украшениями в сети «Золотой Ларец» представлены крупные часовые бренды',
    floor: '1 этаж',
    tel: '8 (861) 267-75-55',
    telUrl: '88612677555',
    instagram: 'zolotoylarets',
  },
  {
    id: id++,
    category: 'clocks giftsAndBook',
    url: 'TimeGalery',
    logo: '/butiks/clocks/TimeGalery/logo.png',
    image: [
      {
        id: 1,
        src: '/butiks/clocks/TimeGalery/1n.jpg',
        alt: 'TimeGalery',
      },
      {
        id: 2,
        src: '/butiks/clocks/TimeGalery/2n.jpg',
        alt: 'TimeGalery',
      },
      {
        id: 3,
        src: '/butiks/clocks/TimeGalery/3n.jpg',
        alt: 'TimeGalery',
      },
      {
        id: 4,
        src: '/butiks/clocks/TimeGalery/4n.jpg',
        alt: 'TimeGalery',
      },
      {
        id: 5,
        src: '/butiks/clocks/TimeGalery/5n.jpg',
        alt: 'TimeGalery',
      },
      {
        id: 5,
        src: '/butiks/clocks/TimeGalery/6n.jpg',
        alt: 'TimeGalery',
      },
    ],
    description1:
      '«Галерея Времени» — сеть премиальных салонов швейцарских часов.',
    description2:
      'Вы можете быть абсолютно уверены в том, что покупаете подлинные швейцарские часы. «Галерея Времени» официально представляет примиальные бренды, такие как Zenith, Breitling, TAG Heuer, Frederique Constant, Longines, Rado, Raymond Weil, Alpina, Tissot,Casio, Orient, Festina,Jacques Lemans.',
    floor: '1 этаж',
    tel: '+7 861 213 47 76',
    telUrl: '88612134776',
    instagram: 'time_gallery.krasnodar',
  },
  {
    id: id++,
    category: 'clocks giftsAndBook',
    url: 'GMT',
    logo: '/butiks/clocks/GMT/logo.png',
    image: [
      {
        id: 1,
        src: '/butiks/clocks/GMT/1n.jpg',
        alt: 'GMT',
      },
      {
        id: 2,
        src: '/butiks/clocks/GMT/2n.jpg',
        alt: 'GMT',
      },
      {
        id: 3,
        src: '/butiks/clocks/GMT/3n.jpg',
        alt: 'GMT',
      },
      {
        id: 4,
        src: '/butiks/clocks/GMT/4n.jpg',
        alt: 'GMT',
      },
      {
        id: 5,
        src: '/butiks/clocks/GMT/5n.jpg',
        alt: 'GMT',
      },
    ],
    description1:
      'GMT официально представляет ведущие часовые и ювелирные марки. Здесь представлены производители Швейцарии, Италии, США, Франции: Blancpain, Breitling, Chopard, Crivelli, Damiani, David Yurman, IWC, Jaeger-LeCoultre, Hublot, Pasquale Bruni, Vacheron Constantin, Zenith, а также Montegrappa и S.T.Dupont.',
    description2:
      'GMT воспринимается как знак качества, которому доверяют ведущие мировые бренды и клиенты.',
    floor: '1 этаж',
    tel: '+7 861 262 60 26',
    telUrl: '88612626026',
    instagram: 'gmt_krasnodar',
  },
  {
    id: id++,
    category: 'giftsAndBook',
    url: 'Branche',
    logo: '/butiks/clocks/Branche/logo.png',
    image: [
      {
        id: 1,
        src: '/butiks/clocks/Branche/1n.jpg',
        alt: 'Branche',
      },
      {
        id: 2,
        src: '/butiks/clocks/Branche/2n.jpg',
        alt: 'Branche',
      },
      {
        id: 3,
        src: '/butiks/clocks/Branche/3n.jpg',
        alt: 'Branche',
      },
    ],
    description1:
      'Бутик Branche´ – fashion проект, представляющий марки аксессуаров и украшений самых известных и актуальных мировых дизайнеров, таких как Rodrigo Otazu, MAWI, Nina Ricci, Valerie Valentine, Ben Amun, Jennifer Behr, Anton Heunis, Joanna Laura Constantine, Alexandre de Paris и многих других.',
    description2:
      'В коллекциях представлены те вещи, которые можно увидеть на международных подиумах, страницах глянцевых журналов, фотографиях мировых икон стиля, среди которых Madonna, Kylie Minogue, Kate Moss, Lady Gaga, Rihanna, Scarlett Johansson и др.',
    floor: '2 этаж',
    tel: '+7 861 213 48 13',
    telUrl: '88612134813',
    instagram: 'be.branche',
  },
  {
    id: id++,
    category: 'shoesAndBags',
    url: 'Premiata',
    logo: '/butiks/shoesAndBags/VicMatie/logo1.png',
    image: [
      {
        id: 1,
        src: '/butiks/shoesAndBags/VicMatie/1n.jpg',
        alt: 'Premiata',
      },
      {
        id: 2,
        src: '/butiks/shoesAndBags/VicMatie/2n.jpg',
        alt: 'Premiata',
      },
      {
        id: 3,
        src: '/butiks/shoesAndBags/VicMatie/3n.jpg',
        alt: 'Premiata',
      },
      {
        id: 4,
        src: '/butiks/shoesAndBags/VicMatie/4n.jpg',
        alt: 'Premiata',
      },
    ],
    description1:
      'Premiata – магазин мужской и женской обуви, в котором представлены модели креативных брендов из Италии –  Vic Matie, MoMa, Brecos, Voile Blanche и бренд ортопедической обуви из Германии — Birkenstock. Каждая пара обуви становится первоосновой итальянского стиля: дизайнеры с лёгкостью воплощают в жизнь актуальные тенденции сезонов.',
    description2:
      'Лоферы, туфли, сапоги, ботильоны, кроссовки, сандалии  –  не просто удобная обувь для жизни, а предмет модного искусства.',
    floor: '2 этаж',
    tel: '+7 861 213 47 31',
    telUrl: '88612134731',
    instagram: '',
  },
  {
    id: id++,
    category: 'shoesAndBags',
    url: 'Fabi',
    logo: '/butiks/shoesAndBags/Fabi/logo.png',
    image: [
      {
        id: 1,
        src: '/butiks/shoesAndBags/Fabi/1n.jpg',
        alt: 'Fabi',
      },
      {
        id: 2,
        src: '/butiks/shoesAndBags/Fabi/2n.jpg',
        alt: 'Fabi',
      },
      {
        id: 3,
        src: '/butiks/shoesAndBags/Fabi/3n.jpg',
        alt: 'Fabi',
      },
    ],
    description1:
      'Европейский бренд обуви Fabi – один из тех, чью новую коллекцию ждут с замиранием сердца.',
    description2:
      'Вся обувь Fabi проходит строгий контроль качества, поэтому обувь этой марки – не только роскошь, но и надежность. Продукция в бутике представлена в двух линейках: Fabi Couture, эксклюзивная обувь из которой сделана из экзотической кожи и богато декорирована, и Fabi Collection – на каждый день.',
    floor: '2 этаж',
    tel: '+7 861 231 47 86',
    telUrl: '88612314786',
    instagram: 'fabi_krd',
  },
  {
    id: id++,
    category: 'cosmetics',
    url: 'ileDeBeaute',
    logo: '/butiks/cosmetics/ileDeBeaute/logo.png',
    image: [
      {
        id: 1,
        src: '/butiks/cosmetics/ileDeBeaute/1n.jpg',
        alt: 'ileDeBeaute',
      },
      {
        id: 2,
        src: '/butiks/cosmetics/ileDeBeaute/2n.jpg',
        alt: 'ileDeBeaute',
      },
      {
        id: 3,
        src: '/butiks/cosmetics/ileDeBeaute/3n.jpg',
        alt: 'ileDeBeaute',
      },
      {
        id: 4,
        src: '/butiks/cosmetics/ileDeBeaute/4n.jpg',
        alt: 'ileDeBeaute',
      },
    ],
    description1: `ИЛЬ ДЕ БОТЭ – МИР РОСКОШНОЙ КРАСОТЫ. Парфюмерно-косметическая сеть ИЛЬ ДЕ БОТЭ была основана в 2001 году и покорила сердца ценителей красоты в России. За долгие годы сеть зарекомендовала себя лидером в сегменте премиум. Основной акцент в работе каждого магазина — высокое качество представленного ассортимента и приверженность профессиональным стандартам обслуживания.`,
    description2:
      'Открывая двери ИЛЬ ДЕ БОТЭ, каждый гость попадает в атмосферу спокойствия и комфорта, где ценят и уважают индивидуальные предпочтения и основательно подходят к рекомендациям продуктов. Наследием сети является широкий ассортимент всемирно известных мировых брендов красоты премиум класса, а также большая коллекция селективных марок, эксклюзивных предложений и нишевой парфюмерии.',
    description3: `ИЛЬ ДЕ БОТЭ – это престижное и комфортное место для знакомства с ежедневными ритуалами и программами красоты, с последними тенденциями и разработками косметической индустрии. Магазины сети ИЛЬ ДЕ БОТЭ расположены в крупнейших городах по всей России.`,
    floor: '1 этаж',
    tel: '+7 861 213 48 48',
    telUrl: '88612134848',
    instagram: 'sephora_russia',
  },
  {
    id: id++,
    category: 'cosmetics',
    url: 'Perfumery',
    logo: '/butiks/cosmetics/Giorgio/logo.png',
    image: [
      {
        id: 1,
        src: '/butiks/cosmetics/Giorgio/1n.jpg',
        alt: 'Giorgio',
      },
      {
        id: 2,
        src: '/butiks/cosmetics/Giorgio/2n.jpg',
        alt: 'Giorgio',
      },
      {
        id: 3,
        src: '/butiks/cosmetics/Giorgio/3n.jpg',
        alt: 'Giorgio',
      },
      {
        id: 4,
        src: '/butiks/cosmetics/Giorgio/4n.jpg',
        alt: 'Giorgio',
      },
      {
        id: 5,
        src: '/butiks/cosmetics/Giorgio/5n.jpg',
        alt: 'Giorgio',
      },
    ],
    description1:
      'Парфюмерный бутик Giorgio не продает, а подбирает аромат под настроение и образ жизни клиента.',
    description2:
      'Уникальный ассортимент ароматов, непревзойденное обслуживание и изысканная атмосфера позволяют создать ощущение праздника.',
    floor: '1 этаж',
    tel: '+7 861 213 47 40',
    telUrl: '88612134740',
    instagram: 'giorgio_boutique',
  },
  {
    id: id++,
    category: 'interior giftsAndBook',
    url: 'Renesans',
    logo: '/butiks/interior/Renesans/logo.png',
    image: [
      {
        id: 1,
        src: '/butiks/interior/Renesans/1n.jpg',
        alt: 'Renesans',
      },
      {
        id: 2,
        src: '/butiks/interior/Renesans/2n.jpg',
        alt: 'Renesans',
      },
      {
        id: 3,
        src: '/butiks/interior/Renesans/3n.jpg',
        alt: 'Renesans',
      },
      {
        id: 4,
        src: '/butiks/interior/Renesans/4n.jpg',
        alt: 'Renesans',
      },
    ],
    description1: `В арт-салоне «Ренессанс» вы найдете эксклюзивные подарки, сувениры и предметы интерьера, посуду из итальянского фарфора, бронзы и хрусталя. Роскошные и необычные вещи для самых важных людей.`,
    floor: '3 этаж',
    tel: '+7 918 697 04 77',
    telUrl: '89186970477',
    instagram: 'renaissance_boutique',
  },
  {
    id: id++,
    category: 'interior',
    url: 'DC',
    logo: '/butiks/interior/DC/logo.png',
    image: [
      {
        id: 1,
        src: '/butiks/interior/DC/1.jpg',
        alt: 'DC',
      },
      {
        id: 2,
        src: '/butiks/interior/DC/2.jpg',
        alt: 'DC',
      },
    ],
    description1: `Уже более 20 лет «Dream Catchers» занимается созданием и продажей мягких кроватей и мебели для спальни с инновационным и функциональным дизайном в премиальном качестве исполнения. Домашний текстиль премиум класса, роскошные полотенца и мягчайшие пледы, удобные подушки и нежные одеяла, постельное белье из самых приятных тканей: бамбука, сатина, страйп сатина, египетского хлопка, тенселя и вискозы.`,
    description2:
      'Сегодня «Dream Catchers» производит свыше 100 дизайнерских моделей мебели в соответствии с вашими личными вкусами и потребностями. Вы можете выбрать свой вариант из более 1500 вариантов расцветок обивки мебели из коллекции тканей',
    floor: '3 этаж',
    tel: '+7 929 850 14 62',
    telUrl: '89298501462',
    instagram: 'dream_catchers_rus',
  },
  {
    id: id++,
    category: 'interior giftsAndBook',
    url: 'LuxuryLiving',
    logo: '/butiks/interior/LuxuryLiving/logo.png',
    image: [
      {
        id: 1,
        src: '/butiks/interior/LuxuryLiving/1n.jpg',
        alt: 'LuxuryLiving',
      },
      {
        id: 2,
        src: '/butiks/interior/LuxuryLiving/2n.jpg',
        alt: 'LuxuryLiving',
      },
      {
        id: 3,
        src: '/butiks/interior/LuxuryLiving/3n.jpg',
        alt: 'LuxuryLiving',
      },
      {
        id: 4,
        src: '/butiks/interior/LuxuryLiving/4n.jpg',
        alt: 'LuxuryLiving',
      },
    ],
    description1: `Интерьерный салон Luxury Living работает с 2010 года и является официальным представителем на юге России всемирно известных брендов: Hermes, Baccarat, Lalique, Christofle, Daum, Fendi Casa, Dolce&Gabbana Casa, Versace Home и другими.`,
    description2: `Опытные декораторы осуществляют под ключ полный спектр услуг от подбора материалов до оформления интерьера мебелью, предметами столовой сервировки, текстилем и аксессуарами`,
    floor: '1 этаж',
    tel: '+7 (989) 235-19-33',
    telUrl: '89892351933',
    instagram: '',
  },
  {
    id: id++,
    category: 'giftsAndBook kafeAndRestoran',
    url: 'French Kiss',
    logo: '/butiks/giftsAndBook/FrenchKiss/logo.png',
    image: [
      {
        id: 1,
        src: '/butiks/giftsAndBook/FrenchKiss/3.jpg',
        alt: 'FrenchKiss',
      },
      {
        id: 2,
        src: '/butiks/giftsAndBook/FrenchKiss/2.jpg',
        alt: 'FrenchKiss',
      },
    ],
    description1:
      'Конфеты, печенье и сладости ручной работы. Бутик и интернет-магазин десертов из премиального шоколада.',
    description2: 'Десерты FRENCH KISS – это:',
    description3: 'Натуральные ингредиенты, ручная работа, авторские рецепты',
    floor: '1 этаж',
    tel: '+7 938 43 07 564',
    telUrl: '89384307564',
    instagram: 'frenchkiss_krd',
  },
  {
    id: id++,
    category: 'services',
    url: 'HimCLear',
    logo: '/services/HimCLear/logo.png',
    image: [
      {
        id: 1,
        src: '/services/HimCLear/3.jpg',
        alt: 'HimCLear',
      },
      {
        id: 2,
        src: '/services/HimCLear/4.jpg',
        alt: 'HimCLear',
      },
    ],
    description1:
      'Сеть химчисток-прачечных Премиум занимается: стиркой белья, прачечными услугами, окраской, услугами химчистки одежды, химической стиркой, отбеливанием, стиркой полотенец, стиркой пледов, прачечной по невысокой стоимости, мойкой паласов, крашением одежды и обуви.',
    description2:
      'Также мы занимаемся: окраской одежды, выведением пятен, устранением запахов, профессиональной чисткой ковров, можно почистить пуховик, чисткой замши, реставрацией подушек, химчисткой спецодежды, чисткой штор, сетью химчисток, экспресс-химчисткой, недорогими услугами, профессиональной химчисткой.',
    floor: '2 этаж',
    tel: '+7 961 510 25 60',
    telUrl: '89615102560',
  },
  {
    id: id++,
    category: 'services gameCategory children',
    url: 'Igratoriya',
    logo: '/services/Igratoriya/logo.png',
    image: [
      {
        id: 1,
        src: '/services/Igratoriya/1n.jpg',
        alt: 'Igratoriya',
      },
      {
        id: 2,
        src: '/services/Igratoriya/2n.jpg',
        alt: 'Igratoriya',
      },
      {
        id: 3,
        src: '/services/Igratoriya/3n.jpg',
        alt: 'Igratoriya',
      },
      {
        id: 4,
        src: '/services/Igratoriya/4n.jpg',
        alt: 'Igratoriya',
      },
    ],
    description1:
      '«Игратория» — это сеть современных детских игровых центров для игры и творчества. Здесь есть все, что так нравится детям: Игровой лабиринт, горки, бассейн с шариками, батут, а так же самые интересные игрушки. Во всех центрах «Игратория» работают педагоги- аниматоры, которые активно играют с детками. Они знают 1000 игр и сумеют развеселить даже самого сурового малыша.',
    description2:
      'Для наших маленьких гостей мы ежедневно проводим увлекательные мастер-классы, мини-диско, зарядку и множество подвижных игр. Каждые выходные мы приглашаем Ваших малышей принять участие в программе «Выходные с Играторией», где ребят ждет бесплатный аквагрим, квест, игровая программа, творческий мастер класс и много других веселых сюрпризов. Все активности входят в стоимость посещения и не требуют дополнительной оплаты! А еще в «Игратории» можно отметить самый веселый и яркий день рождения, который точно понравится имениннику и запомниться всем гостям.',
    description3: 'Встречаемся в Игратории!',
    floor: '3 этаж',
    tel: '+7 988 470 19 63',
    telUrl: '89884701963',
    instagram: 'igratoria',
  },
  {
    id: id++,
    category: 'services',
    url: 'Perekrestok',
    logo: '/services/Perekrestok/logo.png',
    image: [
      {
        id: 1,
        src: '/services/Perekrestok/1.jpg',
        alt: 'Perekrestok',
      },
    ],
    description1: ' ',
    floor: '1 этаж',
    tel: '',
    telUrl: '',
  },
  {
    id: id++,
    category: 'services',
    url: 'ATMs',
    logo: '/services/ATMs/logo1.png',
    image: [
      {
        id: 1,
        src: '/services/ATMs/1n.jpg',
        alt: 'ATMs',
      },
      {
        id: 2,
        src: '/services/ATMs/2n.jpg',
        alt: 'ATMs',
      },
      {
        id: 3,
        src: '/services/ATMs/3n.jpg',
        alt: 'ATMs',
      },
      {
        id: 4,
        src: '/services/ATMs/logo1.png',
        alt: 'ATMs',
      },
    ],
    description1: ' ',
    floor: '1 этаж',
    tel: '',
    telUrl: '',
  },
  {
    id: id++,
    category: 'services',
    url: 'Pharmacy',
    logo: '/services/Pharmacy/logo.png',
    image: [
      {
        id: 1,
        src: '/butiks/loaderImgSmall.png',
        alt: 'Pharmacy',
      },
    ],
    description1: 'Аптека',
    floor: '1 этаж',
    tel: '',
    telUrl: '',
  },
  {
    id: id++,
    category: 'services',
    url: 'Repassaj',
    logo: '/services/Repassaj/logo.png',
    image: [
      {
        id: 1,
        src: '/services/Repassaj/1.jpg',
        alt: 'Repassaj',
      },
    ],
    description1: 'Ремонт часов',
    floor: '1 этаж',
    tel: '',
    telUrl: '',
  },
  {
    id: id++,
    category: 'gameCategory',
    url: 'Cinema',
    logo: '/butiks/gameCategory/cinema/logo.png',
    image: [
      {
        id: 1,
        src: '/butiks/gameCategory/cinema/1.jpg',
        alt: 'Cinema',
      },
      {
        id: 2,
        src: '/butiks/gameCategory/cinema/2.jpg',
        alt: 'Cinema',
      },
      {
        id: 3,
        src: '/butiks/gameCategory/cinema/3.jpg',
        alt: 'Cinema',
      },
      {
        id: 4,
        src: '/butiks/gameCategory/cinema/4.jpg',
        alt: 'Cinema',
      },
    ],
    description1: `«МОНИТОР Сити de Luxe» — кинотеатр нового уровня, соответствующий актуальным трендам мирового кинопоказа и современного дизайна. Кинотеатр оборудован высококачественной кинопроекционной системой Sony Digital.Cinema 4K с функцией показа максимально чёткого изображения.`,
    description2: `В двух комфортных залах на 62 и 64 места установлены удобные кресла с выдвижными столиками, огромным личным пространством и большим расстоянием между рядами. Все кресла имеют выдвижную слайдер-систему. Последний ряд оборудован раскладывающимися креслами-реклайнерами с подставкой для ног, которые можно привести в полностью горизонтальное положение.`,
    description3: `Также у нас вы можете заказать еду из ресторана прямо в кинозал. Официант принесёт заказ и разместит его на столике у кресла.`,
    floor: '3 этаж',
    tel: '+7 999 412 00 12',
    telUrl: '89994120012',
    instagram: 'KINOMONITOR',
  },
  {
    id: id++,
    category: 'glasses giftsAndBook',
    url: 'RePremium',
    logo: '/butiks/glasses/RePremium/logo.png',
    image: [
      {
        id: 1,
        src: '/butiks/loaderImgSmall.png',
        alt: 'RePremium',
      },
    ],
    description1: `Re:Premium — сети салонов электроники нового формата, где премиум не означает дорого.`,
    description2: `Apple, Samsung, Dyson, Sony, Xiaomi и многие другие бренды в наличии и под заказ.`,
    description3: `Покупайте премиум-технику без переплат в Re:premium ✨`,
    floor: '1 этаж',
    tel: '',
    telUrl: '',
    instagram: '',
  },
  {
    id: id++,
    category: 'manClothing',
    url: 'Studio',
    logo: '/butiks/menClothing/Studio/logo.png',
    image: [
      {
        id: 1,
        src: '/butiks/menClothing/Studio/1n.jpg',
        alt: 'Studio',
      },
      {
        id: 2,
        src: '/butiks/menClothing/Studio/2n.jpg',
        alt: 'Studio',
      },
      {
        id: 3,
        src: '/butiks/menClothing/Studio/3n.jpg',
        alt: 'Studio',
      },
      {
        id: 4,
        src: '/butiks/menClothing/Studio/4n.jpg',
        alt: 'Studio',
      },
    ],
    description1: `STUDIO-бутик для настоящих мужчин: уникальный мир итальянской мужской моды, где стиль, качество и роскошь сочетаются в каждом из наших предложений.`,
    description2: `STUDIO -место,где вы найдете широкий ассортимент одежды, обуви и аксессуаров созданных с любовью и вниманием к деталям. Мы работаем только с лучшими итальянскими брендами, которые известны своим исключительным качеством и оригинальным дизайном.`,
    floor: '2 этаж',
    tel: '+7 928 432 55 00',
    telUrl: '89284325500',
    instagram: '',
  },
  {
    id: id++,
    category: 'manClothing',
    url: 'Gabbiacci',
    logo: '/butiks/menClothing/Gabbiaacci/logo.png',
    image: [
      {
        id: 1,
        src: '/butiks/menClothing/Gabbiaacci/1n1.jpg',
        alt: 'Gabbiacci',
      },
      {
        id: 2,
        src: '/butiks/menClothing/Gabbiaacci/2n.jpg',
        alt: 'Gabbiacci',
      },
      {
        id: 3,
        src: '/butiks/menClothing/Gabbiaacci/3n.jpg',
        alt: 'Gabbiacci',
      },
      {
        id: 4,
        src: '/butiks/menClothing/Gabbiaacci/4n.jpg',
        alt: 'Gabbiacci',
      },
    ],
    description1: `Бренд мужской одежды Gabbiacci рожден в Милане. Коллекции выполнены в уникальной итальянской  манере сочетания фактур,цветов и фасонов!`,
    description2: `Современность, элегантность и стиль, всегда высокие стандарты!`,
    description3: `А также в бутике представлен немецкий бренд женскoй одежды UNQ. Изюминка бренда заключается в своенравной оригинальности, влюбленной в комфорт.`,
    floor: '2 этаж',
    tel: '+7 953 090 67 23',
    telUrl: '89530906723',
    instagram: '',
  },
  {
    id: id++,
    category: 'womenClothing manClothing',
    url: 'ConceptStore',
    logo: '/butiks/womenClothing/ConceptStore/logo1.png',
    image: [
      {
        id: 1,
        src: '/butiks/womenClothing/ConceptStore/1n.jpg',
        alt: 'ConceptStore',
      },
      {
        id: 2,
        src: '/butiks/womenClothing/ConceptStore/2n.jpg',
        alt: 'ConceptStore',
      },
      {
        id: 3,
        src: '/butiks/womenClothing/ConceptStore/3n.jpg',
        alt: 'ConceptStore',
      },
      {
        id: 4,
        src: '/butiks/womenClothing/ConceptStore/4n.jpg',
        alt: 'ConceptStore',
      },
    ],
    description1: `CONCEPT STORE – Мультибрендовый бутик женской и мужской одежды всемирно известных брендов в сегменте доступной роскоши.`,
    description2: `Официальный представитель брендов Hugo, Boss, Riani, Olymp, Philippe Model, Joop!,  Parajumpers.`,
    description3: `Все представленные бренды высокого качества, для самых взыскательных, предпочитающих подчеркивать свою индивидуальность, удивлять возможностью меняться, но при этом оставаться всегда стильными и уверенными в себе.`,
    floor: '2 этаж',
    tel: '+7 988 489 88 11',
    telUrl: '89884898811',
    instagram: '',
  },
  {
    id: id++,
    category: 'womenClothing',
    url: 'ConceptStoreW',
    logo: '/butiks/womenClothing/ConceptStoreW/logo1.png',
    image: [
      {
        id: 1,
        src: '/butiks/womenClothing/ConceptStoreW/1n.jpg',
        alt: 'ConceptStoreW',
      },
      {
        id: 2,
        src: '/butiks/womenClothing/ConceptStoreW/2n.jpg',
        alt: 'ConceptStoreW',
      },
      {
        id: 3,
        src: '/butiks/womenClothing/ConceptStoreW/3n.jpg',
        alt: 'ConceptStoreW',
      },
      {
        id: 4,
        src: '/butiks/womenClothing/ConceptStoreW/4n.jpg',
        alt: 'ConceptStoreW',
      },
    ],
    description1: `CONCEPT STORE W – Мультибрендовый бутик женской одежды, официальный представитель премиум брендов Escada, Escada sport, Luisa Cerano, Luisa Spagnoli и Tonet.`,
    description2: `CONCEPT STORE W специально создан для леди, сочетающей в себе лидерские качества, активную жизненную позицию с утонченностью и романтизмом.`,
    description3: `В бутике представлены коллекции одежды непревзойдённого качества для истинных ценителей стиля и комфорта.`,
    floor: '2 этаж',
    tel: '+7 918 151 23 23',
    telUrl: '89181512323',
    instagram: '',
  },
  {
    id: id++,
    category: 'womenClothing',
    url: 'Braschi',
    logo: '/butiks/womenClothing/Braschi/logo.png',
    image: [
      {
        id: 1,
        src: '/butiks/womenClothing/Braschi/1n.jpg',
        alt: 'Braschi',
      },
      {
        id: 2,
        src: '/butiks/womenClothing/Braschi/2n.jpg',
        alt: 'Braschi',
      },
      {
        id: 3,
        src: '/butiks/womenClothing/Braschi/3n.jpg',
        alt: 'Braschi',
      },
    ],
    description1: `В монобрендовом бутике BRASCHI  представлен большой выбор меховых изделий на любой вкус и для самых изысканных девушек.`,
    floor: '2 этаж',
    tel: '+7 988 245 00 50',
    telUrl: '89181512323',
    instagram: '',
  },
  {
    id: id++,
    category: 'womenClothing',
    url: 'MesDemoiselles',
    logo: '/butiks/womenClothing/MesDemoiselles/logo.png',
    image: [
      {
        id: 1,
        src: '/butiks/womenClothing/MesDemoiselles/1n.jpg',
        alt: 'MesDemoiselles',
      },
      {
        id: 2,
        src: '/butiks/womenClothing/MesDemoiselles/2n.jpg',
        alt: 'MesDemoiselles',
      },
      {
        id: 3,
        src: '/butiks/womenClothing/MesDemoiselles/3n.jpg',
        alt: 'MesDemoiselles',
      },
      {
        id: 4,
        src: '/butiks/womenClothing/MesDemoiselles/4n.jpg',
        alt: 'MesDemoiselles',
      },
      {
        id: 5,
        src: '/butiks/womenClothing/MesDemoiselles/5.jpg',
        alt: 'MesDemoiselles',
      },
      {
        id: 6,
        src: '/butiks/womenClothing/MesDemoiselles/6.jpg',
        alt: 'MesDemoiselles',
      },
      {
        id: 7,
        src: '/butiks/womenClothing/MesDemoiselles/7.jpg',
        alt: 'MesDemoiselles',
      },
    ],
    description1: `Mes Demoiselles Paris... — это воплощение женственности. Создательница бренда — Анита Радованович, французский модельер и дизайнер. В 2006 году она выпустила свою первую коллекцию и получила абсолютное признание в мировой модной индустрии. Отличительная черта бренда — бессменный стиль бохо-шик. Классические и романтические образы, в которых есть элегантность, свобода, легкость много света и воздуха.`,
    description2: `Философия Mes Demoiselles Paris... вдохновлена природой: все принты и оттенки повторяют сезонные цвета и узоры. `,
    description3: `Мы рады пригласить вас в богемный мир французской моды!`,
    floor: '2 этаж',
    tel: '+7 861 213 47 82',
    telUrl: '88612134782',
    instagram: '',
  },
  {
    id: id++,
    category: 'children',
    url: 'MagicToys',
    logo: '/butiks/children/MagisToys/logo1.png',
    image: [
      {
        id: 1,
        src: '/butiks/children/MagisToys/1n.jpg',
        alt: 'MagisToys',
      },
      {
        id: 2,
        src: '/butiks/children/MagisToys/2n.jpg',
        alt: 'MagisToys',
      },
      {
        id: 3,
        src: '/butiks/children/MagisToys/3n.jpg',
        alt: 'MagisToys',
      },
      {
        id: 4,
        src: '/butiks/children/MagisToys/4n.jpg',
        alt: 'MagisToys',
      },
    ],
    description1: `Мы любим дарить детям радость настолько , что решили превратить это в свою работу.`,
    description2: `Игрушки и игры способствуют развитию воображения ребенка и открываем ему двери в другие , волшебные миры.`,
    description3: `Кубики и фигурки любимых героев , машинки и куклы , товары для малышей и младенцев : у нас собран самый широкий ассортимент игрушек в городе Краснодаре.`,
    floor: '3 этаж',
    tel: '+7 918 026 00 06',
    telUrl: '89180260006',
    instagram: '',
  },
  {
    id: id++,
    category: 'kafeAndRestoran',
    url: 'DonBazilio',
    logo: '/butiks/kafe/DonBazilio/logo.png',
    image: [
      {
        id: 1,
        src: '/butiks/kafe/DonBazilio/1.jpg',
        alt: 'DonBazilio',
      },
      {
        id: 2,
        src: '/butiks/kafe/DonBazilio/2.jpg',
        alt: 'DonBazilio',
      },
      {
        id: 3,
        src: '/butiks/kafe/DonBazilio/3.jpg',
        alt: 'DonBazilio',
      },
      {
        id: 4,
        src: '/butiks/kafe/DonBazilio/4.jpg',
        alt: 'DonBazilio',
      },
    ],
    description1: `Don Bazilio — уютный семейный ресторан, здесь вы можете насладиться неаполитанской пиццей из настоящей дровяной печи, заказать хрустящую брускетту, аппетитную пасту и окунуться в атмосферу солнечной Италии.`,
    description2: `Для юных гостей в семейном ресторане Don Bazilio есть специальное детское меню с полезными и вкусными блюдами. Для любителей кинопремьер - это уникальная возможность наслаждаться настоящими итальянскими блюдами от шефа в кинотеатре Монитор Сити De Luxe.`,
    description3: `Романтические свидания, любые семейные мероприятия, деловые встречи - все это с огромным удовольствием устроит команда  ресторана Don Bazilio.`,
    floor: '3 этаж',
    tel: '+7 918 120 00 13',
    telUrl: '89181200013',
    instagram: '',
    otherInfo: 'https://madyar.ru/ru/restaurants/don-bazilio/dishes',
    textOtherInfo: 'Меню ресторана',
  },
  {
    id: id++,
    category: 'children gameCategory',
    url: 'ChildrenInCity',
    logo: '/butiks/children/ChildrenInCity/logo1.png',
    image: [
      {
        id: 1,
        src: '/butiks/children/ChildrenInCity/1n.jpg',
        alt: 'ChildrenInCity',
      },
      {
        id: 2,
        src: '/butiks/children/ChildrenInCity/2n.jpg',
        alt: 'ChildrenInCity',
      },
      {
        id: 3,
        src: '/butiks/children/ChildrenInCity/3n.jpg',
        alt: 'ChildrenInCity',
      },
      {
        id: 4,
        src: '/butiks/children/ChildrenInCity/4n.jpg',
        alt: 'ChildrenInCity',
      },
      {
        id: 5,
        src: '/butiks/children/ChildrenInCity/5n.jpg',
        alt: 'ChildrenInCity',
      },
      {
        id: 6,
        src: '/butiks/children/ChildrenInCity/6n.jpg',
        alt: 'ChildrenInCity',
      },
      {
        id: 7,
        src: '/butiks/children/ChildrenInCity/7n.jpg',
        alt: 'ChildrenInCity',
      },
    ],
    description1:
      'Популярные в Сити — это уникальный проект премиального уровня, который предлагает высококлассный отдых и развлечения детям до 12 лет.',
    description2:
      'Площадь центра составляет более 1 000 кв.м. игрового пространства, уединенных комнат для проведения Дней рождения и других мероприятий, кафе и бара для детей, а также зон для мастер-классов.',
    description3: `Кроме того, в Популярные в Сити на постоянной основе работает профессиональная команда аниматоров, которые помогают в организации детского досуга и его воплощении в жизнь.`,
    floor: '3 этаж',
    tel: '+7 918 333 17 77',
    telUrl: '89183331777',
    instagram: '',
    // otherInfo: 'https://detivcity.ru/',
    // textOtherInfo: 'Сайт «Дети В СИТИ»',
  },
  {
    id: id++,
    category: 'glasses',
    url: 'Optika',
    logo: '/butiks/glasses/Optika/logo.png',
    image: [
      {
        id: 1,
        src: '/butiks/glasses/Optika/1n.jpg',
        alt: 'Optika',
      },
      {
        id: 2,
        src: '/butiks/glasses/Optika/2n.jpg',
        alt: 'Optika',
      },
      {
        id: 3,
        src: '/butiks/glasses/Optika/3n.jpg',
        alt: 'Optika',
      },
      {
        id: 4,
        src: '/butiks/glasses/Optika/4n.jpg',
        alt: 'Optika',
      },
    ],
    description1:
      'Салон оптики «Оптрика» дает возможность смотреть на мир по-другому и предлагает самые качественные оптические услуги в городе.',
    description2:
      'Здесь вы всегда можете приобрести подходящие очки, проверить свое зрение и задать все интересующие вас вопросы оптику-консультанту. “Оптрика” производит очки для зрения только с сертифицированными линзами от мировых производителей.',
    description3:
      'В салоне представлены только оригинальные очки от мировых брендов: Cartier, Chrome-Hearts, Dior, Prada, D&G, Gucci, Roberto Cavalli, Tiffany&Co и многие другие.',
    floor: '1 этаж',
    tel: '+7 861 213 47 56',
    telUrl: '88612134756',
    instagram: 'optrika',
  },
  {
    id: id++,
    category: 'womenClothing',
    url: 'Kiara',
    logo: '/butiks/womenClothing/Kiara/logo.png',
    image: [
      {
        id: 1,
        src: '/butiks/womenClothing/Kiara/1.jpg',
        alt: 'Kiara',
      },
      {
        id: 2,
        src: '/butiks/womenClothing/Kiara/2.jpg',
        alt: 'Kiara',
      },
      {
        id: 3,
        src: '/butiks/womenClothing/Kiara/3.jpg',
        alt: 'Kiara',
      },
      {
        id: 4,
        src: '/butiks/womenClothing/Kiara/4.jpg',
        alt: 'Kiara',
      },
      {
        id: 6,
        src: '/butiks/womenClothing/Kiara/6.jpg',
        alt: 'Kiara',
      },
      {
        id: 7,
        src: '/butiks/womenClothing/Kiara/7.jpg',
        alt: 'Kiara',
      },
      {
        id: 8,
        src: '/butiks/womenClothing/Kiara/8.jpg',
        alt: 'Kiara',
      },
    ],
    description1: `KIARA — это баланс между комфортом и красотой, женственные силуэты в сочетании с авторскими элементами дизайна.`,
    description2: `Одежда KIARA это изысканность минимализма, простота линий в сочетании с привлекательностью модных тенденций. Особенность коллекций KIARA в том, что изделия можно надеть, как на выход, так и в повседневной жизни, это всегда будет выглядеть уместно, стильно и изысканно. Классный аутфит откроет любые двери в деловой и личной жизни. Приносит хорошее настроение, уверенность в себе. Эффектные наряды акцентируют внимание на достоинствах фигуры. Коллекции привлекают оригинальностью, необычными фасонами.`,
    description3: `Только премиальные материалы и благородные фактуры. Разнообразие трендовых оттенков, модные силуэты, капсульное решение коллекции, сочетание комфорта и простоты, но с опрятностью и элегантностью.`,
    floor: '2 этаж',
    tel: '+7 982 782 22 30',
    telUrl: '89827822230',
    instagram: '',
  },
  {
    id: id++,
    category: 'womenClothing',
    url: 'MAXCo',
    logo: '/butiks/womenClothing/MAXCo/logo.png',
    image: [
      {
        id: 1,
        src: '/butiks/womenClothing/MAXCo/1.jpg',
        alt: 'MAXCo',
      },
      {
        id: 2,
        src: '/butiks/womenClothing/MAXCo/2.jpg',
        alt: 'MAXCo',
      },
      {
        id: 3,
        src: '/butiks/womenClothing/MAXCo/3.jpg',
        alt: 'MAXCo',
      },
    ],
    description1:
      'MAX&Co (макс энд ко) - итальянский бренд модной женской одежды.',
    description2:
      'Коллекции MAX&Co современны, изящны и выдержанны в надежном балансе между модой и вечными гардеробными ценностями. Бренд признан достойной "младшей сестрой" марки Max Mara. Благодаря демократичной цене и высокому качеству, MAX&Co стал популярен.',
    description3: '',
    floor: '2 этаж',
    tel: '+7 (928) 199 07 90',
    telUrl: '89281990790',
    instagram: '',
  },
  {
    id: id++,
    category: 'womenClothing',
    url: 'WeekendMaxMara',
    logo: '/butiks/womenClothing/WeekendMaxMara/logo.png',
    image: [
      {
        id: 1,
        src: '/butiks/womenClothing/WeekendMaxMara/1.jpg',
        alt: 'WeekendMaxMara',
      },
      {
        id: 2,
        src: '/butiks/womenClothing/WeekendMaxMara/2.jpg',
        alt: 'WeekendMaxMara',
      },
      {
        id: 3,
        src: '/butiks/womenClothing/WeekendMaxMara/3.jpg',
        alt: 'WeekendMaxMara',
      },
      {
        id: 4,
        src: '/butiks/womenClothing/WeekendMaxMara/4.jpg',
        alt: 'WeekendMaxMara',
      },
    ],
    description1:
      'Weekend Max Mara – это линейка Max Mara Group, которая воплощает целый стиль жизни.',
    description2:
      'Этот бренд появился в 1984 году как коллекция одежды для отдыха на свежем воздухе, идеально подходящей для уикендов (как с самого начала подсказывало выбранное название); все эти годы он быстро развивался, пока не обрел собственную индивидуальность и не стал таким, каким мы знаем его сегодня.',
    description3: '',
    floor: '2 этаж',
    tel: '+7 (928) 193 40 03',
    telUrl: '89281934003',
    instagram: '',
  },
  {
    id: id++,
    category: 'shoesAndBags',
    url: 'Dance',
    logo: '/butiks/shoesAndBags/Dance/logo.png',
    image: [
      {
        id: 1,
        src: '/butiks/shoesAndBags/Dance/1.jpg',
        alt: 'Dance',
      },
    ],
    description1:
      'Dance культ - в магазине представлена танцевальная обувь ведущих российских производителей фирм Aida и Eckse.',
    description2:
      'А также, одежда, аксессуары ,ткани производства Англия, Италия и Корея и фурнитура для пошива танцевальной одежды.',
    description3: '',
    floor: '2 этаж',
    tel: '+7 (989) 120 37 77',
    telUrl: '89891203777',
    instagram: '',
  },
  {
    id: id++,
    category: 'clocks',
    url: 'ZOTTY',
    logo: '/butiks/clocks/ZOTTY/logo.png',
    image: [
      {
        id: 1,
        src: '/butiks/clocks/ZOTTY/1n.webp',
        alt: 'ZOTTY',
      },
      {
        id: 2,
        src: '/butiks/clocks/ZOTTY/2n.webp',
        alt: 'ZOTTY',
      },
      {
        id: 3,
        src: '/butiks/clocks/ZOTTY/3nn.webp',
        alt: 'ZOTTY',
      },
      {
        id: 4,
        src: '/butiks/clocks/ZOTTY/4n.webp',
        alt: 'ZOTTY',
      },
      {
        id: 5,
        src: '/butiks/clocks/ZOTTY/5nn.webp',
        alt: 'ZOTTY',
      },
      {
        id: 6,
        src: '/butiks/clocks/ZOTTY/6nn.webp',
        alt: 'ZOTTY',
      },
      {
        id: 7,
        src: '/butiks/clocks/ZOTTY/7n.webp',
        alt: 'ZOTTY',
      },
      {
        id: 8,
        src: '/butiks/clocks/ZOTTY/8n.webp',
        alt: 'ZOTTY',
      },
      {
        id: 9,
        src: '/butiks/clocks/ZOTTY/9n.webp',
        alt: 'ZOTTY',
      },
    ],
    description1:
      'Бутик Дома Ювелирной Моды ZOTTY в ТРК Сити Центр, это потрясающая коллекция украшений итальянских ювелирных брендов.',
    description2:
      'Золотое кружево FerriFirenze, брутальный Zankan для настоящих мужчин, шёлковые кольца CASHMERE, необычные оттенки золота от Annamaria Cammilli, крупное и яркое серебро Fraleone, это лишь небольшая часть украшений, представленных в бутике Дома Ювелирной Моды ZOTTY. Вы найдёте здесь любимый комплект на каждый день, подберёте изюминку для ювелирного гардероба и особое украшение, достойное передать Ваши чувства любимому человеку.',
    description3: '',
    floor: '1 этаж',
    tel: '',
    telUrl: '',
    instagram: '',
  },
  {
    id: id++,
    category: 'womenClothing',
    url: 'Fresh',
    logo: '/butiks/womenClothing/Fresh/logo.png',
    image: [
      {
        id: 1,
        src: '/butiks/womenClothing/Fresh/1.jpg',
        alt: 'Fresh',
      },
      {
        id: 2,
        src: '/butiks/womenClothing/Fresh/2.jpg',
        alt: 'Fresh',
      },
    ],
    description1: 'Бутик Женской одежды Итальянских и Турецких марок',
    description2: '',
    description3: '',
    floor: '3 этаж',
    tel: '+7 988 244 07 43',
    telUrl: '89882440743',
    instagram: '',
  },
  {
    id: id++,
    category: 'womenClothing',
    url: 'Guess',
    logo: '/butiks/womenClothing/Guess/logo.jpg',
    image: [
      {
        id: 1,
        src: '/butiks/loaderImg.png',
        alt: 'Guess',
      },
    ],
    description1:
      'Guess — культовый американский бренд, созданный в 1981 году четырьмя французами — братьями Марчиано. Влюбившись в Лос-Анджелес во время отдыха, они решили переехать в США и основали модную марку, которая сделала из джинсов — рабочей одежды — тренд и предмет роскоши, выпустив облегающую модель Marylin, первый хит бренда.',
    description2:
      'Guess объединил голливудский шик и европейскую элегантность, а звёздные кампании с Клаудией Шиффер, Летицией Каста, Наоми Кэмпбелл и другими сделали глэм-эстетику от Guess известной на весь мир. Сегодня бренд с узнаваемым треугольным лого верен себе и выпускает мужские, женские и детские коллекции одежды, обуви и аксессуаров для тех, кто хочет выглядеть эффектно и неотразимо.',
    description3: '',
    floor: '2 этаж',
    tel: '+7 967 663 99 95',
    telUrl: '89676639995',
    instagram: '',
  },
  {
    id: id++,
    category: 'interior',
    url: 'Evergreen',
    logo: '/butiks/interior/Evergreen/logo1.png',
    image: [
      {
        id: 1,
        src: '/butiks/interior/Evergreen/1.jpg',
        alt: 'Evergreen',
      },
      {
        id: 2,
        src: '/butiks/interior/Evergreen/2.jpg',
        alt: 'Evergreen',
      },
      {
        id: 3,
        src: '/butiks/interior/Evergreen/3.jpg',
        alt: 'Evergreen',
      },
    ],
    description1: 'Новая локация в ТРК «СИТИ ЦЕНТР» — Evergreen 🪴',
    description2:
      'Букеты и композиции, фитостены, озеленение интерьеров, стильные кашпо и растения для любых пространств. Здесь каждая деталь создана для того, чтобы наполнять жизнь гармонией и эстетикой!',
    description3: 'Evergreen ждёт вас на 3 этаже 🤍',
    floor: '3 этаж',
    tel: '+7 918 940 70 70',
    telUrl: '89189407070',
    instagram: '',
  },
  {
    id: id++,
    category: 'kafeAndRestoran',
    url: 'MiuCity',
    logo: '/butiks/kafe/MiuCity/logo1.png',
    image: [
      {
        id: 1,
        src: '/butiks/kafe/MiuCity/1.jpg',
        alt: 'MiuCity',
      },
      {
        id: 2,
        src: '/butiks/kafe/MiuCity/2.jpg',
        alt: 'MiuCity',
      },
      {
        id: 3,
        src: '/butiks/kafe/MiuCity/3.jpg',
        alt: 'MiuCity',
      },
      {
        id: 4,
        src: '/butiks/kafe/MiuCity/4.jpg',
        alt: 'MiuCity',
      },
      {
        id: 5,
        src: '/butiks/kafe/MiuCity/5.jpg',
        alt: 'MiuCity',
      },
      {
        id: 6,
        src: '/butiks/kafe/MiuCity/6.jpg',
        alt: 'MiuCity',
      },
      {
        id: 7,
        src: '/butiks/kafe/MiuCity/7.jpg',
        alt: 'MiuCity',
      },
    ],
    description1: 'MIU CITY - место для тех, кому важно проявляться',
    description2:
      'Напитки и гастрономия в яркой упаковке - как продолжение тебя, твоего стиля и твоих желаний. В меню – specialty кофе, в сочетании с сырами, культовые сэндвичи и вино. Гастролавка со всего мира - испанский хамон, салями, альпийские сыры и конечно игристое вино.',
    description3: 'MIU CITY - деталь, которая может сказать о тебе больше.',
    floor: '1 этаж',
    tel: '+7 918 120 00 13',
    telUrl: '89181200013',
    instagram: '',
  },
  {
    id: 'vipavenue',
    category: 'womenClothing',
    url: 'vipavenue',
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
  },
  {
    id: id++,
    category: 'womenClothing',
    url: 'Dexterior',
    logo: '/butiks/womenClothing/Dexterior/logo.jpg',
    image: [
      {
        id: 1,
        src: '/butiks/womenClothing/Dexterior/1.jpg',
        alt: 'Dexterior',
      },
    ],
    description1:
      'Бренд создаёт коллекции для женщин, которые ценят элегантность, утончённость и комфорт. В каждой вещи — ДНК высокой моды и энергия современной Италии.',
    description2:
      'Приходите за образами, в которых легко быть собой — уверенной и стильной.',
    description3: '',
    floor: '2 этаж',
    tel: '+7 918 64 77 770',
    telUrl: '89186477770',
    instagram: '',
  },
  {
    id: id++,
    category: 'services',
    url: 'ChistoBlisto',
    logo: '/services/ChistoBlisto/logo.jpg',
    image: [
      {
        id: 1,
        src: '/butiks/loaderImgSmall.png',
        alt: 'ChistoBlisto',
      },
    ],
    description1:
      'Компания Chisto Blisto специализируется на профессиональной реставрации и ремонте кожаных изделий.',
    description2:
      'Мы используем качественные материалы, современные технологии и аккуратный ручной труд. Наши мастера бережно восстанавливают обувь, сумки и аксессуары, возвращая им внешний вид и продлевая срок службы.',
    description3:
      'Мы ценим доверие клиентов и стремимся к результату, который действительно радует.',
    floor: '2 этаж',
    tel: '+7 918 191-68-93',
    telUrl: '89181916893',
    instagram: 'https://t.me/chistoblisto_masterskaya',
  },
  {
    id: id++,
    category: 'interior',
    url: 'Togas',
    logo: '/butiks/interior/Togas/logo.png',
    image: [
      {
        id: 1,
        src: '/butiks/interior/Togas/1.jpg',
        alt: 'Togas',
      },
      {
        id: 2,
        src: '/butiks/interior/Togas/2.jpg',
        alt: 'Togas',
      },
      {
        id: 3,
        src: '/butiks/interior/Togas/3.jpg',
        alt: 'Togas',
      },
      {
        id: 4,
        src: '/butiks/interior/Togas/4.jpg',
        alt: 'Togas',
      },
      {
        id: 5,
        src: '/butiks/interior/Togas/5.jpg',
        alt: 'Togas',
      },
      {
        id: 6,
        src: '/butiks/interior/Togas/6.jpg',
        alt: 'Togas',
      },
      {
        id: 7,
        src: '/butiks/interior/Togas/7.jpg',
        alt: 'Togas',
      },
      {
        id: 8,
        src: '/butiks/interior/Togas/8.jpg',
        alt: 'Togas',
      },
    ],
    description1:
      'С 1926 года бренд, рожденный в Греции, задаёт стандарты элегантности и безупречного качества в мире текстиля и интерьерных решений. Бутики Togas представлены в самых изысканных уголках мира, оставаясь символом утончённого вкуса и традиций высокого стиля.',
    description2:
      'Каждая коллекция — результат уникальных разработок, внимания к деталям и многолетнего опыта. Постельное бельё, текстиль, мебель, аксессуары и одежда от Togas — это воплощение философии жизни, где красота, комфорт и совершенство находятся в идеальном балансе.',
    description3: ' ',
    floor: '2 этаж',
    tel: '+7 800 555 37 71',
    telUrl: '88005553771',
    instagram: 'https://web.telegram.org/k/#@togasofficial',
  },

  //Удаленные
  // {
  //   id: id++,
  //   category: 'womenClothing',
  //   url: 'Papaya',
  //   logo: '/butiks/womenClothing/Papaya/logo.png',
  //   image: [
  //     {
  //       id: 1,
  //       src: '/butiks/womenClothing/Papaya/1n.jpg',
  //       alt: 'Papaya',
  //     },
  //     {
  //       id: 2,
  //       src: '/butiks/womenClothing/Papaya/2n.jpg',
  //       alt: 'Papaya',
  //     },
  //     {
  //       id: 3,
  //       src: '/butiks/womenClothing/Papaya/3n.jpg',
  //       alt: 'Papaya',
  //     },
  //     {
  //       id: 4,
  //       src: '/butiks/womenClothing/Papaya/4n.jpg',
  //       alt: 'Papaya',
  //     },
  //     {
  //       id: 5,
  //       src: '/butiks/womenClothing/Papaya/5n.jpg',
  //       alt: 'Papaya',
  //     },
  //     {
  //       id: 6,
  //       src: '/butiks/womenClothing/Papaya/6n.jpg',
  //       alt: 'Papaya',
  //     },
  //   ],
  //   description1:
  //     'PAPAYA - российский бренд одежды родом из солнечного региона России - Краснодара.',
  //   description2:
  //     'Главная идея, ставшая основой бренда - создавать многогранный, качественный и продуманный гардероб-конструктор, избегая наполнения лишними вещами.',
  //   description3:
  //     'Гардероб, который будет радовать свою обладательницу многие годы благодаря отличному крою, универсальному дизайну, созданному с использованием лучших импортных материалов. Основу коллекций составляют женственные и изящные вещи, выполненные в монохромных оттенках и сдержанной цветовой палитре.',
  //   floor: '2 этаж',
  //   tel: '+7 918 009-30-57 ',
  //   telUrl: '89180093057 ',
  //   instagram: '',
  // },
  // {
  //   id: id++,
  //   category: "glasses giftsAndBook",
  //   url: "IqMac",
  //   logo: "/butiks/glasses/IqMac/logo.png",
  //   image: [
  //     {
  //       id: 1,
  //       src: "/butiks/glasses/IqMac/1n.jpg",
  //       alt: "IqMac",
  //     },
  //     {
  //       id: 2,
  //       src: "/butiks/glasses/IqMac/2n.jpg",
  //       alt: "IqMac",
  //     },
  //   ],
  //   description1: `Техника будущего уже сейчас.`,
  //   description2: `Магазин IQ-MAC в своих стенах дает вам возможность провести время с пользой и приобрести качественную технику. Сотрудники магазина оперативно ответят на ваши вопросы и помогут сделать правильный выбор.`,
  //   floor: "1 этаж",
  //   tel: "+7 989 815 55 55",
  //   telUrl: "89898155555",
  //   instagram: "",
  // },
  // {
  //   id: id++,
  //   category: 'womenClothing',
  //   url: 'Sisal',
  //   logo: '/butiks/womenClothing/Sisal/logo.png',
  //   image: [
  //     {
  //       id: 1,
  //       src: '/butiks/womenClothing/Sisal/1n.jpg',
  //       alt: 'Sisal',
  //     },
  //     {
  //       id: 2,
  //       src: '/butiks/womenClothing/Sisal/2n.jpg',
  //       alt: 'Sisal',
  //     },
  //     {
  //       id: 3,
  //       src: '/butiks/womenClothing/Sisal/3n.jpg',
  //       alt: 'Sisal',
  //     },
  //   ],
  //   description1: `Бутик SIZAL  представляет российского дизайнера - Викторию Андреянову, чья эстетика OVERSIZE МИНИМАЛИЗМА С 1992 ГОДА СОБИРАЕТ СВОИХ АДЕПТОВ ПО ВСЕМУ МИРУ.`,
  //   description2: `Также мы представляем Caterina Leman - это европейский бренд швейцарского качеста.`,
  //   floor: '2 этаж',
  //   tel: '+7 967 30 50 209',
  //   telUrl: '89673050209',
  //   instagram: '',
  // },
  // {
  //   id: id++,
  //   category: 'manClothing',
  //   url: 'Excelsior',
  //   logo: '/butiks/menClothing/Excelsior/logo.png',
  //   image: [
  //     {
  //       id: 1,
  //       src: '/butiks/menClothing/Excelsior/1.jpg',
  //       alt: 'Excelsior',
  //     },
  //     {
  //       id: 2,
  //       src: '/butiks/menClothing/Excelsior/2.jpg',
  //       alt: 'Excelsior',
  //     },
  //   ],
  //   description1:
  //     'Бутик EXCELSIOR является самым крупным ритейлером люксовых брендов на Юге России. На сегодняшний день, компания EXCELSIOR FASHION GROUP  включает в себя 11 бутиков, в которых представлено более 150 ведущих мировых брендов, такие как: ALEXANDER MCQUEEN, BURBERRY, CELINE, DOLCE & GABBANA, FENDI, PRADA, RED VALENTINO, STEFANO RICCI, SANTONI, VALENTINO.',
  //   floor: '2 этаж',
  //   tel: '+7 861 015 45 97',
  //   telUrl: '88610154597',
  //   instagram: 'excelsior_city',
  // },
  // {
  //   id: 3,
  //   category: 'womenClothing',
  //   url: 'Modus-fashion',
  //   logo: '/butiks/womenClothing/Modus-fashion/logo.png',
  //   image: [
  //     {
  //       id: 1,
  //       src: '/butiks/womenClothing/Modus-fashion/1.jpg',
  //       alt: 'Modus-fashion',
  //     },
  //     {
  //       id: 2,
  //       src: '/butiks/womenClothing/Modus-fashion/2.jpg',
  //       alt: 'Modus-fashion',
  //     },
  //   ],
  //   description1:
  //     'Modus Fashion — бренд эксклюзивной одежды для женщин с собственным производством и уникальным дизайном. Бренд создан для уверенных в себе женщин, следящих за модными тенденциями и любительниц быть в центре внимания.',
  //   floor: '3 этаж',
  //   tel: '+7 938 411 55 03',
  //   telUrl: '89384115503',
  //   instagram: 'modus_fashion.krd',
  // },
  // {
  //   id: 7,
  //   category: 'womenClothing',
  //   url: 'Versace-jeans',
  //   logo: '/butiks/womenClothing/Versace-jeans/logo.png',
  //   image: [
  //     {
  //       id: 1,
  //       src: '/butiks/womenClothing/Versace-jeans/1.jpg',
  //       alt: 'Versace-jeans',
  //     },
  //     {
  //       id: 2,
  //       src: '/butiks/womenClothing/Versace-jeans/2.jpg',
  //       alt: 'Versace-jeans',
  //     },
  //     {
  //       id: 3,
  //       src: '/butiks/womenClothing/Versace-jeans/3.jpg',
  //       alt: 'Versace-jeans',
  //     },
  //     {
  //       id: 4,
  //       src: '/butiks/womenClothing/Versace-jeans/4.jpg',
  //       alt: 'Versace-jeans',
  //     },
  //   ],
  //   description1:
  //     'Премиальный итальянский бренд Versace специализируется на производстве одежды, нижнего белья, обуви, аксессуаров и парфюмерии. Регулярные обновление ассортимента и профессиональная работа консультантов сделали бутик Versace Collection местом притяжения поклонников этого бренда.',
  //   floor: '2 этаж',
  //   tel: '+7 909 460 35 88',
  //   telUrl: '89094603588',
  //   instagram: 'v_с_krd',
  // },
  // {
  //   id: 15,
  //   category: 'manClothing',
  //   url: 'cosmo-store',
  //   logo: '/butiks/womenClothing/COSMO-STORE/logo.png',
  //   image: [
  //     {
  //       id: 1,
  //       src: '/butiks/womenClothing/COSMO-STORE/1.jpg',
  //       alt: 'cosmo-store',
  //     },
  //     {
  //       id: 2,
  //       src: '/butiks/womenClothing/COSMO-STORE/2.jpg',
  //       alt: 'cosmo-store',
  //     },
  //     {
  //       id: 3,
  //       src: '/butiks/womenClothing/COSMO-STORE/3.jpg',
  //       alt: 'cosmo-store',
  //     },
  //     {
  //       id: 4,
  //       src: '/butiks/womenClothing/COSMO-STORE/4.jpg',
  //       alt: 'cosmo-store',
  //     },
  //     {
  //       id: 5,
  //       src: '/butiks/womenClothing/COSMO-STORE/5.jpg',
  //       alt: 'cosmo-store',
  //     },
  //     {
  //       id: 6,
  //       src: '/butiks/womenClothing/COSMO-STORE/6.jpg',
  //       alt: 'cosmo-store',
  //     },
  //     {
  //       id: 7,
  //       src: '/butiks/womenClothing/COSMO-STORE/7.jpg',
  //       alt: 'cosmo-store',
  //     },
  //   ],
  //   description1:
  //     'В бутике COSMO STORE  представлены эксклюзивные бренды, такие как Diesel, Vic Matie, C.P. Company, Fred Perry, MOMA, Edwin, Blauer, Birkenstock, а также успешно развивающиеся молодые российские бренды Atelier18, SHU.',
  //   description2:
  //     'Компания COSMO STORE остается верной трем главным принципам: высокое качество продукта, актуальный европейский стиль и уникальный ассортимент.',
  //   floor: '2 этаж',
  //   tel: '+7 861 213 47 31',
  //   telUrl: '88612134731',
  //   instagram: 'cosmostore.krd',
  // },
  // {
  //   id: id++,
  //   category: "interior",
  //   url: "Raffinat",
  //   logo: "/butiks/interior/Raffinat/logo.png",
  //   image: [
  //     {
  //       id: 1,
  //       src: "/butiks/interior/Raffinat/1.jpg",
  //       alt: "Raffinat",
  //     },
  //     {
  //       id: 2,
  //       src: "/butiks/interior/Raffinat/2.jpg",
  //       alt: "Raffinat",
  //     },
  //     {
  //       id: 3,
  //       src: "/butiks/interior/Raffinat/3.jpg",
  //       alt: "Raffinat",
  //     },
  //     {
  //       id: 4,
  //       src: "/butiks/interior/Raffinat/4.jpg",
  //       alt: "Raffinat",
  //     },
  //   ],
  //   description1: `Бутик “RAFFINAT” существует на рынке уже 12 лет, чтобы каждый человек смог окружить себя изысканными предметами интерьера Европейского качества. В бутике представлены такие бренды, как: Yves Delorme Paris, Cote Noire, Fansy, Rudolf Kampf, Garnier-Thiebaut.`,
  //   floor: "3 этаж",
  //   tel: "+7 964 901 92 21",
  //   telUrl: "89649019221",
  //   instagram: "raffinatcity",
  // },
  // {
  //   id: 16,
  //   category: 'manClothing',
  //   url: 'Cerruti 1881',
  //   logo: '/butiks/menClothing/Cerruti1881/logo.png',
  //   image: [
  //     {
  //       id: 1,
  //       src: '/butiks/menClothing/Cerruti1881/1.jpg',
  //       alt: 'Cerruti 1881',
  //     },
  //     {
  //       id: 2,
  //       src: '/butiks/menClothing/Cerruti1881/2.jpg',
  //       alt: 'Cerruti 1881',
  //     },
  //   ],
  //   description1:
  //     'Cerruti – это итальянский дом моды, основателем которого является легендарный кутюрье Нино Черрути. Итальянский бренд одежды специализируется на выпуске одежды и аксессуаров. Cerruti-символ высокого итальянского качества и настоящего европейского шика.',
  //   floor: '2 этаж',
  //   tel: '+7 953 090 67 23',
  //   telUrl: '89530906723',
  //   instagram: 'cerruti_1881_krd',
  // },
  // {
  //   id: 20,
  //   category: 'manClothing',
  //   url: 'Paul-shark',
  //   logo: '/butiks/womenClothing/Paul-shark/logo.png',
  //   image: [
  //     {
  //       id: 1,
  //       src: '/butiks/womenClothing/Paul-shark/1.jpg',
  //       alt: 'Paul-shark',
  //     },
  //     {
  //       id: 2,
  //       src: '/butiks/womenClothing/Paul-shark/2.jpg',
  //       alt: 'Paul-shark',
  //     },
  //     {
  //       id: 3,
  //       src: '/butiks/womenClothing/Paul-shark/3.jpg',
  //       alt: 'Paul-shark',
  //     },
  //     {
  //       id: 4,
  //       src: '/butiks/womenClothing/Paul-shark/4.jpg',
  //       alt: 'Paul-shark',
  //     },
  //     {
  //       id: 5,
  //       src: '/butiks/womenClothing/Paul-shark/5.jpg',
  //       alt: 'Paul-shark',
  //     },
  //     {
  //       id: 6,
  //       src: '/butiks/womenClothing/Paul-shark/6.jpg',
  //       alt: 'Paul-shark',
  //     },
  //     {
  //       id: 7,
  //       src: '/butiks/womenClothing/Paul-shark/7.jpg',
  //       alt: 'Paul-shark',
  //     },
  //     {
  //       id: 8,
  //       src: '/butiks/womenClothing/Paul-shark/8.jpg',
  //       alt: 'Paul-shark',
  //     },
  //   ],
  //   description1:
  //     'Paul&Shark – известный итальянский бренд, одежды, обуви и аксессуаров в стиле casual. Главные источники вдохновения бренда — морская стихия и яхтенный спорт. Для изготовления одежды используются натуральные материалы: лён, хлопок, кожа, шелк, мериносовая шерсть.',
  //   description2:
  //     'Разработка и применение новейших технологий обеспечивает функциональность и высокое качество изделий с логотипом Paul&Shark.',
  //   floor: '2 этаж',
  //   tel: '+7 861 213 47 25',
  //   telUrl: '88612134725',
  //   instagram: 'paulandshark',
  // },
  // {
  //   id: id++,
  //   category: 'womenClothing',
  //   url: 'KubanDesignStore',
  //   logo: '/butiks/womenClothing/KubanDesignStore/logo.png',
  //   image: [
  //     {
  //       id: 1,
  //       src: '/butiks/womenClothing/KubanDesignStore/1n.jpg',
  //       alt: 'KubanDesignStore',
  //     },
  //     {
  //       id: 2,
  //       src: '/butiks/womenClothing/KubanDesignStore/2n.jpg',
  //       alt: 'KubanDesignStore',
  //     },
  //     {
  //       id: 3,
  //       src: '/butiks/womenClothing/KubanDesignStore/3n.jpg',
  //       alt: 'KubanDesignStore',
  //     },
  //     {
  //       id: 4,
  //       src: '/butiks/womenClothing/KubanDesignStore/4n.jpg',
  //       alt: 'KubanDesignStore',
  //     },
  //     {
  //       id: 5,
  //       src: '/butiks/womenClothing/KubanDesignStore/5n.jpg',
  //       alt: 'KubanDesignStore',
  //     },
  //   ],
  //   description1: ` `,
  //   floor: '2 этаж',
  //   tel: '',
  //   telUrl: '',
  //   instagram: '',
  // },
  // {
  //   id: id++,
  //   category: "womenClothing",
  //   url: "SOLine",
  //   logo: "/butiks/womenClothing/SOLine/logo.png",
  //   image: [
  //     {
  //       id: 1,
  //       src: "/butiks/womenClothing/SOLine/1n.jpg",
  //       alt: "SOLine",
  //     },
  //     {
  //       id: 2,
  //       src: "/butiks/womenClothing/SOLine/2n.jpg",
  //       alt: "SOLine",
  //     },
  //     {
  //       id: 3,
  //       src: "/butiks/womenClothing/SOLine/3n.jpg",
  //       alt: "SOLine",
  //     },
  //   ],
  //   description1: ` `,
  //   floor: "2 этаж",
  //   tel: "",
  //   telUrl: "",
  //   instagram: "",
  // },
  // {
  //   id: 21,
  //   category: 'manClothing',
  //   url: 'Versace-jeans',
  //   logo: '/butiks/womenClothing/Versace-jeans/logo.png',
  //   image: [
  //     {
  //       id: 1,
  //       src: '/butiks/womenClothing/Versace-jeans/1.jpg',
  //       alt: 'Versace-jeans',
  //     },
  //     {
  //       id: 2,
  //       src: '/butiks/womenClothing/Versace-jeans/2.jpg',
  //       alt: 'Versace-jeans',
  //     },
  //     {
  //       id: 3,
  //       src: '/butiks/womenClothing/Versace-jeans/3.jpg',
  //       alt: 'Versace-jeans',
  //     },
  //     {
  //       id: 4,
  //       src: '/butiks/womenClothing/Versace-jeans/4.jpg',
  //       alt: 'Versace-jeans',
  //     },
  //   ],
  //   description1:
  //     'Премиальный итальянский бренд Versace специализируется на производстве одежды, нижнего белья, обуви, аксессуаров и парфюмерии. Регулярные обновление ассортимента и профессиональная работа консультантов сделали бутик Versace Collection местом притяжения поклонников этого бренда.',
  //   floor: '2 этаж',
  //   tel: '+7 909 460 35 88',
  //   telUrl: '89094603588',
  //   instagram: 'v_с_krd',
  // },
  // {
  //   id: 22,
  //   category: 'manClothing',
  //   url: 'Bogner',
  //   logo: '/butiks/womenClothing/Bogner/logo.png',
  //   image: [
  //     {
  //       id: 1,
  //       src: '/butiks/womenClothing/Bogner/1.jpg',
  //       alt: 'Bogner',
  //     },
  //     {
  //       id: 2,
  //       src: '/butiks/womenClothing/Bogner/2.jpg',
  //       alt: 'Bogner',
  //     },
  //     {
  //       id: 3,
  //       src: '/butiks/womenClothing/Bogner/3.jpg',
  //       alt: 'Bogner',
  //     },
  //     {
  //       id: 4,
  //       src: '/butiks/womenClothing/Bogner/4.jpg',
  //       alt: 'Bogner',
  //     },
  //   ],
  //   description1:
  //     'Спортивная мода премиального класса. Непревзойденное сочетание атлетического шика, функциональности и стиля.',
  //   description2:
  //     'Бренд BOGNER – это высочайшее качество, стиль, непохожий на другие, создаваемый теми, кто любит и понимает, что такое активный образ жизни, последние модные тенденции, и придерживается высокого уровня жизни.',
  //   floor: '2 этаж',
  //   tel: '+7 8612 13 47 27',
  //   telUrl: '88612134727',
  //   instagram: 'bogner_krasnodar',
  // },
  // {
  //   id: 23,
  //   category: 'manClothing',
  //   url: 'Replay',
  //   logo: '/butiks/womenClothing/Replay/logo.png',
  //   image: [
  //     {
  //       id: 1,
  //       src: '/butiks/womenClothing/Replay/1.jpg',
  //       alt: 'Replay',
  //     },
  //     {
  //       id: 2,
  //       src: '/butiks/womenClothing/Replay/2.jpg',
  //       alt: 'Replay',
  //     },
  //   ],
  //   description1:
  //     'Replay – итальянский бренд одежды, обуви и аксессуаров. Продукция ориентирована на поклонников яркого и молодежного стиля в духе casual. Компания выпускает футболки, блузы и толстовки, джемперы и платья, комбинируя различные материалы: шелк и хлопок, джерси и кашемир. Особое место в ассортименте отводится одежде из денима. Ее окрашивают применением сверхустойчивых красителей, по технологии, экономящей воду в рамках защиты окружающей среды. Под маркой Replay покупателям также предлагаются солнцезащитные очки, аксессуары и обувь, парфюмерия и украшения.',
  //   floor: '2 этаж',
  //   tel: '+7 861 213 47 92',
  //   telUrl: '88612134792',
  //   instagram: 'replay.mf',
  // },
  // {
  //   id: id++,
  //   category: "shoesAndBags glasses",
  //   url: "PanChemodan",
  //   logo: "/butiks/clocks/PanChemodan/logo.png",
  //   image: [
  //     {
  //       id: 1,
  //       src: "/butiks/clocks/PanChemodan/1n.jpg",
  //       alt: "PanChemodan",
  //     },
  //     {
  //       id: 2,
  //       src: "/butiks/clocks/PanChemodan/2n.jpg",
  //       alt: "PanChemodan",
  //     },
  //     {
  //       id: 3,
  //       src: "/butiks/clocks/PanChemodan/3n.jpg",
  //       alt: "PanChemodan",
  //     },
  //     {
  //       id: 4,
  //       src: "/butiks/clocks/PanChemodan/4n.jpg",
  //       alt: "PanChemodan",
  //     },
  //   ],
  //   description1:
  //     "Сеть современных бутиков «Пан Чемодан» специализируется на аксессуарах для женщин и мужчин. В ассортименте представлены чемоданы, дамские и мужские сумки, бумажники, ремни, зонты и перчатки известных мировых брендов.",
  //   description2:
  //     "Торговые марки, представленные в бутиках, тщательно выбираются среди известных европейских дизайнеров, чтобы каждый нашел себе что-то по вкусу.",
  //   floor: "2 этаж",
  //   tel: "+7 495 280 16 40",
  //   telUrl: "84952801640",
  //   instagram: "panchemodan",
  // },
  // {
  //   id: 24,
  //   category: 'manClothing',
  //   url: 'Energie',
  //   logo: '/butiks/womenClothing/Energie/logo.png',
  //   image: [
  //     {
  //       id: 1,
  //       src: '/butiks/womenClothing/Energie/1.jpg',
  //       alt: 'Energie',
  //     },
  //     {
  //       id: 2,
  //       src: '/butiks/womenClothing/Energie/2.jpg',
  //       alt: 'Energie',
  //     },
  //   ],
  //   description1: 'В бутике ENERGIE представлен женский бренд Miss Sixty.',
  //   description2:
  //     'Miss Sixty — это сочетание сексуальной, жизнерадостной современной одежды и утонченности. Каждый сезон очаровательная смесь культур и идей характеризует коллекции одежды Miss Sixty, которой присущи чувственная женственность и дерзкий дизайн.',
  //   floor: '2 этаж',
  //   tel: '+7 861 213 47 67',
  //   telUrl: '88612134767',
  //   instagram: 'energie_citycentre_',
  // },
  // {
  //   id: 26,
  //   category: 'manClothing',
  //   url: 'PP',
  //   logo: '/butiks/womenClothing/PP/logo.png',
  //   image: [
  //     {
  //       id: 1,
  //       src: '/butiks/womenClothing/PP/1.jpg',
  //       alt: 'PP',
  //     },
  //     {
  //       id: 2,
  //       src: '/butiks/womenClothing/PP/2.jpg',
  //       alt: 'PP',
  //     },
  //   ],
  //   description1:
  //     'PHILIPP PLEIN – немецкий бренд, специализирующийся на производстве одежды, обуви и аксессуаров. Эстетика PHILIPP PLEIN в заклепках, шипах и черепах. Отличительной особенностью бренда является использование в коллекциях принтов в виде черепа.',
  //   floor: '2 этаж',
  //   tel: '+7 988 243 70 00',
  //   telUrl: '89882437000',
  //   instagram: 'plein_shop_',
  // },
  // {
  //   id: 50,
  //   category: 'shoesAndBags',
  //   url: 'cosmo-store',
  //   logo: '/butiks/womenClothing/COSMO-STORE/logo.png',
  //   image: [
  //     {
  //       id: 1,
  //       src: '/butiks/womenClothing/COSMO-STORE/1.jpg',
  //       alt: 'cosmo-store',
  //     },
  //     {
  //       id: 2,
  //       src: '/butiks/womenClothing/COSMO-STORE/2.jpg',
  //       alt: 'cosmo-store',
  //     },
  //     {
  //       id: 3,
  //       src: '/butiks/womenClothing/COSMO-STORE/3.jpg',
  //       alt: 'cosmo-store',
  //     },
  //     {
  //       id: 4,
  //       src: '/butiks/womenClothing/COSMO-STORE/4.jpg',
  //       alt: 'cosmo-store',
  //     },
  //     {
  //       id: 5,
  //       src: '/butiks/womenClothing/COSMO-STORE/5.jpg',
  //       alt: 'cosmo-store',
  //     },
  //     {
  //       id: 6,
  //       src: '/butiks/womenClothing/COSMO-STORE/6.jpg',
  //       alt: 'cosmo-store',
  //     },
  //     {
  //       id: 7,
  //       src: '/butiks/womenClothing/COSMO-STORE/7.jpg',
  //       alt: 'cosmo-store',
  //     },
  //   ],
  //   description1:
  //     'В бутике COSMO STORE  представлены эксклюзивные бренды, такие как Diesel, Vic Matie, C.P. Company, Fred Perry, MOMA, Edwin, Blauer, Birkenstock, а также успешно развивающиеся молодые российские бренды Atelier18, SHU.',
  //   description2:
  //     'Компания COSMO STORE остается верной трем главным принципам: высокое качество продукта, актуальный европейский стиль и уникальный ассортимент.',
  //   floor: '2 этаж',
  //   tel: '+7 861 213 47 31',
  //   telUrl: '88612134731',
  //   instagram: 'cosmostore.krd',
  // },
  // {
  //   id: 64,
  //   category: 'giftsAndBook',
  //   url: 'BookLab',
  //   logo: '/butiks/children/BookLab/logo.png',
  //   image: [
  //     {
  //       id: 1,
  //       src: '/butiks/children/BookLab/1.jpg',
  //       alt: 'BookLab',
  //     },
  //     {
  //       id: 2,
  //       src: '/butiks/children/BookLab/2.jpg',
  //       alt: 'BookLab',
  //     },
  //   ],
  //   description1:
  //     '“КНИЖНЫЙ ЛАБИРИНТ” — сеть книжных магазинов, предлагающих широкий ассортимент книг любой тематики, канцтоваров и товаров детского творчества. ',
  //   description2:
  //     'В магазине  регулярно проводятся различные мероприятия и акции, благодаря которым посетители могут познакомиться с известными авторами, приобрести книжные новинки и просто пообщаться друг с другом.',
  //   floor: '3 этаж',
  //   tel: '+7 861 299 71 83',
  //   telUrl: '88612134741',
  //   instagram: 'knizhnylabirintcity',
  // },
  // {
  //   id: id++,
  //   category: 'giftsAndBook',
  //   url: 'BookLab',
  //   logo: '/butiks/children/BookLab/logo.png',
  //   image: [
  //     {
  //       id: 1,
  //       src: '/butiks/children/BookLab/1n.jpg',
  //       alt: 'BookLab',
  //     },
  //     {
  //       id: 2,
  //       src: '/butiks/children/BookLab/2n.jpg',
  //       alt: 'BookLab',
  //     },
  //     {
  //       id: 3,
  //       src: '/butiks/children/BookLab/3n.jpg',
  //       alt: 'BookLab',
  //     },
  //     {
  //       id: 4,
  //       src: '/butiks/children/BookLab/4n.jpg',
  //       alt: 'BookLab',
  //     },
  //     {
  //       id: 5,
  //       src: '/butiks/children/BookLab/5n.jpg',
  //       alt: 'BookLab',
  //     },
  //   ],
  //   description1:
  //     '“КНИЖНЫЙ ЛАБИРИНТ” — сеть книжных магазинов, предлагающих широкий ассортимент книг любой тематики, канцтоваров и товаров детского творчества. ',
  //   description2:
  //     'В магазине  регулярно проводятся различные мероприятия и акции, благодаря которым посетители могут познакомиться с известными авторами, приобрести книжные новинки и просто пообщаться друг с другом.',
  //   floor: '3 этаж',
  //   tel: '+7 861 299 71 83',
  //   telUrl: '88612134741',
  //   instagram: 'knizhnylabirintcity',
  // },
  // {
  //   id: 71,
  //   category: 'gameCategory',
  //   url: 'BookLab',
  //   logo: '/butiks/children/BookLab/logo.png',
  //   image: [
  //     {
  //       id: 1,
  //       src: '/butiks/children/BookLab/1.jpg',
  //       alt: 'BookLab',
  //     },
  //     {
  //       id: 2,
  //       src: '/butiks/children/BookLab/2.jpg',
  //       alt: 'BookLab',
  //     },
  //   ],
  //   description1:
  //     '“КНИЖНЫЙ ЛАБИРИНТ” — сеть книжных магазинов, предлагающих широкий ассортимент книг любой тематики, канцтоваров и товаров детского творчества. ',
  //   description2:
  //     'В магазине  регулярно проводятся различные мероприятия и акции, благодаря которым посетители могут познакомиться с известными авторами, приобрести книжные новинки и просто пообщаться друг с другом.',
  //   floor: '3 этаж',
  //   tel: '+7 861 299 71 83',
  //   telUrl: '88612134741',
  //   instagram: 'knizhnylabirintcity',
  // },
  // {
  //   id: 35,
  //   category: 'underwear',
  //   url: 'XO',
  //   logo: '/butiks/menClothing/XO/logo.png',
  //   image: [
  //     {
  //       id: 1,
  //       src: '/butiks/menClothing/XO/1.jpg',
  //       alt: 'XO',
  //     },
  //     {
  //       id: 2,
  //       src: '/butiks/menClothing/XO/2.jpg',
  //       alt: 'XO',
  //     },
  //   ],
  //   description1:
  //     'Сеть магазинов мужского белья X.O. — это философия оригинального стиля и исключительного вкуса.',
  //   description2:
  //     'В магазинах сети X.O. представлено более 30 всемирно известных марок мужского белья и домашней одежды: Ermenegildo Zegna, Roberto Cavalli, Bikkembergs, Moschino, Derek Rose, Falke, Hanro, Dsquared2, La Perla, Emporio Armani, Hugo Boss, Dolce&Gabbana, Guess, Bruno Banani, Olaf Benz, Calida, Zimmerli, Jockey.',
  //   floor: '2 этаж',
  //   tel: '+7 861 213 47 23',
  //   telUrl: '88612134723',
  //   instagram: 'xo_man_ru',
  // },
  // {
  //   id: 36,
  //   category: 'underwear',
  //   url: 'Wolford',
  //   logo: '/butiks/womenClothing/Wolford/logo.png',
  //   image: [
  //     {
  //       id: 1,
  //       src: '/butiks/womenClothing/Wolford/1.jpg',
  //       alt: 'Wolford',
  //     },
  //     {
  //       id: 2,
  //       src: '/butiks/womenClothing/Wolford/2.jpg',
  //       alt: 'Wolford',
  //     },
  //     {
  //       id: 3,
  //       src: '/butiks/womenClothing/Wolford/3.jpg',
  //       alt: 'Wolford',
  //     },
  //     {
  //       id: 4,
  //       src: '/butiks/womenClothing/Wolford/4.jpg',
  //       alt: 'Wolford',
  //     },
  //     {
  //       id: 5,
  //       src: '/butiks/womenClothing/Wolford/5.jpg',
  //       alt: 'Wolford',
  //     },
  //     {
  //       id: 6,
  //       src: '/butiks/womenClothing/Wolford/6.jpg',
  //       alt: 'Wolford',
  //     },
  //   ],
  //   description1:
  //     'Компания Wolford – это всемирно известный бренд в сегменте доступной роскоши, один из лидеров индустрии. Wolford использует в производстве только лучшие ткани, которые облегают женское тело, украшая его и подчеркивая силуэт. Wolford – это всегда идеальное качество, легкий уход, комфорт в использовании, особенное ощущение тканей на коже и безупречный крой.',
  //   floor: '1 этаж',
  //   tel: '+7 861 213 47 77',
  //   telUrl: '88612134767',
  //   instagram: 'wolford_krasnodar',
  // },
  // {
  //   id: 30,
  //   category: 'children',
  //   url: 'MetroBaby',
  //   logo: '/butiks/children/MetroBaby/logo.png',
  //   image: [
  //     {
  //       id: 1,
  //       src: '/butiks/children/MetroBaby/1.jpg',
  //       alt: 'MetroBaby',
  //     },
  //     {
  //       id: 2,
  //       src: '/butiks/children/MetroBaby/2.jpg',
  //       alt: 'MetroBaby',
  //     },
  //   ],
  //   description1: 'В MetroBaby представлена одежда для детей от 1 до 16. ',
  //   description2:
  //     'В бутике вы найдете такие бренды, как: il Gufo, Diesel, No.21, Stella Mc Cartney, Replay, Marcelo Burlon, Antony Morato, CDFD, Sonia Rykiel. MetroBaby — это история про мам и дочек, про пап и сыночков, про братьев, про сестер. ',
  //   floor: '3 этаж',
  //   tel: '+7 861 213 47 41',
  //   telUrl: '88612134741',
  //   instagram: 'metrofashion.ru',
  // },
  // {
  //   id: 47,
  //   category: 'clocks',
  //   url: 'Antikvariat',
  //   logo: '/butiks/clocks/Antikvariat/logo.png',
  //   image: [
  //     {
  //       id: 1,
  //       src: '/butiks/clocks/Antikvariat/1.jpg',
  //       alt: 'Antikvariat',
  //     },
  //   ],
  //   description1:
  //     'В магазине «Антиквариат» представлены антикварные товары и предметы роскоши. Старинные иконы, ювелирные изделия, золотые монеты, бронза, фарфор и многое другое.',
  //   floor: '2 этаж',
  //   tel: '+7 967 300 11 18',
  //   telUrl: '89673001118',
  // },
  // {
  //   id: 51,
  //   category: 'shoesAndBags',
  //   url: 'Baldini',
  //   logo: '/butiks/shoesAndBags/Baldini/logo.png',
  //   image: [
  //     {
  //       id: 1,
  //       src: '/butiks/shoesAndBags/Baldini/1.jpg',
  //       alt: 'Baldini',
  //     },
  //     {
  //       id: 2,
  //       src: '/butiks/shoesAndBags/Baldini/2.jpg',
  //       alt: 'Baldini',
  //     },
  //     {
  //       id: 3,
  //       src: '/butiks/shoesAndBags/Baldini/3.jpg',
  //       alt: 'Baldini',
  //     },
  //   ],
  //   description1:
  //     'Baldinini – это один из крупнейших и успешных итальянских брендов, специализирующихся на производстве высококачественной обуви преимущественно ручной работы.',
  //   floor: '2 этаж',
  //   tel: '+7 861 213 47 65',
  //   telUrl: '88612134765',
  //   instagram: 'baldinini_krd',
  // },
  // {
  //   id: 61,
  //   category: 'giftsAndBook',
  //   url: 'Шипы и Розы',
  //   logo: '/butiks/giftsAndBook/ThornsAndRoses/logo.png',
  //   image: [
  //     {
  //       id: 1,
  //       src: '/butiks/giftsAndBook/ThornsAndRoses/1.jpg',
  //       alt: 'ThornsAndRoses',
  //     },
  //     {
  //       id: 2,
  //       src: '/butiks/giftsAndBook/ThornsAndRoses/2.jpg',
  //       alt: 'ThornsAndRoses',
  //     },
  //     {
  //       id: 3,
  //       src: '/butiks/giftsAndBook/ThornsAndRoses/3.jpg',
  //       alt: 'ThornsAndRoses',
  //     },
  //     {
  //       id: 4,
  //       src: '/butiks/giftsAndBook/ThornsAndRoses/4.jpg',
  //       alt: 'ThornsAndRoses',
  //     },
  //     {
  //       id: 5,
  //       src: '/butiks/giftsAndBook/ThornsAndRoses/5.jpg',
  //       alt: 'ThornsAndRoses',
  //       instagram: 'shipirozi',
  //     },
  //   ],
  //   description1:
  //     '«Шипы и Розы» — магазин живых цветов, подарков и аксессуаров. В магазине «Шипы и Розы» представлен широкий выбор авторских композиций, всегда свежих и оригинальных букетов.',
  //   floor: '1 этаж',
  //   tel: '+7 928 411 30 31',
  //   telUrl: '89284113031',
  // },
  // {
  //   id: 46,
  //   category: 'glasses',
  //   url: 'APhone',
  //   logo: '/butiks/clocks/APhone/logo.png',
  //   image: [
  //     {
  //       id: 1,
  //       src: '/butiks/clocks/APhone/1.jpg',
  //       alt: 'APhone',
  //     },
  //     {
  //       id: 2,
  //       src: '/butiks/clocks/APhone/2.jpg',
  //       alt: 'APhone',
  //     },
  //   ],
  //   description1:
  //     'В насыщенном рынке мобильных аксессуаров торговая марка «Apple» предлагает по-настоящему качественные фирменные и эксклюзивные товары для защиты мобильных устройств и придания им нового оригинального облика: кейсы и защитные стекла для для iphone, браслеты для iwatch и устройства для подключения и зарядки.',
  //   description2:
  //     'Приоритет салона — это предложение широкого выбора от фирменных аксессуаров высокого качества: «Apple», «Pitaka», «UAG» до эксклюзивных лимитированных изделий из кожи крокодила, карбона и драгоценных металлов.',
  //   floor: '2 этаж',
  //   tel: '+7 988 369 09 63',
  //   telUrl: '89883690963',
  //   instagram: 'a.phone',
  // },
  // {
  //   id: 52,
  //   category: 'shoesAndBags',
  //   url: 'Michael-kors',
  //   logo: '/butiks/womenClothing/Michael-kors/logo.png',
  //   image: [
  //     {
  //       id: 1,
  //       src: '/butiks/womenClothing/Michael-kors/1.jpg',
  //       alt: 'Michael-kors',
  //     },
  //     {
  //       id: 2,
  //       src: '/butiks/womenClothing/Michael-kors/2.jpg',
  //       alt: 'Michael-kors',
  //     },
  //     {
  //       id: 3,
  //       src: '/butiks/womenClothing/Michael-kors/3.jpg',
  //       alt: 'Michael-kors',
  //     },
  //     {
  //       id: 4,
  //       src: '/butiks/womenClothing/Michael-kors/4.jpg',
  //       alt: 'Michael-kors',
  //     },
  //     {
  //       id: 5,
  //       src: '/butiks/womenClothing/Michael-kors/5.jpg',
  //       alt: 'Michael-kors',
  //     },
  //     {
  //       id: 6,
  //       src: '/butiks/womenClothing/Michael-kors/6.jpg',
  //       alt: 'Michael-kors',
  //     },
  //     {
  //       id: 7,
  //       src: '/butiks/womenClothing/Michael-kors/7.jpg',
  //       alt: 'Michael-kors',
  //     },
  //     {
  //       id: 8,
  //       src: '/butiks/womenClothing/Michael-kors/5.jpg',
  //       alt: 'Michael-kors',
  //     },
  //     {
  //       id: 9,
  //       src: '/butiks/womenClothing/Michael-kors/6.jpg',
  //       alt: 'Michael-kors',
  //     },
  //     {
  //       id: 10,
  //       src: '/butiks/womenClothing/Michael-kors/7.jpg',
  //       alt: 'Michael-kors',
  //     },
  //     {
  //       id: 11,
  //       src: '/butiks/womenClothing/Michael-kors/5.jpg',
  //       alt: 'Michael-kors',
  //     },
  //     {
  //       id: 12,
  //       src: '/butiks/womenClothing/Michael-kors/6.jpg',
  //       alt: 'Michael-kors',
  //     },
  //     {
  //       id: 13,
  //       src: '/butiks/womenClothing/Michael-kors/7.jpg',
  //       alt: 'Michael-kors',
  //     },
  //   ],
  //   description1:
  //     'Michael Kors является американским модным брендом, который специализируется на производстве одежды, парфюмерии и аксессуаров.',
  //   description2:
  //     'При создании одежды и аксессуаров под маркой Michael Kors, дизайнер руководствуется желанием покупателей ощутить удовлетворение от покупки на эмоциональном уровне. В изделиях марки Michael Kors гармоничным образом сочетаются американское удобство и европейский шарм. Это универсальные вещи для тех, кто на первое место ставит индивидуальный стиль и качество на уровне деталей.',
  //   floor: '2 этаж',
  //   tel: '+7 861 298 08 46',
  //   telUrl: '88612980846',
  //   instagram: 'michaelkors',
  // },
  // {
  //   id: 59,
  //   category: 'interior',
  //   url: 'DecorBurgua',
  //   logo: '/butiks/clocks/DecorBurgua/logo.png',
  //   image: [
  //     {
  //       id: 1,
  //       src: '/butiks/clocks/DecorBurgua/1.jpg',
  //       alt: 'DecorBurgua',
  //     },
  //     {
  //       id: 2,
  //       src: '/butiks/clocks/DecorBurgua/2.jpg',
  //       alt: 'DecorBurgua',
  //     },
  //   ],
  //   description1:
  //     'В салоне «ДЕКОР БУРЖУА» представлены такие бренды, как элитный испанский фарфор Lladro, итальянский фарфор Richard Ginori, ювелирные украшения Gucci, Pasquale Bruni, Ponte Veccio, Mario Panelli, La Nordica, JV, Lisa Colpo, Garavelli, Piero Milano, предметы интерьера и сервировки 4 Nero, Mario Cioni, Faberge.',
  //   description2:
  //     'Элитный фарфор, хрусталь ручной работы — символ достатка и хорошего вкуса, поэтому эти предметы достойны украшать самые дорогие апартаменты.',
  //   floor: '1 этаж',
  //   tel: '+7 918 144 23 07',
  //   telUrl: '89181442307',
  //   instagram: 'decor_burgua',
  // },
  // {
  //   id: 19,
  //   category: 'children',
  //   url: 'LapinHouse',
  //   logo: '/butiks/children/LapinHouse/logo.png',
  //   image: [
  //     {
  //       id: 1,
  //       src: '/butiks/children/LapinHouse/1.jpg',
  //       alt: 'LapinHouse',
  //     },
  //     {
  //       id: 2,
  //       src: '/butiks/children/LapinHouse/2.jpg',
  //       alt: 'LapinHouse',
  //     },
  //     {
  //       id: 3,
  //       src: '/butiks/children/LapinHouse/3.jpg',
  //       alt: 'LapinHouse',
  //     },
  //     {
  //       id: 4,
  //       src: '/butiks/children/LapinHouse/4.jpg',
  //       alt: 'LapinHouse',
  //     },
  //   ],
  //   description1:
  //     'Бутик Lapin House — это эстетическое совершенство и качество. В фирменном магазине представлена  одежда и аксессуары для мальчиков и девочек от 0 до 14 лет. Вещи, купленные в Lapin House, становятся любимыми и остаются в памяти ребенка.',
  //   description2: 'Lapin House – одежда для самых красивых детей в мире!',
  //   floor: '3 этаж',
  //   tel: '+7 928 433 30 37',
  //   telUrl: '89284333037',
  //   instagram: 'lapinhousekrd',
  // },
  // {
  //   id: 20,
  //   category: 'children gameCategory giftsAndBook',
  //   url: 'BookLab',
  //   logo: '/butiks/children/BookLab/logo.png',
  //   image: [
  //     {
  //       id: 1,
  //       src: '/butiks/children/BookLab/1.jpg',
  //       alt: 'BookLab',
  //     },
  //     {
  //       id: 2,
  //       src: '/butiks/children/BookLab/2.jpg',
  //       alt: 'BookLab',
  //     },
  //   ],
  //   description1:
  //     '“КНИЖНЫЙ ЛАБИРИНТ” — сеть книжных магазинов, предлагающих широкий ассортимент книг любой тематики, канцтоваров и товаров детского творчества. ',
  //   description2:
  //     'В магазине  регулярно проводятся различные мероприятия и акции, благодаря которым посетители могут познакомиться с известными авторами, приобрести книжные новинки и просто пообщаться друг с другом.',
  //   floor: '3 этаж',
  //   tel: '+7 861 299 71 83',
  //   telUrl: '88612134741',
  //   instagram: 'knizhnylabirintcity',
  // },

  // {
  //   id: 72,
  //   category: 'gameCategory',
  //   url: 'Igratoriya',
  //   logo: '/services/Igratoriya/logo.png',
  //   image: [
  //     {
  //       id: 1,
  //       src: '/services/Igratoriya/1.jpg',
  //       alt: 'Igratoriya',
  //     },
  //     {
  //       id: 2,
  //       src: '/services/Igratoriya/2.jpg',
  //       alt: 'Igratoriya',
  //     },
  //     {
  //       id: 3,
  //       src: '/services/Igratoriya/3.jpg',
  //       alt: 'Igratoriya',
  //     },
  //     {
  //       id: 4,
  //       src: '/services/Igratoriya/4.jpg',
  //       alt: 'Igratoriya',
  //     },
  //     {
  //       id: 5,
  //       src: '/services/Igratoriya/5.jpg',
  //       alt: 'Igratoriya',
  //     },
  //     {
  //       id: 6,
  //       src: '/services/Igratoriya/6.jpg',
  //       alt: 'Igratoriya',
  //     },
  //   ],
  //   description1:
  //     '«Игратория» — это сеть современных детских игровых центров для игры и творчества. Здесь есть все, что так нравится детям: Игровой лабиринт, горки, бассейн с шариками, батут, а так же самые интересные игрушки. Во всех центрах «Игратория» работают педагоги- аниматоры, которые активно играют с детками. Они знают 1000 игр и сумеют развеселить даже самого сурового малыша.',
  //   description2:
  //     'Для наших маленьких гостей мы ежедневно проводим увлекательные мастер-классы, мини-диско, зарядку и множество подвижных игр. Каждые выходные мы приглашаем Ваших малышей принять участие в программе «Выходные с Играторией», где ребят ждет бесплатный аквагрим, квест, игровая программа, творческий мастер класс и много других веселых сюрпризов. Все активности входят в стоимость посещения и не требуют дополнительной оплаты! А еще в «Игратории» можно отметить самый веселый и яркий день рождения, который точно понравится имениннику и запомниться всем гостям.',
  //   description3: 'Встречаемся в Игратории!',
  //   floor: '3 этаж',
  //   tel: '+7 988 470 19 63',
  //   telUrl: '89884701963',
  //   instagram: 'igratoria',
  // },
  // {
  //   id: 43,
  //   category: 'children',
  //   url: 'ИГРАТОРИЯ',
  //   logo: '/services/Igratoriya/logo.png',
  //   image: [
  //     {
  //       id: 1,
  //       src: '/services/Igratoriya/1.jpg',
  //       alt: 'Igratoriya',
  //     },
  //     {
  //       id: 2,
  //       src: '/services/Igratoriya/2.jpg',
  //       alt: 'Igratoriya',
  //     },
  //     {
  //       id: 3,
  //       src: '/services/Igratoriya/3.jpg',
  //       alt: 'Igratoriya',
  //     },
  //     {
  //       id: 4,
  //       src: '/services/Igratoriya/4.jpg',
  //       alt: 'Igratoriya',
  //     },
  //     {
  //       id: 5,
  //       src: '/services/Igratoriya/5.jpg',
  //       alt: 'Igratoriya',
  //     },
  //     {
  //       id: 6,
  //       src: '/services/Igratoriya/6.jpg',
  //       alt: 'Igratoriya',
  //     },
  //   ],
  //   description1:
  //     '«Игратория» — это сеть современных детских игровых центров для игры и творчества. Здесь есть все, что так нравится детям: Игровой лабиринт, горки, бассейн с шариками, батут, а так же самые интересные игрушки. Во всех центрах «Игратория» работают педагоги- аниматоры, которые активно играют с детками. Они знают 1000 игр и сумеют развеселить даже самого сурового малыша.',
  //   description2:
  //     'Для наших маленьких гостей мы ежедневно проводим увлекательные мастер-классы, мини-диско, зарядку и множество подвижных игр. Каждые выходные мы приглашаем Ваших малышей принять участие в программе «Выходные с Играторией», где ребят ждет бесплатный аквагрим, квест, игровая программа, творческий мастер класс и много других веселых сюрпризов. Все активности входят в стоимость посещения и не требуют дополнительной оплаты! А еще в «Игратории» можно отметить самый веселый и яркий день рождения, который точно понравится имениннику и запомниться всем гостям.',
  //   description3: 'Встречаемся в Игратории!',
  //   floor: '3 этаж',
  //   tel: '+7 988 470 19 63',
  //   telUrl: '89884701963',
  //   instagram: 'igratoria',
  // },
  // {
  //   id: id++,
  //   category: "children",
  //   url: "HouseChildrenModa",
  //   logo: "/butiks/children/HouseChildrenModa/logo.png",
  //   image: [
  //     {
  //       id: 1,
  //       src: "/butiks/children/HouseChildrenModa/1.jpg",
  //       alt: "HouseChildrenModa",
  //     },
  //     {
  //       id: 2,
  //       src: "/butiks/children/HouseChildrenModa/2.jpg",
  //       alt: "HouseChildrenModa",
  //     },
  //     {
  //       id: 3,
  //       src: "/butiks/children/HouseChildrenModa/3.jpg",
  //       alt: "HouseChildrenModa",
  //     },
  //     {
  //       id: 4,
  //       src: "/butiks/children/HouseChildrenModa/4.jpg",
  //       alt: "HouseChildrenModa",
  //     },
  //     {
  //       id: 5,
  //       src: "/butiks/children/HouseChildrenModa/5.jpg",
  //       alt: "HouseChildrenModa",
  //     },
  //   ],
  //   description1:
  //     "В фирменном магазине «Дом детской моды» представлена одежда и аксессуары для мальчиков и девочек от 0 до 14. Вся одежда произведена из натуральных тканей для того, чтобы дети чувствовали себя комфортно. Бутик представляет детскую одежду премиальных брендов: Burberry, Dior, Dolce & Gabbana, Sonia Rykel и других известных марок.",
  //   floor: "3 этаж",
  //   tel: "+7 861 213 47 57",
  //   telUrl: "88612134757",
  //   instagram: "dom_detskoi_modi",
  // },
  // {
  //   id: id++,
  //   category: "clocks interior giftsAndBook",
  //   url: "DecorBurgua",
  //   logo: "/butiks/clocks/DecorBurgua/logo.png",
  //   image: [
  //     {
  //       id: 1,
  //       src: "/butiks/clocks/DecorBurgua/1n.jpg",
  //       alt: "DecorBurgua",
  //     },
  //     {
  //       id: 2,
  //       src: "/butiks/clocks/DecorBurgua/2n.jpg",
  //       alt: "DecorBurgua",
  //     },
  //     {
  //       id: 3,
  //       src: "/butiks/clocks/DecorBurgua/3n.jpg",
  //       alt: "DecorBurgua",
  //     },
  //     {
  //       id: 4,
  //       src: "/butiks/clocks/DecorBurgua/4n.jpg",
  //       alt: "DecorBurgua",
  //     },
  //   ],
  //   description1:
  //     "В салоне «ДЕКОР БУРЖУА» представлены такие бренды, как элитный испанский фарфор Lladro, итальянский фарфор Richard Ginori, ювелирные украшения Gucci, Pasquale Bruni, Ponte Veccio, Mario Panelli, La Nordica, JV, Lisa Colpo, Garavelli, Piero Milano, предметы интерьера и сервировки 4 Nero, Mario Cioni, Faberge.",
  //   description2:
  //     "Элитный фарфор, хрусталь ручной работы — символ достатка и хорошего вкуса, поэтому эти предметы достойны украшать самые дорогие апартаменты.",
  //   floor: "1 этаж",
  //   tel: "+7 918 144 23 07",
  //   telUrl: "89181442307",
  //   instagram: "decor_burgua",
  // },
  // {
  //   id: 43,
  //   category: 'glasses',
  //   url: 'Mac',
  //   logo: '/butiks/cosmetics/Mac/logo.png',
  //   image: [
  //     {
  //       id: 1,
  //       src: '/butiks/cosmetics/Mac/1.jpg',
  //       alt: 'Mac',
  //     },
  //     {
  //       id: 2,
  //       src: '/butiks/cosmetics/Mac/2.jpg',
  //       alt: 'Mac',
  //     },
  //   ],
  //   description1: `MAC Cosmetics – известный во всём мире косметический бренд, представленый в ТРК «СИТИ ЦЕНТР». M·A·C создает модные тенденции, сотрудничая с талантливыми представителями поп-культуры, искусства и моды. А также ценит разнообразие и индивидуальность, поэтому косметическая продукция предназначена для людей всех возрастов, всех национальностей и всех полов.`,
  //   floor: '1 этаж',
  //   tel: '+7 861 213 47 05',
  //   telUrl: '88612134705',
  //   instagram: 'maccosmeticsrussia',
  // },
  // {
  //   id: 7,
  //   category: 'womenClothing manClothing',
  //   url: 'Replay',
  //   logo: '/butiks/womenClothing/Replay/logo.png',
  //   image: [
  //     {
  //       id: 1,
  //       src: '/butiks/womenClothing/Replay/1.jpg',
  //       alt: 'Replay',
  //     },
  //     {
  //       id: 2,
  //       src: '/butiks/womenClothing/Replay/2.jpg',
  //       alt: 'Replay',
  //     },
  //   ],
  //   description1:
  //     'Replay – итальянский бренд одежды, обуви и аксессуаров. Продукция ориентирована на поклонников яркого и молодежного стиля в духе casual. Компания выпускает футболки, блузы и толстовки, джемперы и платья, комбинируя различные материалы: шелк и хлопок, джерси и кашемир. Особое место в ассортименте отводится одежде из денима. Ее окрашивают применением сверхустойчивых красителей, по технологии, экономящей воду в рамках защиты окружающей среды. Под маркой Replay покупателям также предлагаются солнцезащитные очки, аксессуары и обувь, парфюмерия и украшения.',
  //   floor: '2 этаж',
  //   tel: '+7 861 213 47 92',
  //   telUrl: '88612134792',
  //   instagram: 'replay.mf',
  // },
  // {
  //   id: id++,
  //   category: "manClothing",
  //   url: "Lab",
  //   logo: "/butiks/menClothing/Lab/logo.png",
  //   image: [
  //     {
  //       id: 1,
  //       src: "/butiks/menClothing/Lab/1.jpg",
  //       alt: "Lab",
  //     },
  //     {
  //       id: 2,
  //       src: "/butiks/menClothing/Lab/2.jpg",
  //       alt: "Lab",
  //     },
  //   ],
  //   description1:
  //     "LAB Pal Zileri — бутик брендовой итальянской мужской одежды, в котором представлены такие премиальные марки, как LAB Pal Zileri и Navigare.",
  //   floor: "2 этаж",
  //   tel: "+7 953 090 64 19",
  //   telUrl: "89530906419",
  //   instagram: "lab_pal_zileri",
  // },
  // {
  //   id: 8,
  //   category: 'womenClothing manClothing',
  //   url: 'Energie',
  //   logo: '/butiks/womenClothing/Energie/logo.png',
  //   image: [
  //     {
  //       id: 1,
  //       src: '/butiks/womenClothing/Energie/1.jpg',
  //       alt: 'Energie',
  //     },
  //     {
  //       id: 2,
  //       src: '/butiks/womenClothing/Energie/2.jpg',
  //       alt: 'Energie',
  //     },
  //   ],
  //   description1: 'В бутике ENERGIE представлен женский бренд Miss Sixty.',
  //   description2:
  //     'Miss Sixty — это сочетание сексуальной, жизнерадостной современной одежды и утонченности. Каждый сезон очаровательная смесь культур и идей характеризует коллекции одежды Miss Sixty, которой присущи чувственная женственность и дерзкий дизайн.',
  //   floor: '2 этаж',
  //   tel: '+7 861 213 47 67',
  //   telUrl: '88612134767',
  //   instagram: 'energie_citycentre_',
  // },
  // {
  //   id: id++,
  //   category: 'womenClothing',
  //   url: 'Sisal',
  //   logo: '/butiks/womenClothing/Sisal/logo.png',
  //   image: [
  //     {
  //       id: 1,
  //       src: '/butiks/loaderImg.png',
  //       alt: 'Sisal',
  //     },
  //   ],
  //   description1: `Бутик SIZAL  представляет российского дизайнера - Викторию Андреянову, чья эстетика OVERSIZE МИНИМАЛИЗМА С 1992 ГОДА СОБИРАЕТ СВОИХ АДЕПТОВ ПО ВСЕМУ МИРУ.`,
  //   description2: `Также мы представляем Caterina Leman - это европейский бренд швейцарского качеста.`,
  //   floor: '2 этаж',
  //   tel: '+7 967 30 50 209',
  //   telUrl: '89673050209',
  //   instagram: '',
  // },
  // {
  //   id: id++,
  //   category: "manClothing",
  //   url: "Angelo Nardelli",
  //   logo: "/butiks/menClothing/AngeloNardelli/logo.png",
  //   image: [
  //     {
  //       id: 1,
  //       src: "/butiks/menClothing/AngeloNardelli/1n.jpg",
  //       alt: "Angelo Nardelli",
  //     },
  //     {
  //       id: 2,
  //       src: "/butiks/menClothing/AngeloNardelli/2n.jpg",
  //       alt: "Angelo Nardelli",
  //     },
  //     {
  //       id: 3,
  //       src: "/butiks/menClothing/AngeloNardelli/3n.jpg",
  //       alt: "Angelo Nardelli",
  //     },
  //     {
  //       id: 4,
  //       src: "/butiks/menClothing/AngeloNardelli/4n.jpg",
  //       alt: "Angelo Nardelli",
  //     },
  //   ],
  //   description1:
  //     "ANGELO NARDELLI – итальянский бренд, специализирующийся на производстве мужских костюмов, брюк, пиджаков, сорочек и аксессуаров. Отличительная особенность компании — безукоризненное следование традициям пошива одежды в сочетании с современной обработкой тканей, которая позволяет сделать изделия еще более долговечными.",
  //   description2:
  //     "Стильная классика ANGELO NARDELLI и одежда «на каждый день» отлично подойдут для активных, целеустремленных и уверенных в себе мужчин с безупречным вкусом.",
  //   floor: "2 этаж",
  //   tel: "+7 988 369 68 88",
  //   telUrl: "89883696888",
  //   instagram: "angelonardelli51",
  // },
  // {
  //   id: id++,
  //   category: "manClothing",
  //   url: "Van Laack",
  //   logo: "/butiks/menClothing/vanLaack/logo.png",
  //   image: [
  //     {
  //       id: 1,
  //       src: "/butiks/menClothing/vanLaack/1n.jpg",
  //       alt: "Van Laack",
  //     },
  //     {
  //       id: 2,
  //       src: "/butiks/menClothing/vanLaack/2n.jpg",
  //       alt: "Van Laack",
  //     },
  //     {
  //       id: 3,
  //       src: "/butiks/menClothing/vanLaack/3n.jpg",
  //       alt: "Van Laack",
  //     },
  //     {
  //       id: 4,
  //       src: "/butiks/menClothing/vanLaack/4n.jpg",
  //       alt: "Van Laack",
  //     },
  //   ],
  //   description1:
  //     "Немецкий бренд Van Laack, выпускающий деловую и элегантную одежду класса люкс. Рубашки, брюки, платья, сорочки, блузки от Van Laack — это проявление идеального вкуса!",
  //   floor: "2 этаж",
  //   tel: "+7 861 213 47 16",
  //   telUrl: "88612134716",
  //   instagram: "vanlaack_krd",
  // },
  // {
  //   id: id++,
  //   category: 'womenClothing',
  //   url: 'ElenaMiro',
  //   logo: '/butiks/womenClothing/ElenaMiro/logo.png',
  //   image: [
  //     {
  //       id: 1,
  //       src: '/butiks/womenClothing/ElenaMiro/1n.jpeg',
  //       alt: 'ElenaMiro',
  //     },
  //     {
  //       id: 2,
  //       src: '/butiks/womenClothing/ElenaMiro/2n.jpeg',
  //       alt: 'ElenaMiro',
  //     },
  //     {
  //       id: 3,
  //       src: '/butiks/womenClothing/ElenaMiro/3n.jpeg',
  //       alt: 'ElenaMiro',
  //     },
  //     {
  //       id: 4,
  //       src: '/butiks/womenClothing/ElenaMiro/4n.jpeg',
  //       alt: 'ElenaMiro',
  //     },
  //   ],
  //   description1:
  //     'Elena Miro – премиальный бренд женской одежды и аксессуаров родом из Италии.',
  //   description2:
  //     'В основе ДНК бренда – женственный, элегантный стиль, безупречные выверенные лекала, подчеркивающие все достоинства фигуры, а также инклюзивность и универсальность.',
  //   description3: '',
  //   floor: '2 этаж',
  //   tel: 'elenamiro.ru',
  //   telUrl: 'https://elenamiro.ru/',
  //   instagram: 'https://elenamiro.ru/',
  // },
  //   {
  //   id: id++,
  //   category: 'womenClothing shoesAndBags',
  //   url: 'Karl-Lagerfeld',
  //   logo: '/butiks/womenClothing/KarlLagerfeld/logo.png',
  //   image: [
  //     {
  //       id: 1,
  //       src: '/butiks/womenClothing/KarlLagerfeld/3.jpg',
  //       alt: 'KarlLagerfeld',
  //     },
  //     {
  //       id: 2,
  //       src: '/butiks/womenClothing/KarlLagerfeld/2.jpg',
  //       alt: 'KarlLagerfeld',
  //     },
  //     {
  //       id: 3,
  //       src: '/butiks/womenClothing/KarlLagerfeld/1.jpg',
  //       alt: 'KarlLagerfeld',
  //     },
  //   ],
  //   description1:
  //     'Дух бренда отражает колоссальное наследие и страсть, оставленную маэстро и заложенную в основу ДНК бренда.',
  //   description2:
  //     'Фирменный стиль бренда заключается в смешении парижского шика и рок-н-ролла. Модный дом KARL LAGERFELD выпускает коллекции одежды, обуви и сумок.',
  //   floor: '2 этаж',
  //   tel: '+7 861 298 08 46',
  //   telUrl: '88612980846',
  //   instagram: '',
  // },
  // {
  //   id: id++,
  //   category: 'manClothing',
  //   url: 'NAPAPIJRI',
  //   logo: '/butiks/menClothing/NAPAPIJRI/logo.png',
  //   image: [
  //     {
  //       id: 1,
  //       src: '/butiks/menClothing/NAPAPIJRI/1.jpg',
  //       alt: 'NAPAPIJRI',
  //     },
  //     {
  //       id: 2,
  //       src: '/butiks/menClothing/NAPAPIJRI/2.jpg',
  //       alt: 'NAPAPIJRI',
  //     },
  //     {
  //       id: 3,
  //       src: '/butiks/menClothing/NAPAPIJRI/3.jpg',
  //       alt: 'NAPAPIJRI',
  //     },
  //   ],
  //   description1: `Итальянский бренд Napapijri зародился у подножия горы Монблан. Вдохновением его создательницы стали холодный север и исследователи Арктики. Само название Napapijri — вариация финского слова, которое переводится как «Северный полярный круг». Один из фирменных элементов бренда — флаг Норвегии, самой северной страны Европы, а первым изделием марки стала сумка Bering из вощёного хлопка, названная в честь Витуса Беринга.`,
  //   description2: `Napapijri задумывался как бренд для покорителей вершин. Но сегодня теплейшие куртки-анораки, парки, флисовые толстовки, рюкзаки и сумки бренда носят не только путешественники и спортсмены: бренд полюбился многим и в городских условиях. Поэтому Napapijri соединяет в своих коллекциях outdoor-эстетику и стиль urban. Одежда и обувь от Napapijri подойдут и для повседневной жизни, и для активного отдыха.`,
  //   floor: '2 этаж',
  //   tel: '+7 967 663 99 95',
  //   telUrl: '89676639995',
  //   instagram: '',
  // },
  // {
  //   id: id++,
  //   category: 'manClothing underwear',
  //   url: 'Vilebrequin',
  //   logo: '/butiks/menClothing/Vilebrequin/logo.png',
  //   image: [
  //     {
  //       id: 1,
  //       src: '/butiks/menClothing/Vilebrequin/3.jpg',
  //       alt: 'Vilebrequin',
  //     },
  //     {
  //       id: 2,
  //       src: '/butiks/menClothing/Vilebrequin/4.jpg',
  //       alt: 'Vilebrequin',
  //     },
  //   ],
  //   description1:
  //     '15 октября 2024 года французский бренд пляжной моды Vilebrequin открыл новый магазин в ТРК Сити Центр Краснодар (2 этаж). Это событие стало важным шагом в расширении розничной сети бренда и укреплении его позиций на российском рынке.',
  //   description2:
  //     'Посетители магазина смогут ознакомиться с полным ассортиментом Vilebrequin, включая эксклюзивную капсульную коллекцию Rayures. Особого внимания заслуживает материал, используемый в коллекции — мягкий полиамид с добавлением эластана. Он быстро сохнет и сохраняет форму даже после длительного пребывания в воде, что делает его идеальным для активного пляжного отдыха.',
  //   description3:
  //     'Открытие магазина Vilebrequin в ТРК Сити Центр Краснодар дает жителям и гостям города уникальную возможность приобщиться к элегантному французскому пляжному стилю, воплощенному в коллекции 2024 года.',
  //   floor: '2 этаж',
  //   tel: '',
  //   telUrl: '',
  //   instagram: '',
  // },
  // {
  //   id: id++,
  //   category: 'kafeAndRestoran',
  //   url: 'LoveAndTrufel',
  //   logo: '/butiks/kafe/LoveAndTrufel/logo.png',
  //   image: [
  //     {
  //       id: 1,
  //       src: '/butiks/kafe/LoveAndTrufel/1n.jpg',
  //       alt: 'LoveAndTrufel',
  //     },
  //     {
  //       id: 2,
  //       src: '/butiks/kafe/LoveAndTrufel/2n.jpg',
  //       alt: 'LoveAndTrufel',
  //     },
  //     {
  //       id: 3,
  //       src: '/butiks/kafe/LoveAndTrufel/3n.jpg',
  //       alt: 'LoveAndTrufel',
  //     },
  //     {
  //       id: 4,
  //       src: '/butiks/kafe/LoveAndTrufel/4n.jpg',
  //       alt: 'LoveAndTrufel',
  //     },
  //     {
  //       id: 5,
  //       src: '/butiks/kafe/LoveAndTrufel/5n.jpg',
  //       alt: 'LoveAndTrufel',
  //     },
  //   ],
  //   description1: `Любовь&Трюфель — безукоризненный европейский сервис и безграничная любовь с самых первых минут.`,
  //   description2: `Уникальная концепция, дизайн, выполненный в мягкой палитре приятных глазу оттенков, богатое меню и разнообразная винная карта.`,
  //   description3: `Визитная карточка ресторана — фирменные бриоши по авторским рецептам.`,
  //   floor: '2 этаж',
  //   tel: '+7 928 424 42 42',
  //   telUrl: '89284244242',
  //   instagram: '',
  //   video: '/butiks/kafe/LoveAndTrufel/video2.mp4',
  // },
];
