import styled from 'styled-components';
import BREAKPOINTS from '../../../../../shared/constants/breakpoints';

export const StyledServiceCard = styled.div`
  background: #ffffff;
  border: 1px solid #ebebeb;

  box-shadow: 11px 130px 100px 30px rgba(0, 0, 0, 0.02);
  padding: 58px 36px;

  img {
    background-color: #ffdace;
    border-radius: 50%;
    padding: 14px;
    width: 64px;
    height: 64px;
  }

  h4 {
    color: #000000;
    font-weight: 700;
    font-size: 24px;
    line-height: 48px;
    letter-spacing: -0.03em;
  }

  p {
    color: #232536;
    font-weight: 600;
    font-size: 16px;
    line-height: 175%;
    opacity: 0.6;
  }

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    padding: 58px 166px;
  }
  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    padding-left: 23px;
    padding-right: 23px;
  }

  @media screen and (min-width: ${BREAKPOINTS.xxl}) {
    padding: 88px 56px;

    h4 {
      font-size: 32px;
    }
    p {
      font-size: 18px;
    }
  }
`;
