import React from "react";
import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.navWrapper}>
        <span className={styles.navCopy}>
          Daniel Noyola &copy; 2017 - {new Date().getFullYear()}
        </span>
      </nav>
    </footer>
  );
}

export default Footer;
