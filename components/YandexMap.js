import { YMaps, Map } from "@pbe/react-yandex-maps";

const YandexMap = () => (
  <div className='map'>
    <YMaps>
      <Map
        defaultState={{
          center: [45.001269, 38.961937],
          zoom: 17,
          controls: ["zoomControl", "fullscreenControl"],
        }}
        width='65vw'
        height='500px'
        modules={["control.ZoomControl", "control.FullscreenControl"]}
      >
        {/* <Placemark
          defaultGeometry={[45.001269, 38.961937]}
          properties={{
            iconCaption: "ул. Индустриальная, 2",
          }}
        /> */}
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
