import React from 'react';
import Abilities from './components/Abilities';
import Hero from './components/Hero';
import Process from './components/Process';
import Services from './components/Services';
import Experience from './components/Experience';
import Brands from './components/Brands';
import CallToAction from '../../components/organisms/CallToAction';

import { StyledHomePage } from './HomePage.style';
import StyledWrapper from '../../assets/styles/StyledWrapper';

const HomePage = () => {
  return (
    <StyledHomePage>
      <StyledWrapper>
        <Hero />
      </StyledWrapper>

      <StyledWrapper theme={'light'}>
        <Services />
      </StyledWrapper>

      <StyledWrapper>
        <Process />
      </StyledWrapper>

      <StyledWrapper theme={'lighter'}>
        <Abilities />
      </StyledWrapper>

      <CallToAction />

      <StyledWrapper theme={'lighter'}>
        <Experience />
      </StyledWrapper>

      <StyledWrapper>
        <Brands />
      </StyledWrapper>
    </StyledHomePage>
  );
};

export default HomePage;
