import ProjectsCard from "./ProjectsCard";
import "./projects.css";
import hospital from "../../assets/hospital.jpg";
import burger from "../../assets/burger2.jpeg";
import stary from "../../assets/stary1.jpeg";
import rare from "../../assets/rare.jpeg";
import resi from "../../assets/resi.jpeg";
import burger3 from "../../assets/burger3.jpg";
import Heading from "../heading/Heading";
import reddy1 from "../../assets/projects/reddy/reddy1.jpeg";

const Projects = () => {
  return (
    <div id="project" className="project-container">
      <Heading title={"Our Projects"} />

      <div className="projectCards">
        <div data-aos="flip-up" data-aos-duration="900">
          <ProjectsCard
            img={hospital}
            title={"Kadrekar Hospital"}
            description={" Daikin VRV System of Capacity 40HP"}
            url={"/kader"}
          />
        </div>
        <div data-aos="flip-down" data-aos-duration="900">
          <ProjectsCard
            img={burger3}
            title={"Burger/ Division "}
            description={
              "  @ Sarath City Capital Mall, Gachibowli - Miyapur Rd, Whitefields, HITEC City, Kondapur, Hyderabad, Telangana 500084"
            }
            url={"/burger"}
          />
        </div>

        <div div data-aos="flip-up" data-aos-duration="900">
          <ProjectsCard
            img={rare}
            title={"RARE RABBIT"}
            description={
              " HIMAYAT NAGAR @ Far East Plaza, 3-6-111/8&9 SHOP NO 3, Street Number 18, Himayatnagar, Hyderabad, Telangana 500029"
            }
            url={"/rare"}
          />
        </div>

        <div data-aos="flip-down" data-aos-duration="900">
          <ProjectsCard
            img={stary}
            title={"Starry Night"}
            description={
              "   :- 8-2-686/1, B/5/A, Road No. 12, Banjara Hills, Hyderabad, Telangana 500034"
            }
            url={"/stary"}
          />{" "}
        </div>

        <div data-aos="flip-down" data-aos-duration="900">
          <ProjectsCard
            img={resi}
            title={"Vijetha Residence"}
            description={" Sarur Nager, near Sbi Bank, Hyderabad"}
            url={"/vijeta"}
          />{" "}
        </div>

        <div data-aos="flip-down" data-aos-duration="900">
          <ProjectsCard
            img={reddy1}
            title={"Reddy Brothers"}
            description={" VRV-X  System 12HP "}
            url={"/reddy"}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
