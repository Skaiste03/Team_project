import styled from 'styled-components';
import image from '../../../../../assets/images/steps-img.jpg';
import BREAKPOINTS from '../../../../../shared/constants/breakpoints';

export const StyledSection = styled.section`
  display: flex;
  gap: 87px;

  padding: 60px 0px;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    padding: 128px 0px;
  }
`;

export const StyledImageDiv = styled.div`
  display: none;

  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  width: 100%;

  @media screen and (min-width: ${BREAKPOINTS.xl}) {
    display: flex;
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledTexts = styled.div`
  text-align: center;
  margin-bottom: 48px;
  padding: 0 40px;

  h3 {
    font-weight: 700;
    font-size: 38px;
    line-height: 57px;

    letter-spacing: -0.03em;
    margin-bottom: 16px;

    color: #1e1b1b;
  }

  p {
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;

    letter-spacing: -0.03em;

    color: #232536;

    opacity: 0.6;
  }

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    h3 {
      font-size: 48px;
      line-height: 67px;
    }

    p {
      font-size: 24px;
      line-height: 36px;
    }
  }

  @media screen and (min-width: ${BREAKPOINTS.xl}) {
    text-align: left;
    padding: 0;
  }
`;

export const StyledQuotesDiv = styled.div`
  div {
    grid-template-columns: auto 65%;
  }
`;
