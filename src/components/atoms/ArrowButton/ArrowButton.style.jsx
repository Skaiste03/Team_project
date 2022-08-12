import styled from 'styled-components';

export const StyledArrowButton = styled.div`
  & a {
    display: inline-flex;
    align-items: center;
    gap: 21px;

    cursor: pointer;

    & span {
      color: #1e1b1b;

      font-weight: 600;
      font-size: 18px;
      line-height: 32px;
    }

    & svg {
      color: #1e1b1b;
    }
  }
`;
