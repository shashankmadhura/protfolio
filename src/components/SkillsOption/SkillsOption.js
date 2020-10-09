import React from "react";
import "./SkillsOption.css";

const SkillsOption = ({ src, name }) => {
  return (
    <div className="skillsOption">
      <img src={src} />
      <h3>{name}</h3>
    </div>
  );
};

export default SkillsOption;
