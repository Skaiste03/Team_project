import React from 'react';
import ExperienceCard from '../../../../../components/atoms/ExperienceCard';
import { StyledExperience } from './Experience.style';
import HOME_PAGE_STATS from '../../../../../shared/constants/stats';

const Experience = () => {
  return (
    <StyledExperience>
      {HOME_PAGE_STATS.map((stat) => (
        <ExperienceCard key={stat.id} title={stat.title} desc={stat.desc} />
      ))}
    </StyledExperience>
  );
};

export default Experience;
