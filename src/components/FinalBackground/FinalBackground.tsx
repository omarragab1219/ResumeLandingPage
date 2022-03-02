import styles from "./FinalBackground.module.css";
import React, { useState, useEffect } from "react";
import Background from "../Background/Background";

import SouceCodeButton from "../SouceCodeButton/SouceCodeButton";
import Project from "../Project/Project";
import BackgroundAndArcBalls from "../BackgroundAndArcBalls/BackgroundAndArcBalls";

const FinalBackground = () => {
  return (
    <div className={styles.container0}>
      <div className={styles.container}>
        <div className={styles.Project}>
          <Project />
        </div>

        <div className={styles.BackgroundAndArcBalls}>
          <BackgroundAndArcBalls />
        </div>
      </div>
    </div>
  );
};

export default FinalBackground;
