import React from 'react';
import { StyledForm, StyledInput, StyledInputsWrapper } from './Form.style';

const Form = ({ inputs, buttonText }) => {
  const handleSubmit = (e) => e.preventDefault();

  return (
    <StyledForm onClick={handleSubmit}>
      <StyledInputsWrapper>
        {inputs.map((input) => (
          <StyledInput
            key={input.id}
            placeholder={input.placeholder}
            type={input.type}
          ></StyledInput>
        ))}
      </StyledInputsWrapper>
      <button>{buttonText}</button>
    </StyledForm>
  );
};

export default Form;
