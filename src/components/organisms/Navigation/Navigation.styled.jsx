import styled from 'styled-components';
import BREAKPOINTS from '../../../shared/constants/brakepoints';

export const StyleNavigation = styled.nav``;

export const StyleNavigationList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  list-style: none;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    flex-direction: row;
    gap: 40px;
  }

  & a {
    color: #1e1b1b;
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;

    transition: 0.5s;

    &:hover {
      opacity: 0.8;
    }
  }
`;
