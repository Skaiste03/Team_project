import React from 'react';
import {
  StyledPocessRight,
  StyledProcess,
  StyledProcessDesc,
  StyledProcessHeading,
  StyledProcessLeft,
} from './Process.style';
import TEXTS from '../../../../../shared/texts/texts';

const Process = () => {
  return (
    <StyledProcess>
      <StyledProcessLeft>
        <StyledProcessHeading>
          {TEXTS.homePage.process.heading}
        </StyledProcessHeading>
        <StyledProcessDesc>{TEXTS.homePage.process.desc}</StyledProcessDesc>
        <button>{TEXTS.homePage.process.buttonText}</button>
      </StyledProcessLeft>
      <StyledPocessRight></StyledPocessRight>
    </StyledProcess>
  );
};

export default Process;
