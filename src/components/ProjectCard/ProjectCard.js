import React from "react";
import "./ProjectCard.css";
import HttpIcon from "@material-ui/icons/Http";
import GitHubIcon from "@material-ui/icons/GitHub";

const ProjectCard = ({ src, githublink, websitelink, title, description }) => {
  return (
    <div className="project__card">
      <img src={src} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="projectCardIcon">
        <a href={githublink}>
          <GitHubIcon className="github__icon" />
        </a>
        <a href={websitelink}>
          <HttpIcon className="http__icon" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
