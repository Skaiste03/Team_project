import React from 'react';
import Button from '../../atoms/Button';
import { StyledForm, StyledInput, StyledInputsWrapper } from './Form.style';

const Form = ({ inputs, buttonText, bg }) => {
  const handleSubmit = (e) => e.preventDefault();

  return (
    <StyledForm onClick={handleSubmit}>
      <StyledInputsWrapper>
        {inputs.map((input) => (
          <StyledInput
            key={input.id}
            placeholder={input.placeholder}
            type={input.type}
            bg={bg}
          ></StyledInput>
        ))}
      </StyledInputsWrapper>
      <Button bg={'primary'} text={buttonText} />
    </StyledForm>
  );
};

export default Form;
