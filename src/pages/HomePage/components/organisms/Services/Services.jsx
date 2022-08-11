import React from 'react';
import {
  StyledServices,
  StyledServicesHeading,
  StyledServicesLeft,
  StyledServicesRight,
} from './Services.style';
import TEXTS from '../../../../../shared/texts/texts';
import ServiceCard from '../../../../../components/atoms/ServiceCard';

const Services = () => {
  return (
    <StyledServices>
      <StyledServicesLeft>
        <StyledServicesHeading>
          {TEXTS.homePage.services.heading}
          <ServiceCard />
        </StyledServicesHeading>
      </StyledServicesLeft>
      <StyledServicesRight></StyledServicesRight>
    </StyledServices>
  );
};

export default Services;
