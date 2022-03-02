import styles from "./Project.module.css";
import React, { useState, useEffect } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import ScrollIndicator from "../ScrollIndicator/ScrollIndicator";
import gitImage from "./GitHub-Mark.png";

const Project = () => {
  const renderCards = () => {
    return data.map((project, index) => {
      return (
        <ProjectCard
          key={index}
          title={project.title}
          index={index}
          description={project.description}
          image={project.image}
          sourceCodeLink={project.sourceCodeLink}
          technologies={project.technologies}
        />
      );
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.projectList}>{renderCards()}</div>
      {/* <ScrollIndicator /> */}
    </div>
  );
};

export default Project;

const data = [
  {
    title: "Socail Media App",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde soluta dolor maiores ipsa corporis libero minima iusto quis optio nisi, id aspernatur mollitia quaerat ducimus officiis voluptatibus veritatis? Accusamus, possimus.",
    image: gitImage,

    sourceCodeLink: "https://www.themekaverse.com/",
    technologies: [
      "React",
      "GraphQL",
      "MongoDB",
      "Socket.io",
      "Node.js",
      "Docker",
    ],
  },
  {
    title: "NFT Marketplace",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde soluta dolor maiores ipsa corporis libero minima iusto quis optio nisi, id aspernatur mollitia quaerat ducimus officiis voluptatibus veritatis? Accusamus, possimus.",
    image: gitImage,

    sourceCodeLink: "",
    technologies: ["Solidity", "Next.js", "TypeScript", "IPFS", "Hardhat"],
  },
  {
    title: "Decentralized Youtube",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde soluta dolor maiores ipsa corporis libero minima iusto quis optio nisi, id aspernatur mollitia quaerat ducimus officiis voluptatibus veritatis? Accusamus, possimus.",
    image: gitImage,
    sourceCodeLink: "",
    technologies: ["Solidity", "Next.js", "TypeScript", "IPFS", "Hardhat"],
  },
];
