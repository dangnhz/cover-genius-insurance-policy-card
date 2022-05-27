import styled from "styled-components";

interface Props {
  className?: string;
  isActive: boolean;
}

export const StyledPolicyCard = styled.div<Props>`
  background-color: ${({ theme }) => theme.colors.cardBgColor};
  border-radius: 4px;
  padding: 16px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  cursor: pointer;
  box-shadow: ${({ theme, isActive }) => isActive && theme.boxShadow};

  @media ${({ theme }) => theme.devices.tablet} {
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr 1fr;
    border-radius: 3px;
  }

  @media ${({ theme }) => theme.devices.tablet} {
    grid-template-rows: repeat(2, 1fr);
  }

  @media all and (-ms-high-contrast: none) {
    position: relative;
    display: block;
  }

  &:not(:last-of-type) {
    margin-bottom: 16px;

    @media (min-width: 768px) {
      margin-bottom: 24px;
    }

    @media (min-width: 1200px) {
      margin-bottom: 32px;
    }
  }
`;
