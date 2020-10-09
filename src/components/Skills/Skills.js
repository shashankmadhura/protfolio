import React from "react";
import "./Skills.css";
import SkillsOption from "../SkillsOption/SkillsOption";
import htmllogo from "../../images/HTML5_Badge_256-removebg-preview.png";
import csslogo from "../../images/csslogo.png";
import jslogo from "../../images/javaScript-removebg-preview.png";
import reactlogo from "../../images/1280px-React-icon.svg-removebg-preview.png";
import reduxlogo from "../../images/redux-removebg-preview.png";
import pythonlogo from "../../images/python.png";
import nodejslogo from "../../images/node-removebg-preview.png";
import mysqllogo from "../../images/mysql-logo-removebg-preview.png";
import djangologo from "../../images/django.png";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <h1 className="skills__heading">Skills</h1>
      <div className="skills__description">
        <div className="skills__right">
          <SkillsOption src={pythonlogo} name="PYTHON 3" />
          <SkillsOption src={jslogo} name="JAVASCRIPT ES6" />
          <SkillsOption src={reactlogo} name="REACT JS" />
          <SkillsOption src={reduxlogo} name="REDUX" />
          <SkillsOption src={nodejslogo} name="NODE JS" />
          <SkillsOption src={djangologo} name="DJANGO 3" />
          <SkillsOption src={htmllogo} name="HTML 5" />
          <SkillsOption src={csslogo} name="CSS 3" />
          <SkillsOption src={mysqllogo} name="MYSQL" />
        </div>
        <div className="skills__left">
          <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--BcXcD88z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/5sn1ah1x2i3kh1pqi1kg.jpg"></img>
        </div>
      </div>
    </div>
  );
};

export default Skills;
