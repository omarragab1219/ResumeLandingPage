import styles from "./LandingPage.module.css";
import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Project from "../../components/Project/Project";
import Main from "../../components/Main/Main";
import MoveTest from "../../components/MoveTest/MoveTest";

import FinalBackground from "../../components/FinalBackground/FinalBackground";

const LandingPage = () => {
  return (
    <div className={styles.container}>
      {/* <MoveTest /> */}
      <div className={styles.test}>
        <Main />
      </div>

      {/* <Project /> */}
      <FinalBackground />
      <div className={styles.Footer}>{/* <Footer /> */}</div>
    </div>
  );
};

export default LandingPage;
