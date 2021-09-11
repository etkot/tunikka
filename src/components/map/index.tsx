import React, { FC, useEffect } from 'react';
import L, { LatLngTuple } from 'leaflet';
import { MapContainer, TileLayer, ZoomControl, Marker, Circle } from 'react-leaflet';
import { useCtx } from '../../context/context';
import './map.scss';

const center: LatLngTuple = [61.48081, 23.81468];

const tunikkaIcon = (): L.DivIcon => {
  const iconWidth = 15;
  const iconHeight = 15;
  const iconSize = [iconWidth, iconHeight];

  // const html = ReactDOMServer.renderToString(<CircleIcon className='marker-icon' />);
  const options: Record<string, unknown> = {
    className: `marker`,
    html: '',
    iconSize,
  };
  return L.divIcon(options);
};

const Map: FC = () => {
  const { tunikka } = useCtx();

  useEffect(() => {
    console.log(tunikka);
  }, [tunikka]);

  return (
    <div className='map'>
      <MapContainer center={center} zoom={12} zoomControl={false} scrollWheelZoom={true}>
        <TileLayer url='https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png' />
        <ZoomControl position='bottomright' />

        {tunikka !== null ? (
          <Marker key='tunikka' position={[tunikka.loc.latitude, tunikka.loc.longitude]} icon={tunikkaIcon()}>
            {/* <Circle center={[tunikka.loc.latitude, tunikka.loc.longitude]} fillColor='#ffffff' radius={10} /> */}
          </Marker>
        ) : null}
      </MapContainer>
    </div>
  );
};

export default Map;
