import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { useEffect, useRef, useState } from 'react';

const MAPS_LINK = 'https://yandex.ru/maps/?pt=38.96194,45.0015&z=17&l=map';

// API Яндекс.Карт весит ~700 КБ, поэтому карта подгружается,
// только когда до неё остаётся 300 px прокрутки
const YandexMap = () => {
  const boxRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '300px 0px' },
    );
    if (boxRef.current) observer.observe(boxRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="map" ref={boxRef}>
      {visible ? (
        <YMaps
          query={{ apikey: '512911d1-c285-41eb-9c9e-b0b85de92905', lang: 'ru_RU' }}
        >
          <Map
            defaultState={{
              center: [45.001269, 38.961937],
              zoom: 17,
              controls: ['zoomControl', 'fullscreenControl'],
            }}
            width="100%"
            height="500px"
            className="yaMapMain"
            modules={['control.ZoomControl', 'control.FullscreenControl']}
          >
            <Placemark
              defaultGeometry={[45.0015, 38.96194]}
              properties={{
                iconCaption: 'ул. Индустриальная, 2',
              }}
            />
          </Map>
        </YMaps>
      ) : (
        <a
          href={MAPS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="h-[500px] w-full flex items-center justify-center border-2 border-zinc-300 text-xl md:text-2xl hover:bg-white hover:text-black transition-colors"
        >
          Открыть в Яндекс Картах
        </a>
      )}

      <style jsx>{`
        .map {
          margin-top: 0px;
        }

        :global(.yaMapMain) {
          width: 100% !important;
        }
      `}</style>
    </div>
  );
};

export default YandexMap;
