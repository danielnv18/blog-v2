import React from "react";
import { StyledHeader } from "./styles";

function Header() {
  return (
    <StyledHeader>
      <div className="inner">
        <div className="box blog-box">
          <h1 className="blog-name">Daniel Noyola</h1>
          <span className="blog-description">booooooooo</span>
        </div>
      </div>
    </StyledHeader>
  );
}

export default Header;
