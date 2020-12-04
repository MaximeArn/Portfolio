import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaAngleDoubleLeft } from "react-icons/fa";
import projectImage from "../../assets/images/project.jpg";
import "./portfolio.scss";

const testData = ["tindev", "calculette", "blabla", "4"];
const Portfolio = () => {
  const carousel = testData.map((name) => (
    <article>
      <img src={projectImage} alt="illustration of the project" />
      <p>{name}</p>
    </article>
  ));

  const [carouselId, setCarouselId] = useState(0);

  const incrementCarouselID = () => {
    carouselId < testData.length - 1 && setCarouselId(carouselId + 1);
  };

  const decrementCarouselID = () => {
    carouselId > 0 && setCarouselId(carouselId - 1);
  };

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-content">
        <h2>latest Work</h2>
        <div className="carousel">
          {carousel[carouselId]}
          <div className="buttons">
            <button onClick={decrementCarouselID}>
              <FaAngleDoubleLeft />
            </button>
            <button onClick={incrementCarouselID}>
              <FaAngleDoubleRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
