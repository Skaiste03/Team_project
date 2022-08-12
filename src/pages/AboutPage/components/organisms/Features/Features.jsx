import React from 'react';
import EXPERIENCES from '../../../../../shared/constants/experiences';
import TEXTS from '../../../../../shared/texts/texts';
import ServiceCard from '../../atoms/ServiceCard/ServiceCard';
import {
  StyledHeading,
  StyledSection,
  StyledServiceCardDiv,
} from './Features.style';

const Features = () => {
  return (
    <StyledSection>
      <div>
        <StyledHeading>{TEXTS.aboutPage.features.title}</StyledHeading>
        <StyledServiceCardDiv>
          {EXPERIENCES.map((experience) => (
            <ServiceCard
              key={experience.id}
              icon={experience.icon}
              title={experience.title}
              description={experience.aboutDesc}
            />
          ))}
        </StyledServiceCardDiv>
        <div></div>
      </div>
    </StyledSection>
  );
};

export default Features;
