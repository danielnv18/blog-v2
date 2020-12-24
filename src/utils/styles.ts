import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --font-primary: 'Fira Sans', sans-serif;
    --font-secondary: 'Libre Baskerville', serif;
    --color-neutral-98: #f7f8fa;
    --color-neutral-90: #e1e3e6;
    --color-neutral-80: #c4c7cc;
    --color-neutral-60: #909499;
    --color-neutral-25: #3b3d40;
    --color-neutral-15: #222426;
    
    --color-primary: #D95736;
    --color-primary-active: #BF4526;
    --color-text-primary: #222426;
    --color-text-secondary: #909499;
    --color-white: #ffffff;
    
  }
  html {
    font-size: 62.5%;
    overflow-x: hidden;
    @media (prefers-color-scheme: dark) {
      --color-white: #222426;
      --color-text-primary: #ffffff;
    }
  }
  .menu-active body,
  html.menu-active {
    overflow-y: hidden;
  }
  body {
    font-family: var(--font-primary);
    font-size: 1em;
    line-height: 1.5em;
    font-weight: 400;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    color: var(--color-text-primary);
    background: var(--color-white);
    
  }
`;

export const theme = {
  breakpointLarge: "960px",
  breakpointMedium: "640px",
  breakpointSmall: "480px",
  inner: "calc(64rem + 8vw)",
};
