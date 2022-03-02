import styles from "./ProjectCard.module.css";
import React, { useState, useEffect, FC, useRef } from "react";

// import { gsap, CSSPlugin } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

import SouceCodeButton from "../SouceCodeButton/SouceCodeButton";

import { Fade } from "react-awesome-reveal";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

// gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(CSSPlugin);

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(400px);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
interface CardAttributes {
  index: number;
  title: string;
  description: string;
  image: string;
  sourceCodeLink: string;
  technologies: string[];
}

const ProjectCard: FC<CardAttributes> = ({
  index,
  title,
  description,
  image,
  sourceCodeLink,
  technologies,
}) => {
  // const [hi, setHi] = useState(null);
  // let placeHolderContainer = useRef<HTMLDivElement>(hi);
  // let textContainer = useRef<HTMLDivElement>(hi);
  // useEffect(() => {
  //   window.onbeforeunload = function () {
  //     ScrollTrigger.refresh();
  //     setHi(null);
  //     console.log(hi);
  //   };
  // }, []);

  // useEffect(() => {
  //   ScrollTrigger.refresh();

  //   const element = textContainer.current;
  //   gsap.from(element, {
  //     autoAlpha: 0,
  //     opacity: 0,
  //     duration: 0.6,

  //     y: "100",
  //     scrollTrigger: {
  //       refreshPriority: 1,
  //       // scrub: true,
  //       trigger: element,
  //       start: "center bottom",
  //     },
  //   });
  // }, [textContainer, placeHolderContainer]);

  /* -------------------------------------------------------------------------- */
  return (
    <div className={styles.container}>
      <div className={styles.projectContainer}>
        <div className={styles.titleImageContainer}>
          <img className={styles.projectImage} src={image} alt="Project" />
        </div>
      </div>
      {/* -------------------------------------------------------------------------- */}

      {/* -------------------------------------------------------------------------- */}
      {/* <Reveal delay={0} triggerOnce fraction={0.8} keyframes={customAnimation}> */}
      <div className={styles.allTextContainer}>
        <h2 className={styles.title}>{title}</h2>

        <p className={styles.description}>{description}</p>
        <div className={styles.techAndSourceCodeContainer}>
          <h3 className={styles.techUsed}>Technologies Used</h3>
          {technologies.length % 2 === 0 ? (
            <ul className={styles.techOptionContainerEven}>
              {technologies.map<JSX.Element>((tech, index) => {
                return (
                  <li className={styles.techOptionEven} key={index}>
                    {tech}
                  </li>
                );
              })}
            </ul>
          ) : (
            <ul className={styles.techOptionContainerOdd}>
              <li></li>
              <li></li>
              <li></li>
              {technologies.map<JSX.Element>((tech, index) => {
                if (index === 3) {
                  return (
                    <li className={styles.techOption4} key={index}>
                      {tech}
                    </li>
                  );
                } else if (index === 4) {
                  return (
                    <li className={styles.techOption5} key={index}>
                      {tech}
                    </li>
                  );
                } else {
                  return (
                    <li className={styles.techOptionEven} key={index}>
                      {tech}
                    </li>
                  );
                }
              })}
            </ul>
          )}

          <div className={styles.SouceCodeButton}>
            <SouceCodeButton />
          </div>
        </div>
      </div>
      {/* </Reveal> */}
    </div>
  );
};

export default ProjectCard;
