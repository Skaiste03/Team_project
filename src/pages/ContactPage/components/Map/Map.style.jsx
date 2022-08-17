import styled from 'styled-components';
import BREAKPOINTS from '../../../../shared/constants/breakpoints';

export const StyledMap = styled.div`
  position: relative;

  width: 100%;

  padding-top: 334px;

  & img {
    display: block;

    width: 100%;
  }
`;

export const StyledMapComponent = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.grey};
`;

export const StyledMapContainer = styled.div`
  max-width: 1360px;
  margin: 0 auto;
  padding: 0 20px;

  margin-bottom: 10%;

  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  @media screen and (min-width: ${BREAKPOINTS.sm}) {
    padding: 0 40px;
  }
`;
