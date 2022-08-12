import styled from 'styled-components';
import BREAKPOINTS from '../../../../../shared/constants/breakpoints';

export const StyledExperience = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  /* Container Experience */
  max-width: 1280px;
  margin: 0 auto;
  padding: 48px 30px;
  /* Container Experience */

  background-color: #f2f2f2;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    grid-template-columns: repeat(4, 1fr);
    padding: 48px 15px;
  }
`;
