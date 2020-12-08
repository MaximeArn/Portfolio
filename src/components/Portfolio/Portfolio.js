import React from "react";
import data from "../../data/projects";
import Project from "./Project";
import "./portfolio.scss";

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-content">
        <h2>latest Work</h2>
        <div className="carousel">
          {data.map((project) => (
            <Project key={project.name} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
