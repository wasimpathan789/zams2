import "./ProjectBanner.css";

const ProjectBanner = ({ title }) => {
  return (
    <div className="project-banner">
      <h1>{title}</h1>
      <h5>Photos</h5>
      <div className="project-overlays"></div>
    </div>
  );
};

export default ProjectBanner;
