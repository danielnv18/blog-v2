import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --font-primary: 'Fira Sans', sans-serif;
    --font-secondary: 'Libre Baskerville', serif;
    --color-primary: #D95736;
    --color-primary-active: #BF4526;
  }
`;

export const theme = {
  breakpointLarge: "960px",
  breakpointMedium: "640px",
  breakpointSmall: "480px",
  inner: "calc(64rem + 8vw)",
};
