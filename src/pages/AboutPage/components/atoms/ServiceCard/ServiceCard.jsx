import React from 'react';
import { StyledServiceCard } from './ServiceCard.style';

const ServiceCard = (props) => {
  return (
    <StyledServiceCard>
      <img src={props.icon} alt='icon' />
      <h4>{props.title}</h4>
      <p>{props.description}</p>
    </StyledServiceCard>
  );
};

export default ServiceCard;
