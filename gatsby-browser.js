import React from "react";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { GlobalStyle, theme } from "./src/utils/styles";

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <Normalize />
    <GlobalStyle />
    {element}
  </ThemeProvider>
);
