import React from "react";
import { Link } from "react-router-dom";

const Project = ({ name, technos, image }) => {
  return (
    <Link to={`/project/${name}`}>
      <article>
        <img src={image} alt="illustration of the project" />
        <div className="infos">
          <p className="name">{name}</p>
          <p className="technos">{technos}</p>
        </div>
      </article>
    </Link>
  );
};

export default Project;
