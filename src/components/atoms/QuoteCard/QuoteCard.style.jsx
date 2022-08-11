import styled from 'styled-components';

export const StyledQuoteCard = styled.div``;

export const StyledQuoteCardCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #661ce7;

  border-radius: 50%;

  position: relative;

  width: 72px;
  height: 72px;

  & span {
    color: #fff;
    font-weight: 700;
    font-size: 32px;
    line-height: 24px;
  }

  & div {
    position: absolute;
    bottom: -30%;

    background-color: rgba(255, 255, 255, 0.24);

    border-radius: 50%;

    width: 42px;
    height: 42px;
  }
`;
