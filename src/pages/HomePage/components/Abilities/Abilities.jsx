import React from 'react';
import {
  StyledAbilities,
  StyledAbilitiesHeading,
  StyledAbilitiesSubHeading,
  StyledAbilitiesWrapper,
} from './Abilities.style';
import TEXTS from '../../../../shared/texts/texts';
import SERVICES from '../../../../shared/constants/services';
import Card from '../../../../components/atoms/Card/Card';
import ArrowButton from '../../../../components/atoms/ArrowButton';

const Abilities = () => {
  return (
    <StyledAbilities>
      <StyledAbilitiesSubHeading>
        {TEXTS.homePage.abilities.subHeading}
      </StyledAbilitiesSubHeading>
      <StyledAbilitiesHeading>
        {TEXTS.homePage.abilities.heading}
      </StyledAbilitiesHeading>
      <StyledAbilitiesWrapper>
        {SERVICES.slice(0, 8).map((service) => (
          <Card
            key={service.id}
            logo={service.logo}
            text={service.text}
            id={service.id}
          />
        ))}
      </StyledAbilitiesWrapper>
      <ArrowButton path={'/'} text={TEXTS.homePage.abilities.buttonText} />
    </StyledAbilities>
  );
};

export default Abilities;
