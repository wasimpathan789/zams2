import React from "react";
import ProjectPage from "./ProjectPage";
import starylight1 from "../../assets/projects/starylight1.jpeg";
import starylight2 from "../../assets/projects/starylight2.jpeg";
import starylight3 from "../../assets/projects/starylight3.jpeg";
import starylight4 from "../../assets/projects/starylight4.jpeg";
import starylight5 from "../../assets/projects/starylight5.jpeg";
import starylight6 from "../../assets/projects/starylight6.jpeg";

const StaryProject = () => {
  return (
    <div className="project-sub">
      <ProjectPage
        title={"Stary Light"}
        address={
          "8-2-686/1, B/5/A, Road No. 12, Banjara Hills, Hyderabad, Telangana 500034"
        }
        unit={"Hi-Wall units"}
        brand={"Daikin"}
        capcacity={"17 TR"}
        img={starylight5}
      />
      <div className="rare-images">
        <div className="img-div">
          <img
            src={starylight1}
            alt=""
            data-aos-duration="1500"
            data-aos="fade-right"
          />
        </div>

        <img
          src={starylight2}
          alt=""
          data-aos-duration="1500"
          data-aos="fade-left"
        />
        <img
          src={starylight3}
          alt=""
          data-aos-duration="1500"
          data-aos="fade-right"
        />
        <img
          src={starylight4}
          alt=""
          data-aos-duration="1500"
          data-aos="fade-left"
        />
        <img
          src={starylight5}
          alt=""
          data-aos-duration="1500"
          data-aos="fade-right"
        />
        <img
          src={starylight6}
          alt=""
          data-aos-duration="1500"
          data-aos="fade-right"
        />
      </div>
    </div>
  );
};

export default StaryProject;
