import React from "react";
import styled from "styled-components";

const NavHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 400;
  transition: all ease-out 0.3s;
`;
const NavClose = styled.div`
  position: fixed;
  z-index: 350;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.2;
  display: none;
`;

function Navigation() {
  return (
    <>
      <NavHeader>
        <nav className="nav-wrapper">
          <ul role="navigation" aria-label="Navigation">
            <li className="nav-home active" role="presentation">
              <a href="https://attila.zutrinken.com/">
                <span>Home</span>
              </a>
            </li>
            <li className="nav-tag" role="presentation">
              <a href="https://attila.zutrinken.com/tag/getting-started/">
                <span>Tag</span>
              </a>
            </li>
            <li className="nav-author" role="presentation">
              <a href="https://attila.zutrinken.com/author/ghost/">
                <span>Author</span>
              </a>
            </li>
            <li className="nav-download" role="presentation">
              <a href="https://github.com/zutrinken/attila/releases">
                <span>Download</span>
              </a>
            </li>
          </ul>

          <ul className="nav-side">
            <li className="nav-twitter">
              <a
                title="Twitter"
                href="https://twitter.com/tryghost"
                target="_blank"
              >
                <i className="icon icon-twitter"></i>
                <span>Twitter</span>
              </a>
            </li>
            <li className="nav-facebook">
              <a
                title="Facebook"
                href="https://www.facebook.com/ghost"
                target="_blank"
              >
                <i className="icon icon-facebook"></i>
                <span>Facebook</span>
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
      </NavHeader>
      <NavClose />
    </>
  );
}

export default Navigation;
