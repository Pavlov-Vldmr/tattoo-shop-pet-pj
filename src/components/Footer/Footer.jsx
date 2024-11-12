import React from "react";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={[styles.footerContainer, "container"].join(" ")}>
          <span className={"text-muted"}>Sandro Luz Tattoo Shop</span>
          <span className={"text-muted"}>
            Rua Limoeiro, 1000 - Catalão - SP
          </span>
          <span className={"text-muted"}>(+55 11) 99999 9999</span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
