import React from 'react';
import Abilities from './components/organisms/Abilities';
import Hero from './components/organisms/Hero/Hero';
import Process from './components/organisms/Process';
import Services from './components/organisms/Services';
import Experience from './components/organisms/Experience';
import Brands from './components/organisms/Brands';
import CallToAction from '../../components/organisms/CallToAction';
import {
  StyledAbiliesWrapper,
  StyledBrandsContainer,
  StyledExpierenceWrapper,
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

      <StyledExpierenceWrapper>
        <Experience />
      </StyledExpierenceWrapper>

      <StyledBrandsContainer>
        <Brands />
      </StyledBrandsContainer>
    </StyledHomePage>
  );
};

export default HomePage;
