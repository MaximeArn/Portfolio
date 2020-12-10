import React from "react";
import { useParams } from "react-router-dom";
import "./projectDetail.scss";

const ProjectDetail = () => {
  const { projectName } = useParams();
  return (
    <section className="projectDetail">
      <div className="projectDetail-content">
        <h2 className="section-title">{projectName}</h2>
      </div>
    </section>
  );
};

export default ProjectDetail;
