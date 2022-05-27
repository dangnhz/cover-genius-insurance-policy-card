import styled from "styled-components";

interface Props {
  isActive: boolean;
}

export const StyledPolicyCardLabel = styled.div<Props>`
  padding-bottom: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
  margin-bottom: 8px;
  grid-column: 1 / 4;

  @media ${({ theme }) => theme.devices.tablet} {
    grid-column: 1 / 5;
    border-bottom: none;
    padding-bottom: 0;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
  }

  @media ${({ theme }) => theme.devices.tablet} {
    margin-right: 30px;
  }

  @media all and (-ms-high-contrast: none) and ${({ theme }) => theme.devices.tablet} {
    padding-right: 120px;
  }
  @media all and (-ms-high-contrast: none) and ${({ theme }) => theme.devices.tablet} {
    padding-right: 210px;
  }

  .arrow {
    display: none;
    transition: 300ms;
    transform: ${({ isActive }) => isActive && "rotate(90deg)"};

    @media ${({ theme }) => theme.devices.tablet} {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
      margin-right: 1rem;
    }

    svg {
      fill: ${({ isActive, theme }) => isActive && theme.colors.primary};

      #arrow-circle {
        stroke: ${({ theme }) => theme.colors.primary};

        @media ${({ theme }) => theme.devices.desktop} {
          stroke: ${({ theme }) => theme.colors.secondary};
        }
      }

      #arrow-right {
        @media ${({ theme }) => theme.devices.desktop} {
          d: ${({ isActive, theme }) =>
            isActive
              ? 'path("M22 29.5L27 24.5L22 19.5")'
              : 'path("m21 31.5 7.5-7.5-7.5-7.5")'};
        }
      }
    }
  }

  .content {
    width: 100%;

    .title {
      margin-bottom: 4px;
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;
      font-family: ${({ theme }) => theme.fonts.fontHeading};
      color: ${({ theme }) => theme.colors.textHeadingColor};

      @media ${({ theme }) => theme.devices.tablet} {
        font-size: 20px;
        line-height: 30px;
      }

      @media ${({ theme }) => theme.devices.desktop} {
        font-size: 24px;
      }
    }

    .description {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      font-family: ${({ theme }) => theme.fonts.fontBody};
      color: ${({ theme }) => theme.colors.textBodyColor};
    }
  }
`;
