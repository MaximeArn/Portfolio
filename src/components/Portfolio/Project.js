import React from "react";

const Project = ({ name, technos, image }) => {
  return (
    <article>
      <img src={image} alt="illustration of the project" />
      <div className="infos">
        <p className="name">{name}</p>
        <p className="technos">{technos}</p>
      </div>
    </article>
  );
};

export default Project;
