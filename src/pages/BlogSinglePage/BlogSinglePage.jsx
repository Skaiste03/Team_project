import React from 'react';
import StyledWrapper from '../../assets/styles/StyledWrapper';
import StyledContainer from '../../assets/styles/StyledContainer';
import { useParams } from 'react-router-dom';
import POST from '../../shared/constants/post';

import {
  StyledText,
  StyledImg,
  StyledArticle,
  StyledBr,
  StyledBigHd,
  StyledSmallHd,
  StyledPost,
} from './BlogSinglePage.style';

const BlogSinglePage = () => {
  const { id } = useParams();

  const post = POST.find((element) => element.id === id);

  return (
    <main>
      <StyledWrapper>
        <StyledContainer>
          <StyledPost>
            <StyledText>
              <span>{post.date}</span>
              <h3>{post.firstTitle}</h3>
              <p>{post.desc1}</p>
            </StyledText>
            <StyledImg src={post.heroImage} alt='hero' />
            <StyledArticle>
              <StyledBigHd>{post.secondTitle}</StyledBigHd>
              <p>{post.desc2}</p>
              <img src={post.postImg} alt='post' />
              <StyledSmallHd>{post.thirdTitle}</StyledSmallHd>
              <p>{post.desc3}</p>
              <StyledBr>{post.desc4}</StyledBr>
              <p>{post.desc5}</p>
            </StyledArticle>
          </StyledPost>
        </StyledContainer>
      </StyledWrapper>
    </main>
  );
};

export default BlogSinglePage;
