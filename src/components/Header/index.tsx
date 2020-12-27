import React from "react";
import { StyledHeader } from "./styles";

export interface HeaderProps {
  title: string;
  description?: string;
  info?: string;
  meta?: string;
  cover?: string;
}

function Header(props: HeaderProps) {
  return (
    <StyledHeader>
      <div className="inner">
        <div className="box blog-box">
          <h1 className="blog-name">{props.title}</h1>
          <span className="blog-description">booooooooo</span>
        </div>
      </div>
    </StyledHeader>
  );
}

export default Header;
