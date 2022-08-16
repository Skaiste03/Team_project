import React from 'react';
import { StyledContactPage } from './ContactPage.style';
import StyledContainer from '../../assets/styles/StyledContainer';
import StyledWrapper from '../../assets/styles/StyledWrapper';
import Contacts from './components/Contacts';

const ContactPage = () => {
  return (
    <StyledContactPage>
      <StyledWrapper>
        <StyledContainer>
          <Contacts />
        </StyledContainer>
      </StyledWrapper>
    </StyledContactPage>
  );
};

export default ContactPage;
