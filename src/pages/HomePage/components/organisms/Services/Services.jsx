import React from 'react';
import {
  StyledServices,
  StyledServicesExpWrapper,
  StyledServicesHeading,
  StyledServicesLeft,
  StyledServicesLink,
  StyledServicesRight,
  StyledServicesRightHeading,
} from './Services.style';
import TEXTS from '../../../../../shared/texts/texts';
import ServiceCard from '../../../../../components/atoms/ServiceCard';
import EXPERIANCES from '../../../../../shared/constants/experiences';
import { ArrowIcon } from '../../../../../assets/icons';
import Form from '../../../../../components/organisms/Form/Form';
import { HOME_PAGE_FORM } from '../../../../../shared/constants/forms';

const Services = () => {
  return (
    <StyledServices>
      <StyledServicesLeft>
        <StyledServicesHeading>
          {TEXTS.homePage.services.heading}
        </StyledServicesHeading>
        <StyledServicesExpWrapper>
          {EXPERIANCES.map((experiance) => (
            <ServiceCard key={experiance.id} experiance={experiance} />
          ))}
          <StyledServicesLink>
            <span>{TEXTS.homePage.services.button}</span>
            <ArrowIcon />
          </StyledServicesLink>
        </StyledServicesExpWrapper>
      </StyledServicesLeft>

      <StyledServicesRight>
        <StyledServicesRightHeading>
          {TEXTS.homePage.services.formHeading}
        </StyledServicesRightHeading>

        <Form inputs={HOME_PAGE_FORM} buttonText={TEXTS.homePage.form.button} />
      </StyledServicesRight>
    </StyledServices>
  );
};

export default Services;
