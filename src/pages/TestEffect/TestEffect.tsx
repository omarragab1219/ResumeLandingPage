import styles from "./TestEffect.module.css";
import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  FC,
  SetStateAction,
  Dispatch,
} from "react";

const TestEffect = () => {
  const [rerun, setRerun] = useState(false);
  const [stars, setStars] = useState<JSX.Element[]>([]);
  /* -------------------------------------------------------------------------- */
  useEffect(() => {
    const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
    const renderNewStars = async (delayBy: number) => {
      await delay(delayBy);
      renderStar(1);
    };
    renderNewStars(1000);
    renderNewStars(1200);
    renderNewStars(1700);

    // setInterval(renderStar, 1000);
  }, []);
  /* -------------------------------------------------------------------------- */
  // useEffect(() => {
  //   const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
  //   const renderNewStars = async () => {
  //     await delay(1000);
  //     setRerun(!rerun);
  //   };
  //   renderNewStars();
  // }, [rerun]);
  /* -------------------------------------------------------------------------- */

  const randomNumberGenerator = () => {
    // const randomNumber = Math.floor(Math.random() * 100);
    const randomNumber = Math.random() * 100;
    return randomNumber;
  };
  const renderStar = (delay: number) => {
    const numEffects = Array.from(Array(100).keys());

    const star = numEffects.map((effect, i) => {
      return (
        <div
          key={i}
          className={styles.effectContainer}
          style={{
            top: `${randomNumberGenerator()}vh`,
            // left: `calc(${randomNumberGenerator() / 2}vw - 15rem)`,
            left: `calc(${randomNumberGenerator()}vw - 15rem)`,

            // animation: `slidein ${1}s ease-in-out ${delay}s infinite`,
          }}
        >
          <div className={styles.movingEffect}></div>
        </div>
      );
    });
    // const copy = stars.slice();
    // // @ts-ignore
    // copy.push(star);

    // setStars(copy);
    return star;
  };
  /* -------------------------------------------------------------------------- */
  return (
    <div className={styles.container}>
      {renderStar(1)}
      {renderStar(1)}
    </div>
  );
};

export default TestEffect;
