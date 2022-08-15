import styled from 'styled-components';

export const StyledPostDiv = styled.div`
  transition: 0.3s ease-in;

  cursor: pointer;

  img {
    width: 100%;
  }
  &:hover {
    opacity: 0.8;
  }
`;

export const StyledText = styled.div`
  margin-top: 24px;

  span {
    ${({ theme }) => theme.body2};
    color: ${({ theme }) => theme.color.darkGrey};

    margin-bottom: 16px;
  }

  h3 {
    ${({ theme }) => theme.title1};
    color: ${({ theme }) => theme.color.black};
    margin-bottom: 16px;
  }

  p {
    ${({ theme }) => theme.body2};
    color: ${({ theme }) => theme.color.darkBlue};
  }
`;
