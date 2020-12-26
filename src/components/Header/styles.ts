import styled from "styled-components";

export const StyledHeader = styled.header`
  position: relative;
  padding-top: calc(16rem + 4vw);

  &.has-cover {
    padding-top: calc(24rem + 8vw);
    color: var(--color-white);
    background: #000;
    overflow: hidden;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

    &:after {
      display: none;
    }
  }

  .blog-box {
    position: relative;
    z-index: 10;
    padding-bottom: calc(4rem + 2vw);
    text-align: center;
    border-bottom: 1px solid var(--color-neutral-25);
  }

  &.has-cover .blog-box {
    border: none;
    padding-bottom: calc(8rem + 4vw);
  }
`;
