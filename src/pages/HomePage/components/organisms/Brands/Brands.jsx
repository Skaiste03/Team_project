import React from 'react';
import {
  StyledBrands,
  StyledBrandsHeading,
  StyledBrandsWrapper,
} from './Brands.style';
import TEXTS from '../../../../../shared/texts/texts';
import BRANDS from '../../../../../shared/constants/brands';

const Brands = () => {
  return (
    <StyledBrands>
      <StyledBrandsHeading>{TEXTS.homePage.brands.heading}</StyledBrandsHeading>
      <StyledBrandsWrapper>
        {BRANDS.map((brand) => (
          <img key={brand.id} src={brand.img} alt={brand.alt} />
        ))}
      </StyledBrandsWrapper>
    </StyledBrands>
  );
};

export default Brands;
