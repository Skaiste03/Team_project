import styled from 'styled-components';

export const StyledButton = styled.button`
  width: ${(props) =>
    props.size === 'sm' ? '177' : props.size === 'lg' ? '208' : props.size}px;
  height: 64px;

  font-size: 18px;
  font-weight: 600;
  color: #fff;

  border: none;
  border-radius: 12px;

  padding: 16px 40px;

  cursor: pointer;

  background: ${(props) =>
    props.bg === 'primary'
      ? '#FF6433'
      : props.bg === 'black'
      ? '#1E1B1B'
      : props.bg};

  transition: 0.3s ease-in;

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
