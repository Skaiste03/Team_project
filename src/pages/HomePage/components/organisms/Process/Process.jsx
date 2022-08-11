import React from 'react';
import {
  StyledPocessRight,
  StyledProcess,
  StyledProcessDesc,
  StyledProcessHeading,
  StyledProcessLeft,
} from './Process.style';
import TEXTS from '../../../../../shared/texts/texts';
import QuoteCard from '../../../../../components/atoms/QuoteCard/QuoteCard';
import { HOME_PAGE_QUOTES } from '../../../../../shared/constants/quotes';

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
      <StyledPocessRight>
        {HOME_PAGE_QUOTES.map((quote, index) => (
          <QuoteCard
            quote={quote}
            number={index + 1}
            line={index !== HOME_PAGE_QUOTES.length - 1}
          />
        ))}
      </StyledPocessRight>
    </StyledProcess>
  );
};

export default Process;
