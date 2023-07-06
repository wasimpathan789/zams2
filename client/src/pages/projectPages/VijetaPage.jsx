import React from "react";
import ProjectPage from "./ProjectPage";
import vijeta1 from "../../assets/projects/vijeta1.jpeg";
import vijeta2 from "../../assets/projects/vijeta2.jpeg";
import vijeta3 from "../../assets/projects/vijeta3.jpeg";
import vijeta4 from "../../assets/projects/vijeta4.jpeg";
import vijeta5 from "../../assets/projects/vijeta5.jpeg";
import vijeta6 from "../../assets/projects/vijeta6.jpeg";

const VijetaPage = () => {
  return (
    <div className="mainProject-container">
      <ProjectPage
        title={"Vijeta Residency"}
        address={"Sarur Nager, near Sbi Bank, Hyderabad."}
        capcacity={"12 TR"}
        unit={"Cassette & Hi-Wall Units."}
        brand={"O-General"}
        img={vijeta3}
      />
      <div className="rare-images">
        <img
          src={vijeta1}
          alt=""
          data-aos-duration="1500"
          data-aos="fade-right"
        />
        <img
          src={vijeta2}
          alt=""
          data-aos-duration="1500"
          data-aos="fade-left"
        />
        <img
          src={vijeta3}
          alt=""
          data-aos-duration="1500"
          data-aos="fade-right"
        />
        <img
          src={vijeta4}
          alt=""
          data-aos-duration="1500"
          data-aos="fade-left"
        />
        <img
          src={vijeta5}
          alt=""
          data-aos-duration="1500"
          data-aos="fade-right"
        />
        <img
          src={vijeta6}
          alt=""
          data-aos-duration="1500"
          data-aos="fade-left"
        />
      </div>
    </div>
  );
};

export default VijetaPage;
