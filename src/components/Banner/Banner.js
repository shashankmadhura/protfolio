import React from "react";
import "./Banner.css";
import profile from "../../images/shashanktrans.png";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";

const Banner = () => {
  return (
    <div className="banner" id="home">
      <div className="banner__left">
        <h1>Hi,</h1>
        <h1>
          I'am <span>Shashank</span>
        </h1>
        <h1>Web Developer</h1>

        <div className="banner__icons">
          <a href="https://github.com/shashankmadhura">
            <GitHubIcon className="githubIcon" />
          </a>
          <a href="https://www.linkedin.com/in/shashank-s-7888201ab/">
            <LinkedInIcon className="linkedInIcon" />
          </a>
          <a href="mailto:shashankmadhura@gmail.com">
            <MailIcon className="mailIcon" />
          </a>
        </div>
      </div>
      <img src={profile} />
    </div>
  );
};

export default Banner;
