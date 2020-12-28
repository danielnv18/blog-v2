import React from "react";
import { StyledHeader } from "./styles";
import { Inner } from "../../utils/styles";

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
      <Inner>
        <div className="box">
          <h1 className="title">{props.title}</h1>
          {props.description ? (
            <span className="description">{props.description}</span>
          ) : null}
        </div>
      </Inner>
    </StyledHeader>
  );
}

export default Header;
