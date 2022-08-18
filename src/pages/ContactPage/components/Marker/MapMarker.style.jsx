import styled from 'styled-components';

export const StyledMapMarker = styled.div`
  padding: 10px 20px;

  & svg {
    display: block;
    margin: 0 auto;
    padding-bottom: 20px;
  }
`;

export const StyledMapMarkerParagraph = styled.p`
  color: ${({ theme }) => theme.color.black};
  font-weight: 600;
  margin-bottom: 10px;
  white-space: pre-line;

  &:last-child {
    margin-bottom: 0;
  }

  & span {
    font-size: 12px;
    display: block;
    color: ${({ theme }) => theme.color.darkGrey};
  }
`;
