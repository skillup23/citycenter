import Image from 'next/image';
import { useCallback, useEffect, useRef } from 'react';
import Slider from 'react-slick';

const BANNER_MS = 4000;

// Баннеры 16:9, как тизер. Важное — в безопасной зоне: на низких экранах края обрезаются
const banners = [
  {
    id: 'banner-1',
    src: '/slide_main/banner-1_16x9.webp',
    alt: 'Все люксовые бутики в модном сердце города — ТРК «Сити Центр»',
  },
  {
    id: 'banner-2',
    src: '/slide_main/banner-2_16x9.webp',
    alt: 'Пока все в массмаркете, ты в «Ситицентре»',
  },
];

// React не выводит атрибут muted в серверный HTML, а без него браузер
// может отказать в автозапуске. Поэтому разметка видео — строкой.
// loop не нужен: по кругу идёт слайдер, после тизера — баннеры.
const videoHtml = `
  <video class="w-full h-full object-cover" poster="/video/teaser-poster.jpg"
    muted playsinline preload="metadata" aria-hidden="true">
    <source src="/video/teaser-720.mp4" type="video/mp4" media="(max-width: 767px)">
    <source src="/video/teaser-1080.mp4" type="video/mp4">
  </video>`;

// Первый экран: тизер (доигрывает до конца), затем два баннера по 4 секунды
function HeroSlider() {
  const sliderRef = useRef(null);
  const boxRef = useRef(null);
  const timerRef = useRef(null);
  const reducedMotion = useRef(false);
  const currentRef = useRef(0);

  // attempt — номер повтора: сразу после загрузки страницы активный слайд
  // может быть ещё не отмечен, а первый запуск видео браузер может прервать
  const showSlide = useCallback((index, attempt = 0) => {
    currentRef.current = index;
    clearTimeout(timerRef.current);
    const next = () => sliderRef.current?.slickNext();

    // у копий слайдов для бесконечной прокрутки — класс slick-cloned
    const video =
      index === 0
        ? boxRef.current?.querySelector('.slick-slide.slick-active:not(.slick-cloned) video')
        : null;
    boxRef.current?.querySelectorAll('video').forEach((v) => v !== video && v.pause());
    if (reducedMotion.current) return;

    if (index !== 0) {
      timerRef.current = setTimeout(next, BANNER_MS);
      return;
    }

    const retry = () => {
      if (attempt < 20) {
        setTimeout(() => currentRef.current === 0 && showSlide(0, attempt + 1), 150);
      }
    };
    if (!video) {
      retry();
      return;
    }
    video.onended = next;
    if (attempt === 0) video.currentTime = 0;
    video.play().catch((e) => {
      // Автозапуск запрещён (энергосбережение) — постер 4 секунды, как баннер
      if (e?.name === 'NotAllowedError') {
        timerRef.current = setTimeout(next, BANNER_MS);
        return;
      }
      if (video.paused) retry();
    });
  }, []);

  useEffect(() => {
    reducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    showSlide(0);

    // В фоновой вкладке браузер сам ставит беззвучное видео на паузу.
    // Когда посетитель открывает вкладку, тизер продолжает с того же места.
    const onVisible = () => {
      if (document.visibilityState === 'visible' && currentRef.current === 0) {
        showSlide(0, 1);
      }
    };
    document.addEventListener('visibilitychange', onVisible);

    return () => {
      clearTimeout(timerRef.current);
      document.removeEventListener('visibilitychange', onVisible);
    };
  }, [showSlide]);

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    // Перемотать тизер в начало до анимации, чтобы не мелькал последний кадр
    beforeChange: (current, next) => {
      if (next !== 0) return;
      boxRef.current?.querySelectorAll('video').forEach((v) => {
        v.pause();
        v.currentTime = 0;
      });
    },
    afterChange: showSlide,
    appendDots: (dots) => (
      <div style={{ borderRadius: '10px', padding: '10px' }}>
        <ul style={{ margin: '15px' }}> {dots} </ul>
      </div>
    ),
    customPaging: () => <div className="w-2 h-2 rounded-full bg-gray-200"></div>,
  };

  return (
    // Высота — по тизеру 16:9, но не больше экрана минус шапка и бегущая строка
    <section
      ref={boxRef}
      data-hero-slider
      className="hero-slider relative w-full aspect-video max-h-[calc(100vh-230px)] min-h-[200px] bg-black"
    >
      <Slider ref={sliderRef} {...settings}>
        <div className="relative w-full h-full">
          <div className="absolute inset-0" dangerouslySetInnerHTML={{ __html: videoHtml }} />
        </div>
        {banners.map(({ id, src, alt }) => (
          <div key={id} className="relative w-full h-full">
            {/* eager: слайд за краем экрана иначе не грузится до показа и мелькает пустым */}
            <Image src={src} alt={alt} fill sizes="100vw" loading="eager" className="object-cover" />
          </div>
        ))}
      </Slider>

      <style jsx global>{`
        .hero-slider .slick-slider,
        .hero-slider .slick-list,
        .hero-slider .slick-track,
        .hero-slider .slick-slide,
        .hero-slider .slick-slide > div {
          height: 100%;
        }
        .hero-slider .slick-dots {
          bottom: 0;
        }
      `}</style>
    </section>
  );
}

export default HeroSlider;
