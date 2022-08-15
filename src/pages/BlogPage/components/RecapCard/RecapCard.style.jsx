import styled from 'styled-components';
import BREAKPOINTS from '../../../../shared/constants/breakpoints';

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  gap: 24px;
`;

export const StyledImgDiv = styled.div`
  img {
    width: 192px;
    height: 100%;

    object-fit: cover;
  }

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    img {
      width: 192px;
      height: 100%;

      object-fit: cover;
    }
  }
`;

export const StyledText = styled.div`
  h3 {
    ${({ theme }) => theme.title1}

    color: ${({ theme }) => theme.color.black};
  }
  span {
    ${({ theme }) => theme.body2}

    color: ${({ theme }) => theme.color.darkGrey};

    opacity: 0.8;
  }
`;
