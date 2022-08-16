import React from 'react';
import StyledWrapper from '../../assets/styles/StyledWrapper';
import StyledContainer from '../../assets/styles/StyledContainer';
import OurBlog from './components/OurBlog';
import Recaps from './components/Recaps/Recaps';
import Posts from './components/Posts';

const Blog = () => {
  return (
    <main>
      <StyledWrapper>
        <OurBlog />
      </StyledWrapper>

      <StyledWrapper theme='grey'>
        <StyledContainer>
          <Recaps />
        </StyledContainer>
      </StyledWrapper>

      <StyledWrapper>
        <StyledContainer>
          <Posts />
        </StyledContainer>
      </StyledWrapper>
    </main>
  );
};

export default Blog;
