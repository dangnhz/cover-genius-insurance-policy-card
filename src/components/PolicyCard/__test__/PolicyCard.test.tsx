import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import PolicyCard from "../index";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";

const mockPolicy = {
  id: "TRAVEL-COVER-INS",
  type: "travel",
  title: "London to Paris",
  description: "Baggage Cover; Medical Cover; Cancellation Cover",
  status: "active",
  premium: 106.65,
  premium_formatted: "AUD $106.65",
  payment_date: "2019-10-10T13:29:38.814849Z",
  coverage_start_date: "2019-11-17",
  coverage_end_date: "2019-11-19",
  renewal: null,
  partner: {
    id: "labore",
    name: "Labore Inc.",
    logo: "https://s3-ap-southeast-2.amazonaws.com/cg-frontend-tests/labore.svg",
  },
};

const MockPolicyCard = () => (
  <ThemeProvider theme={theme}>
    <PolicyCard index={4} policy={mockPolicy} />
  </ThemeProvider>
);

beforeEach(() => render(<MockPolicyCard />));

it('card should toggle class "is-active" after each click', () => {
  const card = screen.getByTestId("policy-card-item-4");
  expect(card).not.toHaveClass("is-active");
  fireEvent.click(card);
  expect(card).toHaveClass("is-active");
  fireEvent.click(card);
  expect(card).not.toHaveClass("is-active");
});
