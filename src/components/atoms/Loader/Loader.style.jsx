import styled from 'styled-components';

export const StyledLoaderDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: calc(100vh - 83px);
`;

export const StyledLoader = styled.div`
  .loader-container {
    display: flex;
    gap: 5px;

    span {
      width: 20px;
      height: 20px;
      background-color: ${({ theme }) => theme.color.orange};
      border-radius: 50%;
    }
  }
`;
