import projectsData from "../data/projects";

export default (projectName) =>
  projectsData.find(({ name }) => name === projectName);
