import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

import "./about.scss";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-content">
        <div className="text">
          <h2>about me</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
            architecto rerum impedit delectus, iste necessitatibus porro, nisi
            unde in dolores, iure expedita id doloremque a. Earum odit rem neque
            sit!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            consectetur voluptatibus nemo aliquam doloribus{" "}
          </p>
          <div className="medias-icons">
            <i>
              <FaFacebookF />
            </i>
            <i>
              <FaTwitter />
            </i>
            <i>
              <FaLinkedinIn />
            </i>
          </div>
        </div>
        <div className="image">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
