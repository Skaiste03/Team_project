import React from 'react';
import { StyledCardImg, StyledTextDiv } from './ColorCard.style';

const ColorCard = ({ color, image, title, description }) => {
  return (
    <StyledCardImg image={image}>
      <StyledTextDiv color={color}>
        <h4>{title}</h4>
        <p>{description}</p>
      </StyledTextDiv>
    </StyledCardImg>
  );
};

export default ColorCard;
