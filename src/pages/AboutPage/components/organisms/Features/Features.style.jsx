import styled from 'styled-components';
import BRAKEPOINTS from '../../../../../shared/constants/breakpoints';

export const StyledSection = styled.section`
  text-align: center;
`;

export const StyledHeading = styled.h2`
  color: #1e1b1b;
  font-size: 58px;
  font-weight: 800;

  @media screen and (min-width: ${BRAKEPOINTS.md}) {
  }
`;
