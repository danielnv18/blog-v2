import React from "react";
import { Link } from "gatsby";
import { WindowLocation } from "@reach/router";
import classnames from "classnames";
import { NavClose, NavHeader, NavControl } from "./styles";

interface NavigationProps {
  location: WindowLocation;
}

function Navigation({ location }: NavigationProps) {
  const isActive = (currentpathname: string, pathname: string) =>
    currentpathname === pathname;
  return (
    <>
      <NavHeader>
        <nav className="nav-wrapper">
          <ul role="navigation" aria-label="Navigation">
            <li
              className={classnames("nav-home", {
                active: isActive(location.pathname, "/"),
              })}
              role="presentation"
            >
              <Link to="/">
                <span>Home</span>
              </Link>
            </li>
            <li
              className={classnames("nav-tag", {
                active: isActive(location.pathname, "/tags/"),
              })}
              role="presentation"
            >
              <Link to="/tags/">
                <span>Tags</span>
              </Link>
            </li>
            <li
              className={classnames("nav-about", {
                active: isActive(location.pathname, "/about"),
              })}
              role="presentation"
            >
              <Link to="/about/">
                <span>About</span>
              </Link>
            </li>
          </ul>

          <ul className="nav-side">
            <li className="nav-twitter">
              <a
                title="Twitter"
                href="https://twitter.com/danielnv18"
                target="_blank"
              >
                <i className="icon icon-twitter"></i>
                <span>Twitter</span>
              </a>
            </li>
            <li className="nav-facebook">
              <a
                title="Github"
                href="https://www.github.com/danielnv18"
                target="_blank"
              >
                <i className="icon icon-github"></i>
                <span>Github</span>
              </a>
            </li>
            <li className="nav-rss">
              <a
                title="RSS"
                href="https://attila.zutrinken.com/rss/"
                target="_blank"
              >
                <i className="icon icon-rss"></i>
                <span>RSS</span>
              </a>
            </li>
            <li className="nav-search">
              <a title="Search">
                <i className="icon icon-search"></i>
                <span>Search</span>
              </a>
            </li>
          </ul>
        </nav>
        <NavControl>
          <div className="inner">
            <a className="nav-menu">
              <i className="icon icon-menu"></i>Menu
            </a>
            <a className="nav-search" title="Search">
              <i className="icon icon-search"></i>
              <span>Search</span>
            </a>
          </div>
        </NavControl>
      </NavHeader>
      <NavClose />
    </>
  );
}

export default Navigation;
