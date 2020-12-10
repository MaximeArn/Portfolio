import React from "react";
import { useParams } from "react-router-dom";
import getProjectByName from "../../utils/getProjectByName";
import "./projectDetail.scss";

const ProjectDetail = () => {
  const { projectName } = useParams();
  const { name, technos, image, description } = getProjectByName(projectName);

  return (
    <section className="projectDetail">
      <div className="projectDetail-content">
        <div className="text">
          <h2 className="section-title">{name}</h2>
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
