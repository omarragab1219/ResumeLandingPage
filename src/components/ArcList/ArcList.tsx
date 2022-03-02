import styles from "./ArcList.module.css";
import React, { useState, useEffect } from "react";
import ArcReactor from "../ArcReactor/ArcReactor";

const ArcList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.arcTestContainer}>
        <div className={styles.arcTest}>{/* <ArcReactor /> */}</div>
      </div>
    </div>
  );
};

export default ArcList;
