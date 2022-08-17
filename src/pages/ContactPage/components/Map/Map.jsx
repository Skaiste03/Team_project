import React from 'react';
import { StyledMap, StyledMapComponent, StyledMapContainer } from './Map.style';
import contactBg from '../../../../assets/images/contact-bg.jpg';

const Map = () => {
  return (
    <StyledMap>
      <StyledMapContainer>
        <StyledMapComponent></StyledMapComponent>
      </StyledMapContainer>
      <img src={contactBg} alt={'contactBg'} />
    </StyledMap>
  );
};

export default Map;
