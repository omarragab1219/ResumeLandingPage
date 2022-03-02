import styles from "./ArcReactor.module.css";
import React, { useState, useEffect } from "react";

const ArcReactor = () => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.fullpage_wrapper}> */}
      <div className={styles.reactor_container}>
        <div
          className={`${styles.reactor_container_inner} ${styles.circle} ${styles.abs_center}`}
        ></div>

        <div
          className={`${styles.tunnel} ${styles.circle} ${styles.abs_center}`}
        ></div>
        <div
          className={`${styles.core_wrapper} ${styles.circle} ${styles.abs_center}`}
        ></div>
        <div
          className={`${styles.core_outer} ${styles.circle} ${styles.abs_center}`}
        ></div>
        <div
          className={`${styles.core_inner} ${styles.circle} ${styles.abs_center}`}
        ></div>
        <div className={styles.coil_container}>
          <div className={`${styles.coil} ${styles.coil_1}`}></div>
          <div className={`${styles.coil} ${styles.coil_2}`}></div>
          <div className={`${styles.coil} ${styles.coil_3}`}></div>
          <div className={`${styles.coil} ${styles.coil_4}`}></div>
          <div className={`${styles.coil} ${styles.coil_5}`}></div>
          <div className={`${styles.coil} ${styles.coil_6}`}></div>
          <div className={`${styles.coil} ${styles.coil_7}`}></div>
          <div className={`${styles.coil} ${styles.coil_8}`}></div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default ArcReactor;
