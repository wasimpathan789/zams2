import { Link } from "react-router-dom";
import "./ProjectPage.css";
import { AiOutlineHome } from "react-icons/ai";

const ProjectPage = ({ title, address, capcacity, unit, img, brand }) => {
  return (
    <div className="projectWrapper">
      <div
        className="project-banner"
        style={{
          backgroundImage: `url(${img})`,
          objectFit: "fill",
          backgroundSize: "cover",
        }}
      >
        <div className="project-overlays "></div>
        <div className="projectHome">
          <Link to={"/"}>
            <AiOutlineHome />
          </Link>
        </div>

        <h1>{title}</h1>
        <h5>Photos</h5>
      </div>
      <div className="project-details">
        <div className="project-details-headlines">
          <h1>Client: </h1>
          <p> {title}</p>
        </div>
        <div className="project-details-headlines">
          <h1>Address: </h1>
          <p> {address}</p>
        </div>
        <div className="project-details-headlines">
          <h1>Tonnage Capacity: </h1>
          <p> {capcacity}</p>
        </div>
        <div className="project-details-headlines">
          <h1>Unit Types: </h1>
          <p> {unit}</p>
        </div>
        <div className="project-details-headlines">
          <h1>Brand: </h1>
          <p> {brand}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
