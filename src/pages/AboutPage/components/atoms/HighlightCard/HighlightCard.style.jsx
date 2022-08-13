import styled from 'styled-components';
import BREAKPOINTS from '../../../../../shared/constants/breakpoints';

export const StyledCardImg = styled.div`
  background-image: url(${(props) => props.image});
  background-position: 50% 50%;
  background-size: cover;
`;

export const StyledTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${(props) => props.color};
  height: 100%;

  color: #ffffff;

  padding: 80px 30px 80px 60px;

  h4 {
    font-weight: 700;
    font-size: 32px;
    line-height: 46px;
    letter-spacing: -0.03em;

    margin-bottom: auto;
  }
  p {
    align-self: flex-end;

    font-weight: 600;
    font-size: 20px;

    line-height: 26px;
    letter-spacing: -0.03em;

    opacity: 0.7;
  }

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    h4 {
      font-size: 40px;
      line-height: 56px;
    }
    p {
      font-size: 24px;
      line-height: 36px;
    }
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    padding: 80px 20px 80px 35px;
  }

  @media screen and (min-width: ${BREAKPOINTS.xxl}) {
    padding: 150px 101px 135px 102px;
  }
`;
