import React from 'react';
import { StyledCardImg, StyledTextDiv } from './HighlightCard.style';

const HighlightCard = ({ color, image, title, description }) => {
  return (
    <StyledCardImg image={image}>
      <StyledTextDiv color={color}>
        <h4>{title}</h4>
        <p>{description}</p>
      </StyledTextDiv>
    </StyledCardImg>
  );
};

export default HighlightCard;
