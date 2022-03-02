import styles from "./MobileDiagonal.module.css";
import React, { useState, useEffect } from "react";
import ScrollIndicator from "../ScrollIndicator/ScrollIndicator";

const dealy = 12;
const acceleration = 0.9;

const MobileDiagonal = () => {
  return (
    <div className={styles.container0}>
      <div className={styles.container1}>
        <div className={styles.container}>
          <div className={styles.topRightDown0}>
            <ScrollIndicator
              width={300}
              rotation={270} //230
              delay={dealy}
              acceleration={acceleration}
            />
          </div>

          {/* -------------------------------------------------------------------------- */}
          {/* -------------------------------------------------------------------------- */}

          {/* -------------------------------------------------------------------------- */}

          <div className={styles.topLeftDown0}>
            <ScrollIndicator
              width={300}
              rotation={270} //310
              delay={dealy}
              acceleration={acceleration}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileDiagonal;
