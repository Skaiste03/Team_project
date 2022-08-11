import React from 'react';
import {
  StyledCallToAction,
  StyledCallToActionBgOne,
  StyledCallToActionBgTwo,
  StyledCallToActionBorder,
  StyledCallToActionContainer,
  StyledCallToActionHeading,
} from './CallToAction.styled';
import TEXTS from '../../../shared/texts/texts';
import Button from '../../atoms/Button/Button';

const CallToAction = () => {
  return (
    <StyledCallToAction>
      <StyledCallToActionBgOne></StyledCallToActionBgOne>
      <StyledCallToActionBgTwo></StyledCallToActionBgTwo>
      <StyledCallToActionContainer>
        <StyledCallToActionBorder>
          <StyledCallToActionHeading>
            {TEXTS.cta.heading}
          </StyledCallToActionHeading>
          <Button small text={TEXTS.button.contact} />
        </StyledCallToActionBorder>
      </StyledCallToActionContainer>
    </StyledCallToAction>
  );
};

export default CallToAction;
