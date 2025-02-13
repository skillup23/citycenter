import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const YandexMap = () => (
  <div className="map">
    <YMaps
      query={{ apikey: '512911d1-c285-41eb-9c9e-b0b85de92905', lang: 'ru_RU' }}
    >
      <Map
        defaultState={{
          center: [45.001269, 38.961937],
          zoom: 17,
          controls: ['zoomControl', 'fullscreenControl'],
        }}
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

    <style jsx>{`
      .map {
        margin-top: 0px;
      }
    `}</style>
  </div>
);

export default YandexMap;
