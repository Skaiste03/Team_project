import React from 'react';
import { StyledServicePage } from './ServicePage.style';
import StyledContainer from '../../assets/styles/StyledContainer';
import StyledWrapper from '../../assets/styles/StyledWrapper';
import { useParams } from 'react-router-dom';

const ServicePage = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <StyledServicePage>
      <StyledWrapper>
        <StyledContainer></StyledContainer>
      </StyledWrapper>
    </StyledServicePage>
  );
};

export default ServicePage;
