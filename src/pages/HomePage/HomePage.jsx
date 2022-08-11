import React from 'react';
import Hero from './components/organisms/Hero/Hero';
import Process from './components/organisms/Process';
import Services from './components/organisms/Services/Services';
import {
  StyledHeroContainer,
  StyledHomePage,
  StyledProcessContainer,
  StyledServicesWrapper,
} from './HomePage.style';

const HomePage = () => {
  return (
    <StyledHomePage>
      <StyledHeroContainer>
        <Hero />
      </StyledHeroContainer>
      <StyledServicesWrapper>
        <Services />
      </StyledServicesWrapper>
      <StyledProcessContainer>
        <Process />
      </StyledProcessContainer>
    </StyledHomePage>
  );
};

export default HomePage;
