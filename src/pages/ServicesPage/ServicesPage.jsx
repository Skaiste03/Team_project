import React from 'react';
import { SetyledServicesPage } from './ServicesPage.style';
import StyledWrapper from '../../assets/styles/StyledWrapper';
import Services from './components/Services';
import HowWorks from './components/HowWorks';

const ServicesPage = () => {
  return (
    <SetyledServicesPage>
      <StyledWrapper></StyledWrapper>

      <StyledWrapper theme={'grey'}>
        <Services />
      </StyledWrapper>

      <StyledWrapper>
        <HowWorks />
      </StyledWrapper>
    </SetyledServicesPage>
  );
};

export default ServicesPage;
