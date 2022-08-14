import styled from 'styled-components';
import BREAKPOINTS from '../../../../shared/constants/breakpoints';

export const StyledServices = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto;
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 32px;

  padding: 50px 0;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    padding: 100px 0;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    padding: 128px 0;
  }
`;

export const StyledServicesHighlighted = styled.div`
  padding: 64px 48px 43px 48px;
`;

export const StyledServicesHeading = styled.h3`
  ${({ theme }) => theme.h3}
`;

export const StyledServicesDesc = styled.p`
  ${({ theme }) => theme.title2}
`;
