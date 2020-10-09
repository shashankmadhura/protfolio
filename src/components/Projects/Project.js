import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./Project.css";
import covidImage from "../../images/covid.png";

const Project = () => {
  return (
    <div className="project" id="project">
      <h1 className="project__heading">Projects</h1>
      <div className="project__row">
        <ProjectCard
          src="https://miro.medium.com/max/987/1*gcvqH8fv5CRYtYbkx0JRuQ.png"
          title="Pathfinding Visualizer"
          githublink="https://github.com/shashankmadhura/PathfindingVisualizer"
          websitelink="https://shashankmadhura.github.io/Pathfinding-Visualizer/"
          description="Built React application for visualizing Pathfinding and maze-generation
        algorithms.Implemented 4 different Pathfinding algorithms namely A*
        search, Dijkstra’s algorithm, Breadth First Search, Depth First Search."
        />

        <ProjectCard
          githublink="https://github.com/shashankmadhura/Sorting-Visualizer-Project"
          websitelink="https://shashankmadhura.github.io/Sorting-Visualization/"
          src="https://cdn.shortpixel.ai/client/q_lossy,ret_img,w_600/https://therohanbhatia.com/wp-content/uploads/2020/08/Sorting-Visualizer.jpg"
          title="Sorting Visualizer"
          description="Built React application for visualizing sorting algorithms. 
          Implemented 5 different sorting algorithms namely Bubble Sort, Selection Sort , Insertion-Sort, Merge Sort and Quick Sort. "
        />
      </div>

      <div className="project__row">
        <ProjectCard
          githublink="https://github.com/shashankmadhura/Covid19-Tracker"
          websitelink="https://covid19-visualizer-c8d38.web.app/"
          src={covidImage}
          title="Covid-19 Tracker"
          description="Built React application to track worldwide COVID-19 statistics."
        />
        <ProjectCard
          githublink="https://github.com/shashankmadhura/spotify-clone"
          websitelink="https://spotify-clone-bf7b7.web.app/"
          src="https://lh3.googleusercontent.com/UrY7BAZ-XfXGpfkeWg0zCCeo-7ras4DCoRalC_WXXWTK9q5b0Iw7B0YQMsVxZaNB7DM"
          title="Spotify Clone"
          description="Built Spotify clone using Spotify API"
        />
      </div>

      <div className="project__row">
        <ProjectCard
          githublink="https://github.com/shashankmadhura/hulu-clone"
          websitelink="https://hulu-clone-78add.web.app/"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS5gqSY9BlFgxpS_2wGze9J2g5sGBzUZQQ_iQ&usqp=CAU"
          title="Hulu Clone"
          description="Built Hulu UI clone."
        />
        <ProjectCard
          githublink="https://github.com/shashankmadhura/airbnb-clone"
          websitelink="https://airbnb-clone-385b9.web.app/"
          src="https://static.businessworld.in/article/article_extra_large_image/1592295865_bV7mg8_airbnb.jpg"
          title="Airbnb Clone"
          description="Built Airbnb UI clone."
        />
      </div>
      <div className="project__row">
        <ProjectCard
          githublink="https://github.com/shashankmadhura/Twitter-mern"
          websitelink="https://twitter-clone-934ce.web.app/"
          src="data:image/png;base64,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"
          title="Twitter Clone"
          description="Built Twitter clone using MERN stack."
        />
        <ProjectCard
          githublink="https://github.com/shashankmadhura/tiktok-clone-mernstack"
          websitelink="https://tiktok-clone-86104.web.app/"
          src="data:image/png;base64,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"
          title="TikTok Clone"
          description="Built TikTok clone using MERN stack."
        />
      </div>
    </div>
  );
};

export default Project;
