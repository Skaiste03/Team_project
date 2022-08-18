import { useState } from 'react';
import {
  StyledMaps,
  StyledMapsComponent,
  StyledMapsContainer,
} from './Maps.style';
import contactBg from '../../../../assets/images/contact-bg.jpg';

import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import MapMarker from '../MapMarker';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: 40.701,
  lng: -73.995,
};

const options = {
  mapId: '75339764bd754f8',
  disableDefaultUI: true,
  clickableIcons: false,
};

const Maps = () => {
  const [selected, setSelected] = useState(false);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
  });

  return (
    <StyledMaps>
      <StyledMapsContainer>
        <StyledMapsComponent>
          {isLoaded && (
            <GoogleMap
              zoom={13}
              center={center}
              options={options}
              mapContainerStyle={containerStyle}
            >
              <Marker
                position={center}
                onClick={() => setSelected(!selected)}
              />

              {selected && (
                <InfoWindow
                  position={center}
                  onCloseClick={() => setSelected(false)}
                >
                  <MapMarker />
                </InfoWindow>
              )}
            </GoogleMap>
          )}
        </StyledMapsComponent>
      </StyledMapsContainer>
      <img src={contactBg} alt={'contactBg'} />
    </StyledMaps>
  );
};

export default Maps;
