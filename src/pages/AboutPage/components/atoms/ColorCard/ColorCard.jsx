import React from 'react';

const ColorCard = ({ color, image, title, description }) => {
  return (
    <div image={image}>
      <div color={color}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ColorCard;
