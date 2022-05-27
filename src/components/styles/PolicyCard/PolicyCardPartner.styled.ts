import styled from "styled-components";

export const StyledPolicyCardPartner = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  grid-column: 3/4;

  @media ${({ theme }) => theme.devices.tablet} {
    grid-row: 1/2;
    grid-column: 5/6;
  }

  @media ${({ theme }) => theme.devices.desktop} {
    grid-row: 1/3;
  }

  //IE 11 fix
  @media all and (-ms-high-contrast: none) {
    position: absolute;
    right: 16px;
    background-color: white;
    z-index: 1;
    padding-left: 16px;
    top: 75%;
    transform: translateY(-50%);
  }

  @media all and (-ms-high-contrast: none) and ${({ theme }) => theme.devices.tablet} {
    top: 30%;
  }

  @media all and (-ms-high-contrast: none) and ${({ theme }) => theme.devices.desktop} {
    top: 50%;
  }

  img {
    height: auto;
    padding-right: 4px;
    max-height: 42px;
    min-height: 30px;
    object-fit: contain;

    @media ${({ theme }) => theme.devices.tablet} {
      max-height: 60px;
      padding-right: 0;
    }

    @media ${({ theme }) => theme.devices.desktop} {
      max-height: 104px;
    }

    //IE 11 fix
    @media all and (-ms-high-contrast: none) {
      max-width: 80px;
    }
    @media all and (-ms-high-contrast: none) and ${({ theme }) => theme.devices.tablet} {
      max-width: 100px;
      height: 100%;
    }

    @media all and (-ms-high-contrast: none) and ${({ theme }) => theme.devices.desktop} {
      max-width: 200px;
      height: 100%;
    }
  }
`;
