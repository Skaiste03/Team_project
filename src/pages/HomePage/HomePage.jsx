import React from 'react';
import Hero from './components/organisms/Hero/Hero';
import { StyledHeroContainer, StyledHomePage } from './HomePage.style';

const HomePage = () => {
  return (
    <StyledHomePage>
      <StyledHeroContainer>
        <Hero />
      </StyledHeroContainer>
    </StyledHomePage>
  );
};

export default HomePage;
