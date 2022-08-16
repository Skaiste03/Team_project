import React from 'react';
import { StyledHomePage } from './HomePage.style';
import StyledWrapper from '../../assets/styles/StyledWrapper';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Abilities from './components/Abilities';
import Experience from './components/Experience';
import Brands from './components/Brands';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import CallToAction from '../../components/organisms/CallToAction';
import StyledContainer from '../../assets/styles/StyledContainer';

const HomePage = () => {
  return (
    <StyledHomePage>
      <StyledWrapper>
        <StyledContainer>
          <Hero />
        </StyledContainer>
      </StyledWrapper>

      <StyledWrapper theme={'light'}>
        <StyledContainer>
          <Services />
        </StyledContainer>
      </StyledWrapper>

      <StyledWrapper>
        <StyledContainer>
          <Process />
        </StyledContainer>
      </StyledWrapper>

      <StyledWrapper theme={'lighter'}>
        <StyledContainer>
          <Abilities />
        </StyledContainer>
      </StyledWrapper>

      <CallToAction />

      <StyledWrapper theme={'lighter'}>
        <StyledContainer>
          <Experience />
        </StyledContainer>
      </StyledWrapper>

      <StyledWrapper>
        <StyledContainer>
          <Brands />
        </StyledContainer>
      </StyledWrapper>

      <StyledWrapper theme={'lighter'}>
        <StyledContainer>
          <Testimonials />
        </StyledContainer>
      </StyledWrapper>

      <StyledWrapper theme={'light'}>
        <StyledContainer>
          <Faq />
        </StyledContainer>
      </StyledWrapper>
    </StyledHomePage>
  );
};

export default HomePage;
