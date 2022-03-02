import styles from "./Main.module.css";
import React, { useState, useEffect, useRef } from "react";
import NavBar from "../NavBar/NavBar";
import Video1 from "./Video1.mp4";
import TestEffect from "../../pages/TestEffect/TestEffect";
import mobileMech from "../../images/mech3.jpeg";

const Main = () => {
  const [scroll, setScroll] = useState<number>(0);
  const [vid, setVid] = useState<number>(0);
  const [resetVid, setResetVid] = useState<boolean>(false);
  const video = useRef<HTMLVideoElement | null>(null);

  const onScroll = () => {
    const Scrolled = document.documentElement.scrollTop;

    const MaxHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const ScrollPercent = (Scrolled / MaxHeight) * 100;

    const x = (ScrollPercent / 24) * 1.45;

    setScroll(+x.toFixed(2));

    // }
  };

  /* ------------------------------- reset video ------------------------------ */
  useEffect(() => {
    if (scroll > 0.01) {
      setResetVid(true);
    }
  }, [scroll]);

  useEffect(() => {
    if (resetVid && scroll < 0.02 && video.current) {
      setVid(0);
      video.current.currentTime = 0;
    }
  }, [scroll]);
  /* -------------------------------------------------------------------------- */

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });

    // console.log(scroll);
  }, [scroll]);

  useEffect(() => {
    const CountDecimalDigits = (numberX: number) => {
      var char_array = numberX.toString().split(""); // split every single char
      var not_decimal = char_array.lastIndexOf(".");
      return not_decimal < 0 ? 0 : char_array.length - not_decimal;
    };

    if (video.current) {
      if (scroll) {
        // @ts-ignore
        setVid((scroll * 100).toFixed(2));
        if (CountDecimalDigits(vid) < 5) {
          video.current.currentTime = vid / 133;
        }
      }
    }
    // console.log(video.current?.currentTime);
  }, [video.current?.currentTime, scroll]);
  return (
    <div className={styles.container}>
      <div className={styles.show}>
        <NavBar />
        <div>
          <video
            // type="video/mp4"
            className={styles.vid}
            width={"40%"}
            height={"40%"}
            style={{ top: `${scroll * 22}%` }}
            // playsInline={true}
            src={Video1}
            ref={video}
            preload="auto"
            // controls
          ></video>
          <img src={mobileMech} className={styles.img1} alt="" />

          {/* <h1 className={styles.scroll}>{vid}</h1> */}
        </div>
      </div>
      <div className={styles.show2}>{/* <TestEffect /> */}</div>
    </div>
  );
};

export default Main;
