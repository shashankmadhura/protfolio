import React, { useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Project from "./components/Projects/Project";
import Fade from "react-reveal/Fade";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  window.addEventListener("hashchange", console.log("ya"));
  function addMargin() {
    window.scrollTo(0, window.pageYOffset - 100);
  }
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Fade>
          <Banner />
          <About />
          <Skills />
          <Project />
        </Fade>
      </div>
    </Router>
  );
}

export default App;
