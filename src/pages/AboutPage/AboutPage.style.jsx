import styled from 'styled-components';
import BREAKPOINTS from '../../shared/constants/breakpoints';

export const StyledAboutPage = styled.div``;

export const StyledTeamContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0px 30px;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    padding: 0 15px;
  }
`;
