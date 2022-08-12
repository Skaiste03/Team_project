import React from 'react';
// import EXPERIENCES from '../../../../../shared/constants/experiences';
import TEXTS from '../../../../../shared/texts/texts';
import { StyledHeading, StyledSection } from './Features.style';

const Features = () => {
  return (
    <StyledSection>
      <div>
        <StyledHeading>{TEXTS.aboutPage.features.title}</StyledHeading>
        <div></div>
        <div></div>
      </div>
    </StyledSection>
  );
};

export default Features;
