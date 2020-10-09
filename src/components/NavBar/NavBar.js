import React, { useState, useRef } from "react";
import "./NavBar.css";
import { HashLink as Link } from "react-router-hash-link";

const NavBar = () => {
  const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth",
    });
  };

  const [active, setactive] = useState("home");

  return (
    <div className="navBar">
      <div className="navBar__left">
        <h3>Shashank</h3>
      </div>
      <div className="navbar__right">
        <h3
          className={active === "home" && "active"}
          onClick={() => setactive("home")}
        >
          <Link to="#home" scroll={(el) => scrollWithOffset(el, 85)}>
            Home
          </Link>
        </h3>
        <h3
          className={active === "skills" && "active"}
          onClick={() => setactive("skills")}
        >
          <Link to="#skills" scroll={(el) => scrollWithOffset(el, 85)}>
            Skills
          </Link>
        </h3>
        <h3
          className={active === "projects" && "active"}
          onClick={() => setactive("projects")}
        >
          <Link to="#project" scroll={(el) => scrollWithOffset(el, 85)}>
            Projects
          </Link>
        </h3>
        <h3
          className={active === "about" && "active"}
          onClick={() => setactive("about")}
        >
          <Link to="#about" scroll={(el) => scrollWithOffset(el, 85)}>
            About
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default NavBar;
