import styled from 'styled-components';
import ctaBgOne from '../../../assets/images/cta-bg-1.jpg';
import ctaBgTwo from '../../../assets/images/cta-bg-2.jpg';
import BREAKPOINTS from '../../../shared/constants/breakpoints';

export const StyledCallToAction = styled.div`
  position: relative;
`;

export const StyledCallToActionContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  max-width: 1280px;
  margin: 0 auto;
  padding: 0;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    padding: 0 15px;
  }
`;

export const StyledCallToActionBgOne = styled.div`
  position: absolute;
  left: 0;

  background-image: url(${ctaBgOne});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  width: 50%;
  height: 100%;

  z-index: -1;
`;

export const StyledCallToActionBgTwo = styled.div`
  position: absolute;
  right: 0;

  background-image: url(${ctaBgTwo});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  width: 50%;
  height: 100%;

  z-index: -1;
`;

export const StyledCallToActionBorder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;

  width: 100%;

  padding: 68px 40px;

  background-color: #ff6433;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    align-items: flex-start;
    width: 60%;
  }

  @media screen and (min-width: ${BREAKPOINTS.xl}) {
    padding: 128px 80px;
  }
`;

export const StyledCallToActionHeading = styled.h3`
  color: #fff;
  font-weight: 700;
  font-size: 38px;
  line-height: 47px;
  letter-spacing: -0.03em;
  text-align: center;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    text-align: left;
  }

  @media screen and (min-width: ${BREAKPOINTS.xl}) {
    font-size: 48px;
    line-height: 67px;
  }
`;

export const TestButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 177px;
  height: 64px;

  color: #fff;

  background-color: #000;
`;
