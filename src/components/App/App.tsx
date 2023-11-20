import React from "react";
import { GlobalStyle } from "../../styles/globalStyle";
import { ThemeProvider } from "styled-components";
import { LightTheme } from "../../styles/theme/lightTheme";
import { Router } from "../Router/Router";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />

      <ThemeProvider theme={LightTheme}>
        <Router />
      </ThemeProvider>
    </React.Fragment>
  );
}

export { App };
