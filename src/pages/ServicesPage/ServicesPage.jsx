import React from 'react';
import { SetyledServicesPage } from './ServicesPage.style';
import StyledWrapper from '../../assets/styles/StyledWrapper';
import Services from './components/Services';

const ServicesPage = () => {
  return (
    <SetyledServicesPage>
      <StyledWrapper></StyledWrapper>

      {/* <StyledWrapper theme={'grey'}>
        <Services />
      </StyledWrapper> */}
    </SetyledServicesPage>
  );
};

export default ServicesPage;
