import React from 'react';
import { SetyledServicesPage } from './ServicesPage.style';
import StyledWrapper from '../../assets/styles/StyledWrapper';
import Services from './components/Services';
import HowWorksTop from './components/HowWorksTop';
import StyledContainer from '../../assets/styles/StyledContainer';
import HowWorksBottom from './components/HowWorksBottom';

const ServicesPage = () => {
  return (
    <SetyledServicesPage>
      <StyledWrapper></StyledWrapper>

      <StyledWrapper theme={'grey'}>
        <StyledContainer>
          <Services />
        </StyledContainer>
      </StyledWrapper>

      <StyledWrapper>
        <StyledContainer>
          <HowWorksTop />
        </StyledContainer>
      </StyledWrapper>

      <StyledWrapper>
        <StyledContainer>
          <HowWorksBottom />
        </StyledContainer>
      </StyledWrapper>
    </SetyledServicesPage>
  );
};

export default ServicesPage;
