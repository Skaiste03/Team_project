import React from 'react';
import { StyledPostDiv, StyledText } from './Post.style';

const Post = ({ image, span, title, desc }) => {
  return (
    <StyledPostDiv>
      <img src={image} alt='' />
      <StyledText>
        <span>{span}</span>
        <h3>{title}</h3>
        <p>{desc}</p>
      </StyledText>
    </StyledPostDiv>
  );
};

export default Post;
