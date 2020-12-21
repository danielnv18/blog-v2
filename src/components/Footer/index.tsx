import React from "react";
import { StyledFooter } from "./styles";

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
