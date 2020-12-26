import styled from "styled-components";

export const ArticleTeaser = styled.article`
  position: relative;
  z-index: 10;
  .inner {
    max-width: calc(64rem + 8vw);
    margin: 0 auto;
    padding: 0 8rem;
  }
  .post-box {
    padding-top: calc(4rem + 2vw);
    padding-bottom: calc(4rem + 2vw);
    border-bottom: 1px solid #e1e3e6;
  }
  .post-title {
    position: relative;
    z-index: 10;
    margin: 0 0 2rem;
    font-size: 4em;
    line-height: 1.25em;
    font-weight: 700;
    text-indent: -1px;
    color: #000;
  }
  .post-meta {
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 2rem;
    color: #909499;
  }
`;
