import styled from "styled-components";

type Props = {
  className: string;
};

export const StyledSkeletonElement = styled.div<Props>`
  background: #ddd;
  overflow: hidden;
  border-radius: 4px;

  &.text {
    width: 100%;
    height: 12px;
    min-width: 100px;
  }

  &.circle {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }

  &.heading {
    width: 50%;
    height: 20px;
    margin-bottom: 8px;
  }

  &.logo {
    width: 80%;
    height: 100%;
    max-width: 80px;

    @media ${({ theme }) => theme.devices.tablet} {
      height: 70%;
    }

    @media ${({ theme }) => theme.devices.tablet} {
      height: 60%;
      width: 90%;
      max-width: 210px;
    }
  }
`;
