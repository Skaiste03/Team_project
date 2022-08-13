import React from 'react';
import HighlightCard from '../../atoms/HighlightCard';
import HIGHLIGHTS from '../../../../../shared/constants/highlights';

import { StyledHighlightsSection } from './Highlights.style';

const Highlights = () => {
  return (
    <StyledHighlightsSection>
      {HIGHLIGHTS.map((element) => (
        <HighlightCard
          key={element.id}
          image={element.img}
          color={element.color}
          title={element.title}
          description={element.desc}
        />
      ))}
    </StyledHighlightsSection>
  );
};

export default Highlights;
