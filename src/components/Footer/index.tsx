import React from "react";
import { footer, navWrapper, navCopy } from "./footer.module.css";

function Footer() {
  return (
    <footer className={footer}>
      <nav className={navWrapper}>
        <span className={navCopy}>
          Daniel Noyola &copy; 2017 - {new Date().getFullYear()}
        </span>
      </nav>
    </footer>
  );
}

export default Footer;
