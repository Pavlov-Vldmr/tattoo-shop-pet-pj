import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import wa from "../../assets/images/icons/wa.svg";

function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={[styles.headerContainer, "container"].join(" ")}>
          <NavLink to="/" className={styles.logo}>
            <span className={styles.text}>
              Sandro <span className={styles.accent}>Luz</span>
            </span>
            <span>Tattoo</span>
            <span>Shop</span>
          </NavLink>

          <nav>
            <ul>
              <lI>
                <NavLink className="nav-link" to="/services">
                  Serviços
                </NavLink>
              </lI>

              <lI>
                <NavLink className="nav-link" to="/about">
                  Sobre Mim
                </NavLink>
              </lI>
              <lI>
                <NavLink className="nav-link" to="/contacts">
                  Contato
                </NavLink>
              </lI>
            </ul>
            <NavLink className={styles.wa}>
              <img src={wa} width={16} height={16} alt="" />
              <span className={"text-muted"}>(+55 11) 99999 9999</span>
            </NavLink>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
