import styles from "./DiagonalScrollIndicator.module.css";
import React, { useState, useEffect } from "react";
import ScrollIndicator from "../ScrollIndicator/ScrollIndicator";

const DiagonalScrollIndicator = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top1}>
        <ScrollIndicator
          width={100}
          rotation={230}
          delay={5}
          acceleration={1.45}
        />
      </div>
      <div className={styles.top2}>
        <ScrollIndicator
          width={100}
          rotation={310}
          delay={5}
          acceleration={1.45}
        />
      </div>
      {/* -------------------------------------------------------------------------- */}
      <div className={styles.mid1}>
        <ScrollIndicator
          width={150}
          rotation={310}
          delay={41}
          acceleration={1.45}
        />
      </div>
      <div className={styles.mid2}>
        <ScrollIndicator
          width={150}
          rotation={230}
          delay={41}
          acceleration={1.45}
        />
      </div>
      {/* -------------------------------------------------------------------------- */}
      <div className={styles.bottom1}>
        <ScrollIndicator
          width={200}
          rotation={310}
          delay={94}
          acceleration={5.4}
        />
      </div>
      <div className={styles.bottom2}>
        <ScrollIndicator
          width={150}
          rotation={230}
          delay={94}
          acceleration={7.2}
        />
      </div>
    </div>
  );
};

export default DiagonalScrollIndicator;
