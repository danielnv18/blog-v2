import styled from "styled-components";

export const ArticleTeaser = styled.article`
  position: relative;
  z-index: 10;

  .box {
    padding-top: calc(4rem + 2vw);
    padding-bottom: calc(4rem + 2vw);
    border-bottom: 1px solid var(--color-neutral-90);
  }
  .post-title {
    position: relative;
    z-index: 10;
    margin: 0 0 2rem;
    font-size: 4em;
    line-height: 1.25em;
    font-weight: 700;
    text-indent: -1px;
    color: var(--color-black);
    a {
      text-decoration: none;
      color: inherit;
      font-weight: inherit;
    }
  }
  .post-meta {
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 2rem;
    color: #909499;
    a {
      display: inline-block;
      text-decoration: none;
      color: inherit;
    }
  }
  .post-excerpt {
    margin: 1em 0 0;
    font-family: var(--font-secondary);
    font-size: 2em;
    line-height: 1.5em;
  }
`;
