import styles from "./Footer.module.css";
import React, { useState, useEffect } from "react";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <h3 className={styles.titleName}>Omar Ragab</h3>
        <p>Full Stack Develover</p>
        <span className={styles.copyRight}>
          ©2021 Omar Ragab. All rights reserved.
        </span>
      </div>
      {/* -------------------------------------------------------------------------- */}
      <div className={styles.rightSide}>
        <ul>
          <li className={styles.link}>
            <a
              href="https://www.linkedin.com/in/omar-ragab-8aa5101b6/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </li>
          <li className={styles.link}>
            <a
              href="https://github.com/omarragab1219"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li className={styles.link}>
            <a>oragab1518@gmail.com</a>
          </li>
          <li className={styles.link}>
            <a>(727) 667-7820</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
