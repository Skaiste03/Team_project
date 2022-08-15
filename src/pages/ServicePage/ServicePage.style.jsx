import styled from 'styled-components';
import BREAKPOINTS from '../../shared/constants/breakpoints';

export const StyledServicePage = styled.main`
  padding-top: 50px;
  padding-bottom: 50px;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    padding-bottom: 100px;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    padding-bottom: 128px;
  }
`;

export const StyledServicePageHeading = styled.h1`
  ${({ theme }) => theme.h1}
`;

export const StyledServicePageParagraph1 = styled.p`
  ${({ theme }) => theme.body2}
`;
