import { screen, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import InsurancePolicy from "../InsurancePolicy";
import { Provider } from "react-redux";
import store from "../../../app/store";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";

const MockInsurancePolicy = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <InsurancePolicy />
    </ThemeProvider>
  </Provider>
);

beforeEach(() => render(<MockInsurancePolicy />));

it("should render insurance policy header text", () => {
  const header = screen.getByRole("heading", { name: /protection/i });
  expect(header).toBeInTheDocument();
});

it("should render insurance policy skeleton when insurance policy component is mounted", () => {
  const policySkeletonElement = screen.getByTestId("policy-skeleton-item-0");
  expect(policySkeletonElement).toBeInTheDocument();
});

it("should render insurance policy card", async () => {
  await waitFor(
    () => expect(screen.getByTestId("policy-card-item-0")).toBeInTheDocument(),
    { timeout: 5000 }
  );
});
