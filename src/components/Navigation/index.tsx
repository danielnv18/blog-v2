import React from "react";
import { Link } from "gatsby";
import { WindowLocation } from "@reach/router";
import classnames from "classnames";
import { Inner } from "../../utils/styles";
import { NavClose, NavHeader, NavControl } from "./styles";
import styles from "./navigation.module.css";
import IconMenu from "../../icons/bars-solid.svg";
import IconSearch from "../../icons/search-solid.svg";

interface NavigationProps {
  location: WindowLocation;
}

function Navigation({ location }: NavigationProps) {
  const isActive = (currentpathname: string, pathname: string) =>
    currentpathname === pathname;

  const toggleActiveClass = () =>
    document.querySelector("html").classList.toggle("menu-active");

  const removeActiveClass = () =>
    document.querySelector("html").classList.remove("menu-active");

  return (
    <>
      <div className={styles.navHeader}>
        <nav className={styles.navWrapper}>
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
                active: isActive(location.pathname, "/about/"),
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
            <li className="nav-github">
              <a
                title="Github"
                href="https://www.github.com/danielnv18"
                target="_blank"
              >
                <i className="icon icon-github"></i>
                <span>Github</span>
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
        <NavControl className="nav-wrapper-control">
          <Inner className="inner">
            <a className="nav-menu" onClick={toggleActiveClass}>
              <IconMenu className="icon icon-menu" />
              Menu
            </a>
            <a className="nav-search" title="Search">
              <IconSearch className="icon icon-search" />
              <span>Search</span>
            </a>
          </Inner>
        </NavControl>
      </div>
      <div className={styles.navClose} onClick={removeActiveClass} />
    </>
  );
}

export default Navigation;
