import React from "react";
import { StyledFooter } from "./styles";

function Footer() {
  return (
    <StyledFooter>
      <nav className="nav-wrapper">
        <span className="nav-copy">
          Daniel Noyola &copy; 2017 - {new Date().getFullYear()}
        </span>
        {/* <span className="nav-credits">
          Published with <a href="https://ghost.org">Ghost</a> • Theme{" "}
          <a href="https://github.com/zutrinken/attila">Attila</a>
        </span> */}
      </nav>
    </StyledFooter>
  );
}

export default Footer;
