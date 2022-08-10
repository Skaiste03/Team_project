import React from 'react';
import { StyleCallToAction } from './CallToAction.styled';

const CallToAction = (props) => {
  return (
    <StyleCallToAction>
      {props.logo}
      <span>{props.text}</span>
    </StyleCallToAction>
  );
};

export default CallToAction;
