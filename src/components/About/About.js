import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import profileImage from "../../assets/images/profile-image.jpeg";
import "./about.scss";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <div className="text">
          <h2>about me</h2>
          <p>
            Hi I am a Fullstack Javascript developer. I am passionate by
            computer science since my youngest age and I started to be
            interested in code at 14 years old. I like to work cleanly and I am
            very demanding of the quality of the code I produce.
          </p>
          <p>
            whether you are an individual or a professional do not hesitate to
            contact me so that we can work together
          </p>
          <div className="media-icons">
            <a href="https://github.com/MaximeArn" target="_blank">
              <i>
                <FaGithub />
              </i>
            </a>
            <a href="https://twitter.com/MaximeARNOULD4" target="_blank">
              <i>
                <FaTwitter />
              </i>
            </a>
            <a
              href="https://www.linkedin.com/in/maxime-arnould-337a031a3/"
              target="_blank"
            >
              <i>
                <FaLinkedinIn />
              </i>
            </a>
          </div>
        </div>
        <div className="image-section">
          <div className="green-border">
            <img
              className="image"
              src={profileImage}
              alt="profile image of me"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
