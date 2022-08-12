import React from 'react';
import ColorCard from '../../atoms/ColorCard';
import COLOR from '../../../../../shared/constants/color';

import { StyledColorSection } from './Color.style';

const Color = () => {
  return (
    <StyledColorSection>
      {COLOR.map((element) => (
        <ColorCard
          key={element.id}
          image={element.img}
          color={element.color}
          title={element.title}
          description={element.desc}
        />
      ))}
    </StyledColorSection>
  );
};

export default Color;
