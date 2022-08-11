import React from 'react';
import { StyledQuoteCard, StyledQuoteCardCircle } from './QuoteCard.style';

const QuoteCard = () => {
  return (
    <StyledQuoteCard>
      <StyledQuoteCardCircle>
        <div></div>
        <span>03</span>
      </StyledQuoteCardCircle>
    </StyledQuoteCard>
  );
};

export default QuoteCard;
