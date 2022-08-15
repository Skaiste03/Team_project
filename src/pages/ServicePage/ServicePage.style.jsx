import styled from 'styled-components';
import BREAKPOINTS from '../../shared/constants/breakpoints';

export const StyledServicePage = styled.main`
  padding-top: 50px;
`;

export const StyledServicePageHeading = styled.h1`
  ${({ theme }) => theme.h1}
  margin-bottom: 46px;

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    margin-bottom: 96px;
  }
`;

export const StyledServicePageParagraph1 = styled.p`
  ${({ theme }) => theme.body2}
`;
