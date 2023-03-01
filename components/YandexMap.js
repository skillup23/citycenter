import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const YandexMap = () => (
  <div className="map">
    <YMaps>
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
