import React from 'react';
import { StyledServiceCard } from './ServiceCard.style';
import { motion } from 'framer-motion';

const ServiceCard = (props) => {
  return (
    <StyledServiceCard>
      <motion.img whileHover={{ rotate: 50 }} src={props.icon} alt='icon' />
      <h5>{props.title}</h5>
      <p>{props.description}</p>
    </StyledServiceCard>
  );
};

export default ServiceCard;
