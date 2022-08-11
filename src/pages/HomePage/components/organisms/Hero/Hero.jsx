import React from 'react';
import {
  StyledHero,
  StyledHeroBannerService,
  StyledHeroBannerServiceCircle,
  StyledHeroBannerStars,
  StyledHeroBannerStarsWrapper,
  StyledHeroBannerTextWrapper,
  StyledHeroHeading,
  StyledHeroLeft,
  StyledHeroOpenSubTitle,
  StyledHeroOpenTitle,
  StyledHeroOpenWrapper,
  StyledHeroRight,
  StyledHeroRightBg,
} from './Hero.style';
import TEXTS from '../../../../../shared/texts/texts';
import { TimeHeroIcon, StarHeroIcon } from '../../../../../assets/icons';

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
      <StyledHeroRight>
        <StyledHeroRightBg></StyledHeroRightBg>
        <StyledHeroBannerService>
          <StyledHeroBannerServiceCircle>
            <p>
              24 <span>hr</span>
            </p>
          </StyledHeroBannerServiceCircle>
          <p>Quick service</p>
        </StyledHeroBannerService>
        <StyledHeroBannerStars>
          <StyledHeroBannerTextWrapper>
            4.5/5<span>Rating</span>
          </StyledHeroBannerTextWrapper>
          <StyledHeroBannerStarsWrapper>
            <StarHeroIcon />
            <StarHeroIcon />
            <StarHeroIcon />
            <StarHeroIcon />
            <StarHeroIcon />
          </StyledHeroBannerStarsWrapper>
        </StyledHeroBannerStars>
      </StyledHeroRight>
    </StyledHero>
  );
};

export default Hero;
