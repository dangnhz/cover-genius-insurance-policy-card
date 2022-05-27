import styled from "styled-components";

export const StyledHeader = styled.h1`
  text-transform: uppercase;
  margin-bottom: 8px;
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 30px;
  color: ${({ theme }) => theme.colors.textHeadingColor};
  font-family: ${({ theme }) => theme.fonts.fontHeading};

  @media ${({ theme }) => theme.devices.tablet} {
    font-size: 32px;
    line-height: 40px;
    margin-bottom: 16px;
  }

  @media ${({ theme }) => theme.devices.tablet} {
    font-size: 40px;
    line-height: 50px;
    margin-bottom: 24px;
  }
`;
