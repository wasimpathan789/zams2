import "./projectsCard.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const ProjectsCard = ({ img, title, description, url }) => {
  return (
    <div className="projectCard" data-aos="flip-up">
      <div className="projectCardTop">
        <img src={img} alt="" data-aos="fade-right" />
      </div>
      <div className="projectCardBottom">
        <h1 id="h" data-aos-duration="1000" data-aos="fade-right">
          {title}
        </h1>
        <h5 id="h" data-aos-duration="1000" data-aos="fade-right">
          {description}
        </h5>
        <button id="h">
          <Link to={url}>
            {" "}
            Read More <AiOutlineArrowRight className="btn-arrow" />
          </Link>
        </button>
        <div className="overFlow"></div>
      </div>
    </div>
  );
};

export default ProjectsCard;
