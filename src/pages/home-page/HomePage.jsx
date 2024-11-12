import React from "react";
import styles from "./HomePage.module.scss";
import portrait from "../../assets/images/Portrait.png";

function HomePage() {
  return (
    <>
      <div className={styles.home}>
        <div className={[styles.homeContainer, "container"].join(" ")}>
          <span className={styles.homeBgText}>tattoo</span>
          <div className={styles.heroText}>
            <h1>INSPIRE-SE</h1>
            <h1>EXPRESSE-SE</h1>
            <h1 className="brand-color">TATUE-SE</h1>
          </div>
          <img
            src={portrait}
            className={styles.portrait}
            // height={100}
            alt="tattoo master"
          />
        </div>
      </div>
    </>
  );
}

export default HomePage;
