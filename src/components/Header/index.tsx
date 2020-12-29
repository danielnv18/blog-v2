import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import { StyledHeader } from "./styles";
import { Inner } from "../../utils/styles";
import classnames from "classnames";
import { SanityImageFluid } from "../../types";

export interface HeaderProps {
  title: string;
  description?: string;
  info?: string;
  meta?: string;
  cover?: SanityImageFluid;
}

function Header(props: HeaderProps) {
  return (
    <StyledHeader
      className={classnames("header", { "has-cover": props.cover })}
    >
      <Inner>
        {/* <div className={classnames({ box: isUndefined(props.cover) })}> */}
        {props.info ? <span className="info">{props.info}</span> : null}
        <h1 className="title">{props.title}</h1>
        {props.description ? (
          <span className="description">{props.description}</span>
        ) : null}
        {props.cover ? <Img fluid={props.cover} /> : null}
        {/* </div> */}
      </Inner>
    </StyledHeader>
  );
}

export default Header;
