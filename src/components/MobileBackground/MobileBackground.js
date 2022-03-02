import styles from "./MobileBackground.module.css";
import React, { useState, useEffect } from "react";
import MobileDiagonal from "../MobileDiagonal/MobileDiagonal";

const MobileBackground = () => {
  return (
    <div className={styles.container}>
      <div className={styles.DiagonalScrollIndicator}>
        <MobileDiagonal />
      </div>
    </div>
  );
};

export default MobileBackground;
