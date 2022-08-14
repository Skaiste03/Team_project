import React from 'react';
import Button from '../Button';
import TEXTS from '../../../shared/texts/texts';

import { StyledCardDiv, StyledDescDiv, StyledText } from './AboutCard.style';

const AboutCard = ({ image, title, desc }) => {
  return (
    <StyledCardDiv>
      <img src={image} alt='' />

      <StyledDescDiv>
        <StyledText>
          <h1>{title}</h1>
          <p>{desc}</p>
        </StyledText>
        <Button bg='primary' text={TEXTS.button.service} />
      </StyledDescDiv>
    </StyledCardDiv>
  );
};

export default AboutCard;
