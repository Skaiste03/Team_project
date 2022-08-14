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

  color: ${({ theme }) => theme.color.white};

  padding: 80px 30px 80px 60px;

  h4 {
    ${({ theme }) => theme.h4};

    margin-bottom: auto;
  }
  p {
    ${({ theme }) => theme.title2};
    align-self: flex-end;

    opacity: 0.7;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    padding: 80px 20px 80px 35px;
  }

  @media screen and (min-width: ${BREAKPOINTS.xxl}) {
    padding: 150px 101px 135px 102px;
  }
`;
