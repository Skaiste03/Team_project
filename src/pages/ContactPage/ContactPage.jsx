import React from 'react';
import { StyledContactPage } from './ContactPage.style';
import StyledContainer from '../../assets/styles/StyledContainer';
import StyledWrapper from '../../assets/styles/StyledWrapper';
import Contacts from './components/Contacts';
import Maps from './components/Maps';

const ContactPage = () => {
  return (
    <StyledContactPage>
      <StyledWrapper>
        <StyledContainer>
          <Contacts />
        </StyledContainer>
      </StyledWrapper>

      <StyledWrapper>
        <Maps />
      </StyledWrapper>
    </StyledContactPage>
  );
};

export default ContactPage;
