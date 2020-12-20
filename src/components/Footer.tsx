import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  position: relative;
  z-index: 20;
  padding-top: calc(12rem + 8vw);
  padding-bottom: 4rem;
  margin-top: auto;

  .inner {
    max-width: none;
    padding: 0 4rem;
  }

  .nav-wrapper {
    display: flex;
    padding: 0 4rem;
    @media only screen and (max-width: ${(props) =>
        props.theme.breakpointMedium}) {
      flex-direction: column;
      text-align: center;
    }
  }

  .nav-copy {
    display: block;
    width: 100%;
    font-size: 1.6em;
    line-height: 2rem;
    color: var(--color-text-secondary);
    @media only screen and (max-width: ${(props) =>
        props.theme.breakpointMedium}) {
      margin-bottom: 1rem;
    }
  }

  .nav-credits {
    flex-shrink: 0;
    display: block;
    font-size: 1.6em;
    line-height: 2rem;
    color: var(--color-text-secondary);
    a {
      color: inherit;
      text-decoration: none;
      font-weight: 500;
    }
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <nav className="nav-wrapper">
        <span className="nav-copy">Attila © 2020</span>
        <span className="nav-credits">
          Published with <a href="https://ghost.org">Ghost</a> • Theme{" "}
          <a href="https://github.com/zutrinken/attila">Attila</a>
        </span>
      </nav>
    </StyledFooter>
  );
}

export default Footer;
