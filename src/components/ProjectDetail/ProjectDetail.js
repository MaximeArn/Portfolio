import React from "react";
import { useParams } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import getProjectByName from "../../utils/getProjectByName";
import "./projectDetail.scss";

const ProjectDetail = () => {
  const { projectName } = useParams();
  const { name, technos, image, description, github } = getProjectByName(
    projectName
  );

  return (
    <section className="projectDetail">
      <div className="projectDetail-content">
        <div className="text">
          <a href={github} className="infos-header" target="_blank">
            <i>
              <FaGithub />
            </i>
            <h2 className="section-title">{name}</h2>
          </a>
          <p className="project-description">{description}</p>
          <h3>technos :</h3>
          <ul className="technos">
            {technos.map((techno) => (
              <li key={techno} className="techno">
                {techno}
              </li>
            ))}
          </ul>
        </div>
        <div className="image-section">
          <img src={image} alt="image of the project" />
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
