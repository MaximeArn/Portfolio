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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
            dolorum perspiciatis ipsa quos quam. Vero reiciendis quasi pariatur
            obcaecati animi totam architecto corporis accusamus beatae, cumque
            rerum unde labore aliquid!
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
