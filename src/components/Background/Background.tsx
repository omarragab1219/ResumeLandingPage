import styles from "./Background.module.css";
import React, { useState, useEffect } from "react";
import DiagonalScrollIndicator from "../Diagonal2/DiagonalScrollIndicator";
import ArcReactor from "../ArcReactor/ArcReactor";
import MobileDiagonal from "../MobileDiagonal/MobileDiagonal";

const Background = () => {
  return (
    <div className={styles.container}>
      <div className={styles.DiagonalScrollIndicator}>
        <DiagonalScrollIndicator />
      </div>
    </div>
  );
};

export default Background;
