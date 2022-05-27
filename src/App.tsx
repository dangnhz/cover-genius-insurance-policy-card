import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { Container } from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/Global";
import "./assets/fonts.css";
import InsurancePolicy from "./features/insurance-policy/InsurancePolicy";

const App : React.FC = () => {

  return (
    <ThemeProvider theme={theme}>
      <>
       <GlobalStyles />
      <div className="app">
        <Container>
          <InsurancePolicy/>
        </Container>
      </div>
      </>
    </ThemeProvider>
  );
};

export default App;
