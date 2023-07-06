import React from "react";
import ProjectPage from "./ProjectPage";
import rare1 from "../../assets/projects/rare.jpeg";
import rare2 from "../../assets/projects/rare2.jpeg";
import rare3 from "../../assets/projects/rare3.jpeg";
import rare4 from "../../assets/projects/rare4.jpeg";

const RareRabitProject = () => {
  return (
    <div>
      <ProjectPage
        title={"Rare Rabit"}
        address={
          " HIMAYAT NAGAR @ Far East Plaza, 3-6-111/8&9 SHOP NO 3, Street Number 18, Himayatnagar, Hyderabad, Telangana 500029"
        }
        capcacity={"12 TR "}
        unit={"Cassette & Hi-Wall Units..."}
        brand={"LLOYD"}
        img={rare1}
      />
      <div className="burger-images">
        <img
          src={rare1}
          alt=""
          data-aos-duration="1500"
          data-aos="fade-right"
        />
        <img src={rare2} alt="" data-aos-duration="1500" data-aos="fade-left" />
        <img
          src={rare3}
          alt=""
          data-aos-duration="1500"
          data-aos="fade-right"
        />
        <img src={rare4} alt="" data-aos-duration="1500" data-aos="fade-left" />
      </div>
    </div>
  );
};

export default RareRabitProject;
