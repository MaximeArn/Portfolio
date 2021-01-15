import React from "react";
import "./landing.scss";
import resume from "../../assets/resume.jpg";

const Landing = () => {
  return (
    <section className="landing-background" id="home">
      <div className="landing-content">
        <div className="text">
          <p className="presentation">
            Hi Myself <strong>Maxime Arnould</strong>
          </p>
          <h2 className="sub-title">Professionel Web Developer</h2>
          <p className="description">
            I am Maxime, 18 years old I am a{" "}
            <strong>fullstack JavaScript developer</strong> and I am passionate
            about a whole lot of things, among others: travel, history, science
            and especially computer science since my youngest age
          </p>
        </div>

        <div className="buttons">
          <a href="#about">
            <button className="green-button">About Me</button>
          </a>
          <a href={resume} download="Maxime-Arnould-Resume">
            <button>Download CV</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Landing;
