import React from 'react';
import { StyledServiceCard } from './ServiceCard.style';

const ServiceCard = (props) => {
  return (
    <StyledServiceCard>
      <img src={props.icon} alt='' />
      <p>{props.title}</p>
      <span>{props.desc}</span>
    </StyledServiceCard>
  );
};

export default ServiceCard;
