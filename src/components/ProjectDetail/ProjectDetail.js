import React from "react";
import { useParams } from "react-router-dom";
import getProjectByName from "../../utils/getProjectByName";
import "./projectDetail.scss";

const ProjectDetail = () => {
  const { projectName } = useParams();
  const { name, technos, image } = getProjectByName(projectName);

  return (
    <section className="projectDetail">
      <div className="projectDetail-content">
        <h2 className="section-title">{name}</h2>
        {/* <p>{description}</p> */}
      </div>
    </section>
  );
};

export default ProjectDetail;
