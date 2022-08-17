import React from 'react';
import { StyledContactPage } from './ContactPage.style';
import StyledContainer from '../../assets/styles/StyledContainer';
import StyledWrapper from '../../assets/styles/StyledWrapper';
import Contacts from './components/Contacts';
import Map from './components/Map';

const ContactPage = () => {
  return (
    <StyledContactPage>
      <StyledWrapper>
        <StyledContainer>
          <Contacts />
        </StyledContainer>
      </StyledWrapper>

      <StyledWrapper>
        <Map />
      </StyledWrapper>
    </StyledContactPage>
  );
};

export default ContactPage;
