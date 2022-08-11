import React from 'react';
import {
  StyledPocessRight,
  StyledProcess,
  StyledProcessHeading,
  StyledProcessLeft,
} from './Process.style';

const Process = () => {
  return (
    <StyledProcess>
      <StyledProcessLeft>
        <StyledProcessHeading></StyledProcessHeading>
      </StyledProcessLeft>
      <StyledPocessRight></StyledPocessRight>
    </StyledProcess>
  );
};

export default Process;
