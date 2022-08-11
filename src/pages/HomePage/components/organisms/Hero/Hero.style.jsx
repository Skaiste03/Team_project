import styled from 'styled-components';

export const StyledHero = styled.div`
  display: flex;
  gap: 20px;
`;

export const StyledHeroLeft = styled.div`
  width: 50%;
`;

export const StyledHeroRight = styled.div`
  width: 50%;
`;

export const StyledHeroHeading = styled.h1`
  color: #1e1b1b;
  font-weight: 800;
  font-size: 64px;
  line-height: 84px;
  letter-spacing: -0.03em;

  padding-bottom: 32px;
`;

export const StyledHeroOpenWrapper = styled.div`
  display: grid;
  justify-content: start;
  grid-template-columns: repeat(2, auto);
  grid-column-gap: 13px;

  padding-top: 48px;

  & svg {
    justify-self: center;
    align-self: center;

    color: #e2e6e9;

    grid-row-start: 1;
    grid-row-end: span 2;
  }
`;

export const StyledHeroOpenTitle = styled.p`
  color: #1e1b1b;
  font-weight: 600;
  font-size: 18px;
  line-height: 175%;
`;

export const StyledHeroOpenSubTitle = styled.span`
  grid-column: 2;

  color: #939191;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;
