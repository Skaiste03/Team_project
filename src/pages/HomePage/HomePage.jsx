import React from 'react';
import Abilities from './components/organisms/Abilities';
import Hero from './components/organisms/Hero/Hero';
import Process from './components/organisms/Process';
import Services from './components/organisms/Services';
import CallToAction from '../../components/organisms/CallToAction';
import {
  StyledAbiliesWrapper,
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
      <StyledAbiliesWrapper>
        <Abilities />
      </StyledAbiliesWrapper>
      <CallToAction />
    </StyledHomePage>
  );
};

export default HomePage;
