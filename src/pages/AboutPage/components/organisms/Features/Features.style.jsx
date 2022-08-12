import styled from 'styled-components';
import BRAKEPOINTS from '../../../../../shared/constants/breakpoints';

export const StyledSection = styled.section`
  text-align: center;
`;

export const StyledHeading = styled.h2`
  color: #1e1b1b;

  font-size: 35px;
  font-weight: 800;
  line-height: 50px;

  text-align: center;
  letter-spacing: -0.03em;

  margin-bottom: 64px;

  @media screen and (min-width: ${BRAKEPOINTS.md}) {
    font-size: 58px;
    line-height: 76px;

    padding: 0 15% 0 15%;
  }
`;

export const StyledServiceCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${BRAKEPOINTS.lg}) {
    flex-direction: row;
  }
`;
