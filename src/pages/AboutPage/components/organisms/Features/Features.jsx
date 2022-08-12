import React from 'react';
import EXPERIENCES from '../../../../../shared/constants/experiences';
import HOME_PAGE_STATS from '../../../../../shared/constants/stats';
import TEXTS from '../../../../../shared/texts/texts';
import ServiceCard from '../../atoms/ServiceCard/ServiceCard';
import ExperienceCard from '../../../../../components/atoms/ExperienceCard';

import {
  StyledHeading,
  StyledSection,
  StyledServiceCardDiv,
  StyledNumbersDiv,
} from './Features.style';

const Features = () => {
  return (
    <StyledSection>
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
      <StyledNumbersDiv>
        {HOME_PAGE_STATS.map((stat) => (
          <ExperienceCard key={stat.id} title={stat.title} desc={stat.desc} />
        ))}
      </StyledNumbersDiv>
    </StyledSection>
  );
};

export default Features;
