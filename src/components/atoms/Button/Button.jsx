import { StyledButton } from './Button.style';

const Button = ({ text }, props) => {
  console.log(props.small);
  return <StyledButton {...props}>{text}</StyledButton>;
};

export default Button;
