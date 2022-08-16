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
import shuffleArray from '../../../../shared/func/shuffleArray';
import ROUTES from '../../../../shared/constants/routes';

const Abilities = () => {
  const services = shuffleArray(SERVICES);

  return (
    <StyledAbilities>
      <StyledAbilitiesSubHeading>
        {TEXTS.homePage.abilities.subHeading}
      </StyledAbilitiesSubHeading>
      <StyledAbilitiesHeading>
        {TEXTS.homePage.abilities.heading}
      </StyledAbilitiesHeading>
      <StyledAbilitiesWrapper>
        {services.slice(0, 8).map((service) => (
          <Card
            key={service.id}
            logo={service.logo}
            text={service.text}
            id={service.id}
          />
        ))}
      </StyledAbilitiesWrapper>
      <ArrowButton
        path={ROUTES[2].path}
        text={TEXTS.homePage.abilities.buttonText}
      />
    </StyledAbilities>
  );
};

export default Abilities;
