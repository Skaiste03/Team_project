import styled from 'styled-components';

export const StyledPost = styled.main`
  padding-top: 80px;
  padding-bottom: 128px;
`;

export const StyledText = styled.div`
  max-width: 896px;
  margin: 0 auto;

  span {
    ${({ theme }) => theme.body2}
    color: ${({ theme }) => theme.color.darkGrey};
  }

  h3 {
    ${({ theme }) => theme.h3}
    color: ${({ theme }) => theme.color.black};

    margin: 16px 0;
  }

  p {
    ${({ theme }) => theme.body2};
    color: ${({ theme }) => theme.color.darkBlue};

    opacity: 0.6;
  }
`;

export const StyledImg = styled.img`
  width: 100%;
  margin: 64px 0;
`;

export const StyledArticle = styled.article`
  max-width: 896px;
  margin: 0 auto;

  p {
    ${({ theme }) => theme.body2};
    color: ${({ theme }) => theme.color.darkBlue};

    opacity: 0.6;
  }

  p:nth-last-child(6) {
    white-space: break-spaces;
  }

  img {
    width: 100%;

    margin-top: 56px;
    margin-bottom: 80px;
  }
`;

export const StyledBr = styled.p`
  border-left: 3px solid ${({ theme }) => theme.color.darkBlack};
  padding-left: 34px;

  margin: 24px 0;
`;

export const StyledBigHd = styled.h4`
  ${({ theme }) => theme.h4};
  color: ${({ theme }) => theme.color.darkBlack};

  margin-bottom: 20px;
`;

export const StyledSmallHd = styled.h5`
  ${({ theme }) => theme.title1};
  color: ${({ theme }) => theme.color.darkBlack};

  margin-bottom: 16px;
`;
