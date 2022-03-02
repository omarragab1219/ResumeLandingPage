import styles from "./ScrollIndicator.module.css";
import React, { useState, useEffect, FC } from "react";

interface Props {
  width: number;
  delay: number;
  rotation: number;
  acceleration: number;
}

const ScrollIndicator: FC<Props> = ({
  width,
  delay,
  rotation,
  acceleration,
}) => {
  const [scroll, setScroll] = useState(0);

  const onScroll = () => {
    const Scrolled = document.documentElement.scrollTop;

    const MaxHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const ScrollPercent = (Scrolled / MaxHeight) * 100;
    setScroll(ScrollPercent - delay); //delay
    // }
  };

  // window.addEventListener("scroll", onScroll);
  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    // console.log(scroll);
  }, [scroll]);
  return (
    <div className={styles.container}>
      <div
        className={styles.progressBarContainer}
        style={{
          width: `${width}rem`,
          transform: `rotate(${rotation}deg)`,

          // display: `${scroll < 0.01 ? "none" : "inlineBlock"}`,
        }}
      >
        <div
          className={styles.progressBar}
          style={{
            width: `${scroll * acceleration}%`,
            visibility: `${scroll < 0.01 ? "hidden" : "visible"}`,
            // display: `${scroll < 0.01 ? "none" : "inlineBlock"}`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default ScrollIndicator;

{
  /* <div className={styles.fragment}>
      <div className={styles.container}>
        <div
          className={styles.progressBar}
          style={{ width: `${scroll}%` }}
        ></div>
        <div className={styles.progressBar}></div>
      </div>
      <div className={styles.scrollContent}>
        <div className={styles.heading}></div>
      </div>
    </div> */
}
