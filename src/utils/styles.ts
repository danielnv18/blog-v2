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

export const Post = styled.article`
  position: relative;
  z-index: 10;
`;

export const PostContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.75em;
  line-height: 2em;
  * {
    min-width: 100%;
    max-width: 100%;
    box-sizing: border-box;
  }
  p {
    font-family: var(--font-secondary);
    margin: 0 0 4rem;
  }
  a {
    color: inherit;
    text-decoration: none;
    font-weight: 400;
    box-shadow: inset 0 -2px 0 var(--color-primary);
    transition: all ease-out 0.1s;
  }

  h1,
  h2,
  h3,
  h5,
  h6 {
    line-height: 1.25em;
    margin: 0 0 4rem;
    text-rendering: optimizeLegibility;
    color: var(--color-content-black);
  }
  h2 {
    font-size: 3rem;
    text-indent: -1px;
  }
  h3 {
    font-size: 2.4rem;
  }
  h4 {
    font-size: 2rem;
  }
  h5,
  h6 {
    font-size: 2rem;
    font-weight: 500;
  }
  ol,
  ul {
    font-family: var(--font-secondary);
    margin: 0 0 4rem;
    padding-left: 2em;
    box-sizing: border-box;
  }
  ul {
    list-style: none;
  }
  li {
    position: relative;
  }
  blockquote {
    font-family: var(--font-secondary);
    margin: 0 0 4rem;
    padding: 0.25em 1em;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border-left: 0.25em solid var(--color-primary);
    font-style: italic;
    font-weight: 400;
    * {
      margin: 0 0 1em;
      font-family: inherit;
      color: inherit;
      &:first-child {
        margin-top: 0;
      }
      &:last-child {
      }
    }
  }
`;
