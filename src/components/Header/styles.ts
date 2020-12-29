import styled from "styled-components";

export const StyledHeader = styled.header`
  position: relative;
  padding-top: calc(16rem + 4vw);

  &.has-cover {
    padding: calc(16rem + 8vw) 0 calc(4rem + 6vw);
    margin-bottom: calc(4rem + 2vw);
    background: #000;
    overflow: hidden;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

    &:after {
      display: none;
    }
  }

  .box {
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

  .title {
    display: block;
    margin: 0;
    padding: 0;
    font-weight: 700;
    font-size: 6em;
    line-height: 1em;
    text-decoration: none;
    color: var(--color-text-primary);
  }

  .description {
    font-family: var(--font-secondary);
    display: block;
    margin-top: 1rem;
    padding: 0;
    font-size: 3em;
    line-height: 1.33334em;
    color: var(--color-text-secondary);
  }

  .gatsby-image-wrapper {
    position: absolute !important;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 5;
    background: no-repeat scroll center center / cover #000;
    animation: 0.5s ease-in forwards fadein;
    display: flex;
    align-items: center;
    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 66.666%;
      left: 0;
      bottom: 0;
      z-index: 8;
      background: -webkit-linear-gradient(
        top,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.333) 100%
      );
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.333) 100%
      );
    }
    & > img {
      position: relative;
      display: block;
      width: 100%;
      height: 100%;
      margin: 0;
      z-index: 6;
      object-fit: cover;
    }
  }
`;
