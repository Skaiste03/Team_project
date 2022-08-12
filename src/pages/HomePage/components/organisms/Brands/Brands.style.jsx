import styled from 'styled-components';
import BREAKPOINTS from '../../../../../shared/constants/breakpoints';

export const StyledBrands = styled.div`
  padding-top: 128px;
  padding-bottom: 80px;
`;

export const StyledBrandsHeading = styled.h3`
  color: #1e1b1b;
  font-weight: 700;
  font-size: 48px;
  line-height: 140%;

  text-align: center;
  letter-spacing: -0.03em;

  margin-bottom: 40px;
`;

export const StyledBrandsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 50px;

  & img {
    width: 100%;
    height: auto;

    opacity: 0.8;
  }

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    grid-template-columns: repeat(5, auto);
  }
`;
