import styled from 'styled-components';
import BREAKPOINTS from '../../../../../shared/constants/breakpoints';

export const StyledServices = styled.div`
  display: flex;
  gap: 20px;

  max-width: 1280px;
  margin: 0 auto;
  padding: 128px 30px;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    padding: 128px 15px;
  }
`;

export const StyledServicesLeft = styled.div`
  width: calc(50% - 10px);
`;

export const StyledServicesHeading = styled.h2`
  color: #1e1b1b;
  font-weight: 800;
  font-size: 58px;
  line-height: 76px;

  letter-spacing: -0.03em;

  margin-bottom: 53px;

  -webkit-text-stroke: 1px #000000;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const StyledServicesExpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 37px;

  padding-right: 240px;
`;

export const StyledServicesLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 21px;
  padding-left: 63px;

  cursor: pointer;

  & span {
    color: #1e1b1b;

    font-weight: 600;
    font-size: 18px;
    line-height: 32px;
  }
`;

export const StyledServicesRight = styled.div`
  width: calc(50% - 10px);
`;

export const StyledServicesRightHeading = styled.h3`
  color: #1e1b1b;
  font-weight: 700;
  font-size: 48px;
  line-height: 140%;

  letter-spacing: -0.03em;
`;
