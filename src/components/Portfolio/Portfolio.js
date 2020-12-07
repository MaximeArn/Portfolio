import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaAngleDoubleLeft } from "react-icons/fa";
import projectImage from "../../assets/images/projects/tindev.jpg";
import data from "../../data/projects";
import "./portfolio.scss";

// const d = ["tindev", "calculette", "blabla", "4"];
const Portfolio = () => {
  const carousel = data.map(({ name, technos }) => (
    <article>
      <img src={projectImage} alt="illustration of the project" />
      <div className="dark-background"></div>
      <div className="infos">
        <p className="name">{name}</p>
        <p className="technos">{technos}</p>
      </div>
    </article>
  ));

  // const [carouselId, setCarouselId] = useState(0);

  // const incrementCarouselID = () => {
  //   carouselId < data.length - 1 && setCarouselId(carouselId + 1);
  // };

  // const decrementCarouselID = () => {
  //   carouselId > 0 && setCarouselId(carouselId - 1);
  // };

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-content">
        <h2>latest Work</h2>
        <div className="carousel">
          {data.map(({ name, technos }) => (
            <article>
              <img src={projectImage} alt="illustration of the project" />
              <div className="infos">
                <p className="name">{name}</p>
                <p className="technos">{technos}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
