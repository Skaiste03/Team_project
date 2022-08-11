import styled from 'styled-components';
import BREAKPOINTS from '../../../../../shared/constants/breakpoints';

export const StyledServices = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 30px;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    padding: 0 15px;
  }
`;

export const StyledServicesLeft = styled.div`
  width: calc(50%);
`;

export const StyledServicesRight = styled.div`
  width: calc(50%);
`;

export const StyledServicesHeading = styled.h2`
  color: #1e1b1b;
  font-weight: 800;
  font-size: 58px;
  line-height: 76px;

  letter-spacing: -0.03em;

  -webkit-text-stroke: 1px #000000;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
