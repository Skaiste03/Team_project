import React from 'react';
import {
  StyledHero,
  StyledHeroHeading,
  StyledHeroLeft,
  StyledHeroOpenSubTitle,
  StyledHeroOpenTitle,
  StyledHeroOpenWrapper,
  StyledHeroRight,
} from './Hero.style';

const Hero = () => {
  return (
    <StyledHero>
      <StyledHeroLeft>
        <StyledHeroHeading></StyledHeroHeading>
        <button>Placeholder</button>
        <StyledHeroOpenWrapper>
          <StyledHeroOpenTitle></StyledHeroOpenTitle>
          <StyledHeroOpenSubTitle></StyledHeroOpenSubTitle>
        </StyledHeroOpenWrapper>
      </StyledHeroLeft>
      <StyledHeroRight></StyledHeroRight>
    </StyledHero>
  );
};

export default Hero;
