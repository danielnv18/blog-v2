import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --font-primary: 'Fira Sans', sans-serif;
    --font-secondary: 'Libre Baskerville', serif;
    --color-primary: #D95736;
    --color-primary-active: #BF4526;
    --color-text-primary: #222426;
    --color-text-secondary: #909499;
    --color-white: #FFF
  }
  @media (prefers-color-scheme: dark) {
		--color-white: #222426;
		--color-text-primary: #ffffff;
	}
  html {
    font-size: 62.5%;
    overflow-x: hidden;
  }
  .menu-active body,
  html.menu-active {
    overflow-y: hidden;
  }
  body {
    font-family: var(--font-primary);
    font-size: 1em;
    line-height: 1.75em;
    font-weight: 400;
    color: var(--color-text-primary);
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    background: var(--color-white);
    
  }
`;

export const theme = {
  breakpointLarge: "960px",
  breakpointMedium: "640px",
  breakpointSmall: "480px",
  inner: "calc(64rem + 8vw)",
};
