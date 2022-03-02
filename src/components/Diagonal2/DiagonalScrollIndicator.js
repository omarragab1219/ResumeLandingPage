import styles from "./DiagonalScrollIndicator.module.css";
import React, { useState, useEffect } from "react";
import ScrollIndicator from "../ScrollIndicator/ScrollIndicator";

// const dealy = 25;
// const acceleration = 1.05;
const dealy = 22;
const acceleration = 1.334;

const DiagonalScrollIndicator = () => {
  return (
    <div className={styles.container0}>
      <div className={styles.container1}>
        <div className={styles.container}>
          <div className={styles.topRightDown0}>
            <ScrollIndicator
              width={200}
              rotation={230}
              delay={dealy}
              acceleration={acceleration}
            />
          </div>
          <div className={styles.topRightDown1}>
            <ScrollIndicator
              width={200}
              rotation={230}
              delay={dealy}
              acceleration={acceleration}
            />
          </div>
          <div className={styles.topRightDown2}>
            <ScrollIndicator
              width={200}
              rotation={230}
              delay={dealy}
              acceleration={acceleration}
            />
          </div>

          <div className={styles.topRightDown3}>
            <ScrollIndicator
              width={200}
              rotation={230}
              delay={dealy}
              acceleration={acceleration}
            />
          </div>

          <div className={styles.topRightDown4}>
            <ScrollIndicator
              width={200}
              rotation={230}
              delay={dealy}
              acceleration={acceleration}
            />
          </div>
          <div className={styles.topRightDown5}>
            <ScrollIndicator
              width={200}
              rotation={230}
              delay={dealy}
              acceleration={acceleration}
            />
          </div>

          {/* -------------------------------------------------------------------------- */}
          {/* -------------------------------------------------------------------------- */}

          {/* -------------------------------------------------------------------------- */}
          <div className={styles.topLeftDown0}>
            <ScrollIndicator
              width={200}
              rotation={310}
              delay={dealy}
              acceleration={acceleration}
            />
          </div>
          <div className={styles.topLeftDown1}>
            <ScrollIndicator
              width={200}
              rotation={310}
              delay={dealy}
              acceleration={acceleration}
            />
          </div>
          <div className={styles.topLeftDown2}>
            <div className={styles.ArcReactor2}>{/* <ArcReactor /> */}</div>

            <ScrollIndicator
              width={200}
              rotation={310}
              delay={dealy}
              acceleration={acceleration}
            />
          </div>
          <div className={styles.topLeftDown3}>
            <ScrollIndicator
              width={200}
              rotation={310}
              delay={dealy}
              acceleration={acceleration}
            />
          </div>
          <div className={styles.topLeftDown4}>
            <ScrollIndicator
              width={200}
              rotation={310}
              delay={dealy}
              acceleration={acceleration}
            />
          </div>
          <div className={styles.topLeftDown5}>
            <ScrollIndicator
              width={200}
              rotation={310}
              delay={dealy}
              acceleration={acceleration}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiagonalScrollIndicator;
