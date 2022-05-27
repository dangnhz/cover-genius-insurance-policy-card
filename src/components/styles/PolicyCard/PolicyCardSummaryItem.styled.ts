import styled from "styled-components";

export const StyledPolicyCardSummaryItem = styled.div`
  display: none;

  &.coverage-date {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
  }

  @media ${({ theme }) => theme.devices.tablet} {
    display: block;

    &:not(:last-of-type) {
      padding-right: 1rem;
      margin-right: 1rem;
      border-right: 1px solid ${({ theme }) => theme.colors.divider};
    }
  }

  .value {
    font-family: ${({ theme }) => theme.fonts.fontHeading};
    font-style: normal;
    font-weight: 390;
    font-size: 16px;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.textHeadingColor};

    time {
      text-transform: uppercase;
    }
  }

  .label {
    font-family: ${({ theme }) => theme.fonts.fontBody};
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: ${({ theme }) => theme.colors.textBodyColor};
  }
`;
