import styles from "./BackgroundAndArcBalls.module.css";
import React, { useState, useEffect } from "react";
import ArcReactor from "../ArcReactor/ArcReactor";
import Background from "../Background/Background";
import MobileBackground from "../MobileBackground/MobileBackground";

const BackgroundAndArcBalls = () => {
  return (
    <div className={styles.container}>
      {/* <Project /> */}
      <div className={styles.Background}>
        <Background />
      </div>
      <div className={styles.MobileBackground}>
        <MobileBackground />
      </div>
      {/* <div className={styles.Background}>
        <Background />
      </div> */}
      <div className={styles.arcBalls}>
        <div className={styles.arcBallsCenter}>
          <div className={styles.arc0Negative1}>
            <ArcReactor />
          </div>
          <div className={styles.arc0}>
            <ArcReactor />
          </div>
          <div className={styles.arc1}>
            <ArcReactor />
          </div>
          <div className={styles.arc2}>
            <ArcReactor />
          </div>
          <div className={styles.arc3}>
            <ArcReactor />
          </div>
          <div className={styles.arc4}>
            <ArcReactor />
          </div>
          <div className={styles.arc5}>
            <ArcReactor />
          </div>
          <div className={styles.arc6}>
            <ArcReactor />
          </div>
          <div className={styles.arc7}>
            <ArcReactor />
          </div>
          <div className={styles.arc8}>
            <ArcReactor />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundAndArcBalls;
