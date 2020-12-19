import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./src/utils/styles";

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {element}
  </ThemeProvider>
);
