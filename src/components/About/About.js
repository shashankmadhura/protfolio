import React from "react";
import "./About.css";
import profile from "../../images/shashank.jpg";

const About = () => {
  return (
    <div className="about" id="about">
      <h1 className="about__heading">About</h1>
      <div className="about__description">
        <img className="profile" src={profile}></img>
        <div>
          <h1>I am Shashank</h1>
          <p>
            In mid-March 2020,I decided to learn programming. Sincethen,I fell
            in love with full-stack development and algorithm analysis. I have
            self taught all these skills, and I enjoyed doing it!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
