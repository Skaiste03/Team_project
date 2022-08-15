import React from 'react';
import StyledWrapper from '../../assets/styles/StyledWrapper';
import StyledContainer from '../../assets/styles/StyledContainer';
import OurBlog from './components/OurBlog';
import PostsRecaps from './components/PostsRecaps/PostsRecaps';

const Blog = () => {
  return (
    <main>
      <StyledWrapper>
        <OurBlog />
      </StyledWrapper>

      <StyledWrapper theme='grey'>
        <StyledContainer>
          <PostsRecaps />
        </StyledContainer>
      </StyledWrapper>
    </main>
  );
};

export default Blog;
