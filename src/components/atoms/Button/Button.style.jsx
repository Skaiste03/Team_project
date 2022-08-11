import styled from 'styled-components';

export const StyledButton = styled.button`
  width: ${(props) => (props.small ? '177' : '203')}px;

  font-size: 18px;

  border: none;
  border-radius: 12px;

  padding: 16px 40px;

  color: #fff;
  background: ${(props) => (props.color == 'primary' ? '#FF6433' : '#1E1B1B')};
`;
