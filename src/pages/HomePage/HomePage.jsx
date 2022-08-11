import React from 'react';
import Hero from './components/organisms/Hero/Hero';
import Services from './components/organisms/Services/Services';
import {
  StyledHeroContainer,
  StyledHomePage,
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
    </StyledHomePage>
  );
};

export default HomePage;
