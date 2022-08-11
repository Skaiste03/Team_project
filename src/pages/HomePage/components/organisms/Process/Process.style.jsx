import styled from 'styled-components';
import BREAKPOINTS from '../../../../../shared/constants/breakpoints';

export const StyledProcess = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 60px;

  padding: 128px 0;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    flex-direction: row;
    gap: 20px;
  }
`;

export const StyledProcessLeft = styled.div`
  width: 100%;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    width: calc(50% - 10px);
  }
`;

export const StyledPocessRight = styled.div`
  width: 100%;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    width: calc(50% - 10px);
  }
`;

export const StyledProcessHeading = styled.h2`
  color: #1e1b1b;
  font-weight: 800;
  font-size: 58px;
  line-height: 76px;

  text-align: center;

  letter-spacing: -0.03em;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    text-align: left;
  }
`;

export const StyledProcessDesc = styled.p`
  color: #1e1b1b;
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;

  margin-top: 16px;
  margin-bottom: 32px;

  opacity: 0.6;
`;
