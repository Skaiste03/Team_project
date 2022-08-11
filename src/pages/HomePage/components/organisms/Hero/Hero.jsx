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
import TEXTS from '../../../../../shared/texts/texts';
import { TimeHeroIcon } from '../../../../../assets/icons';

const Hero = () => {
  return (
    <StyledHero>
      <StyledHeroLeft>
        <StyledHeroHeading>{TEXTS.homePage.hero.heading}</StyledHeroHeading>
        <button>{TEXTS.homePage.hero.button}</button>
        <StyledHeroOpenWrapper>
          <TimeHeroIcon />
          <StyledHeroOpenTitle>
            {TEXTS.homePage.hero.openTitle}
          </StyledHeroOpenTitle>
          <StyledHeroOpenSubTitle>
            {TEXTS.homePage.hero.openSubTitle}
          </StyledHeroOpenSubTitle>
        </StyledHeroOpenWrapper>
      </StyledHeroLeft>
      <StyledHeroRight></StyledHeroRight>
    </StyledHero>
  );
};

export default Hero;
