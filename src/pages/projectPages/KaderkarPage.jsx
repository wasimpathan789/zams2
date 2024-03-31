import React from "react";
import ProjectPage from "./ProjectPage";
import kedarkar1 from "../../assets/projects/kedarkar1.jpeg";
import kedarkar2 from "../../assets/projects/kedarkar2.jpeg";
import kedarkar3 from "../../assets/projects/kedarkar3.jpeg";
import kedarkar4 from "../../assets/projects/kedarkar4.jpeg";
import kedarkar5 from "../../assets/projects/kedarkar5.jpeg";
import kedarkar6 from "../../assets/projects/kedarkar6.jpeg";
import kedarkar7 from "../../assets/projects/kedarkar7.jpeg";

const KaderkarPage = () => {
  return (
    <div className="project-sub">
      <ProjectPage
        title={"Kaderkar Hospital"}
        img={kedarkar1}
        address={
          "Near Nagreshwar mandir old bus stand, Degloor, Dist. Nanded (M.H)"
        }
        capcacity={"VRV-X System 40HP"}
        unit={" Hi-Wall,  Cassette Unit & Ductable Acs.."}
        brand={"Daikin"}
      />
      <div className="rare-images">
        <img
          src={kedarkar1}
          alt=""
          data-aos-duration="1500"
          data-aos="fade-right"
        />
        <img
          src={kedarkar2}
          alt=""
          data-aos-duration="1500"
          data-aos="fade-left"
        />
        <img
          src={kedarkar3}
          alt=""
          data-aos-duration="1500"
          data-aos="fade-right"
        />
        <img
          src={kedarkar4}
          alt=""
          data-aos-duration="1500"
          data-aos="fade-left"
        />
        <img
          src={kedarkar5}
          alt=""
          data-aos-duration="1500"
          data-aos="fade-right"
        />
        <img
          src={kedarkar6}
          alt=""
          data-aos-duration="1500"
          data-aos="fade-left"
        />
        <img
          src={kedarkar7}
          alt=""
          data-aos-duration="1500"
          data-aos="fade-right"
        />
      </div>
      {/*  */}
    </div>
  );
};

export default KaderkarPage;
