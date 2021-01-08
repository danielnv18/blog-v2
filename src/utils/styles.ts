import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  .menu-active {
    .nav-close {
      @media only screen and (max-width: ${(props) => theme.breakpointMedium}) {
        display: block;
      }
    }

    .nav-header {
      transform: translate3d(0,0,0);
      .nav-wrapper-control {
        background: var(--color-neutral-15);
        color: var(--color-text-secondary);
        border-color: var(--color-border-dark);
        @supports (-webkit-backdrop-filter: blur(2rem)) {
          background: rgba(34,36,38,0.9);
          -webkit-backdrop-filter: blur(2rem);
        }

        a {
          &:focus,
          &:hover {
            color: var(--color-text-primary-dark);
          }
        }
      }
    }
  }
`;

export const theme = {
  breakpointLarge: "960px",
  breakpointMedium: "640px",
  breakpointSmall: "480px",
  inner: "calc(64rem + 8vw)",
};

export const Inner = styled.div`
  max-width: calc(64rem + 8vw);
  margin: 0 auto;
  padding: 0 8rem;
  @media only screen and (max-width: ${(props) =>
      props.theme.breakpointMedium}) {
    padding: 0 4rem;
  }
`;
