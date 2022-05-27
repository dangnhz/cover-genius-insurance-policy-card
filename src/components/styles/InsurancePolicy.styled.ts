import styled from "styled-components";

export const StyledInsurancePolicy = styled.div`
  padding: 16px 0;

  @media ${({ theme }) => theme.devices.tablet} {
    padding: 32px 0;
  }

  @media ${({ theme }) => theme.devices.tablet} {
    padding: 48px 0;
  }
`;
