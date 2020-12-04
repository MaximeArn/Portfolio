import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import profileImage from "../../assets/images/profile-image.jpg";
import "./about.scss";

const About = () => {
  return (
    <section className="about" id="about">
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
          <div className="media-icons">
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
        <div className="image-section">
          <div className="green-border">
            <img
              className="image"
              src={profileImage}
              alt="profile image of a man"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
