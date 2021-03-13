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
    &::hover,
    &::focus {
      box-shadow: inset 0 -3px 0 var(--color-primary-active);
    }
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
    > li:before {
      position: absolute;
      width: 1.5em;
      margin-left: -2em;
      font-size: 1em;
      font-weight: 500;
      line-height: 2em;
      text-align: right;
      color: var(--color-primary);
      font-family: var(--font-primary);
    }
    ol,
    ul {
      padding-left: 30px;
      margin: 15px 0;
    }
  }
  ol {
    list-style-type: none;
    counter-reset: item;
    > li:before {
      content: counter(item) ". " !important;
      counter-increment: item;
    }
  }
  ul {
    list-style: none;
    > li:before {
      margin-top: -1px;
      content: "—";
    }
  }
  li {
    position: relative;
  }
  hr {
    display: block;
    height: 1px;
    margin: 0 0 4rem;
    padding: 0;
    background: var(--color-background-contrast);
    border: 0;
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
  em,
  i {
    font-style: italic;
  }

  b,
  strong {
    font-weight: 700;
    color: var(--color-content-lead);
  }

  small {
    font-size: 0.9em;
  }

  dl {
    font-family: var(--font-secondary);
    margin: 0 0 4rem;
    padding-left: 30px;
    dt {
      font-weight: 500;
      font-size: 0.75em;
      line-height: 1.25em;
      font-weight: 700;
      margin-bottom: 0.33334em;
      font-family: var(--font-primary);
      ::before {
        content: "";
        position: absolute;
        width: 1em;
        height: 2px;
        margin-left: -30px;
        margin-top: 0.5em;
        background: var(--color-primary);
      }
    }
    dd {
      margin-left: 0;
      margin-bottom: 1em;
    }
  }

  code,
  tt {
    position: relative;
    margin: 0 1px;
    padding: 4px 8px;
    font-family: monospace, sans-serif;
    font-size: 0.75em;
    background: var(--color-background-secondary);
    border: 1px solid var(--color-background-contrast);
    top: -2px;
    white-space: pre-wrap;
  }

  code[class*="language-"],
  pre[class*="language-"] {
    background: none;
    font-family: Consolas, Menlo, Monaco, source-code-pro, Courier New,
      monospace;
    font-feature-settings: normal;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    margin-bottom: 0;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }
  /* Code blocks */
  pre[class*="language-"] {
    overflow: auto;
    padding: 1.3125rem;
  }
  pre[class*="language-"]::-moz-selection {
    /* Firefox */
    background: hsl(207, 4%, 16%);
  }
  pre[class*="language-"]::selection {
    /* Safari */
    background: hsl(207, 4%, 16%);
  }
  /* Text Selection colour */
  pre[class*="language-"]::-moz-selection,
  pre[class*="language-"] ::-moz-selection {
    text-shadow: none;
    background: hsla(0, 0%, 100%, 0.15);
  }
  pre[class*="language-"]::selection,
  pre[class*="language-"] ::selection {
    text-shadow: none;
    background: hsla(0, 0%, 100%, 0.15);
  }
  /* Inline code */
  :not(pre) > code[class*="language-"] {
    border-radius: 0.3em;
    background: var(--inlineCode-bg);
    color: var(--inlineCode-text);
    padding: 0.15em 0.2em 0.05em;
    white-space: normal;
  }
  .token.attr-name {
    color: rgb(173, 219, 103);
    font-style: italic;
  }
  .token.comment {
    color: rgb(128, 147, 147);
  }
  .token.string,
  .token.url {
    color: rgb(173, 219, 103);
  }
  .token.variable {
    color: rgb(214, 222, 235);
  }
  .token.number {
    color: rgb(247, 140, 108);
  }
  .token.builtin,
  .token.char,
  .token.constant,
  .token.function {
    color: rgb(130, 170, 255);
  }
  .token.punctuation {
    color: rgb(199, 146, 234);
  }
  .token.selector,
  .token.doctype {
    color: rgb(199, 146, 234);
    font-style: "italic";
  }
  .token.class-name {
    color: rgb(255, 203, 139);
  }
  .token.tag,
  .token.operator,
  .token.keyword {
    color: #ffa7c4;
  }
  .token.boolean {
    color: rgb(255, 88, 116);
  }
  .token.property {
    color: rgb(128, 203, 196);
  }
  .token.namespace {
    color: rgb(178, 204, 214);
  }
  pre[data-line] {
    padding: 1em 0 1em 3em;
    position: relative;
  }
  .gatsby-highlight-code-line {
    background-color: hsla(207, 95%, 15%, 1);
    display: block;
    margin-right: -1.3125rem;
    margin-left: -1.3125rem;
    padding-right: 1em;
    padding-left: 1.25em;
    border-left: 0.25em solid #ffa7c4;
  }
  .gatsby-highlight {
    margin-bottom: 1.75rem;
    margin-left: -1.3125rem;
    margin-right: -1.3125rem;
    border-radius: 10px;
    background: #011627;
    -webkit-overflow-scrolling: touch;
    overflow: auto;
  }
  @media (max-width: 672px) {
    .gatsby-highlight {
      border-radius: 0;
    }
  }
  .gatsby-highlight pre[class*="language-"] {
    float: left;
    min-width: 100%;
  }
`;
