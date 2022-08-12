import React from 'react';
import Abilities from './components/organisms/Abilities';
import Hero from './components/organisms/Hero/Hero';
import Process from './components/organisms/Process';
import Services from './components/organisms/Services';
import CallToAction from '../../components/organisms/CallToAction';
import {
  StyledAbiliesWrapper,
  StyledExpierenceWrapper,
  StyledHeroContainer,
  StyledHomePage,
  StyledProcessContainer,
  StyledServicesWrapper,
} from './HomePage.style';
import Experience from './components/organisms/Experience/Experience';

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

      <StyledExpierenceWrapper>
        <Experience />
      </StyledExpierenceWrapper>
    </StyledHomePage>
  );
};

export default HomePage;
