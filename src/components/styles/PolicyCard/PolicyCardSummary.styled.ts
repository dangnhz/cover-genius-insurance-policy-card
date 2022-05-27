import styled from "styled-components";

export const StyledPolicyCardSummary = styled.div`
  display: flex;
  grid-column: 1 / 3;
  align-items: center;

  @media ${({ theme }) => theme.devices.tablet} {
    grid-column: 1 / 6;
    border-top: 1px solid #e0e4e8;
    padding-top: 16px;
  }

  @media ${({ theme }) => theme.devices.desktop} {
    grid-column: 1 / 5;
    margin-right: 30px;
  }

  //IE 11 fix

  @media all and (-ms-high-contrast: none) and ${({ theme }) => theme.devices.tablet} {
    padding-right: 100px;
  }
`;
