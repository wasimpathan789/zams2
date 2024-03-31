import React from "react";
import ProjectPage from "./ProjectPage";
import reddy1 from "../../assets/projects/reddy/reddy1.jpeg";
import reddy2 from "../../assets/projects/reddy/reddy2.jpeg";
import reddy3 from "../../assets/projects/reddy/reddy3.jpeg";
import reddy4 from "../../assets/projects/reddy/reddy4.jpeg";
import reddy5 from "../../assets/projects/reddy/reddy5.jpeg";
import reddy6 from "../../assets/projects/reddy/reddy6.jpeg";
import reddy7 from "../../assets/projects/reddy/reddy7.jpeg";
import reddy8 from "../../assets/projects/reddy/reddy8.jpeg";
import reddy9 from "../../assets/projects/reddy/reddy9.jpeg";
import reddy10 from "../../assets/projects/reddy/reddy10.jpeg";
import reddy11 from "../../assets/projects/reddy/reddy11.jpeg";
import reddy12 from "../../assets/projects/reddy/reddy12.jpeg";
import reddy13 from "../../assets/projects/reddy/reddy13.jpeg";
import reddy14 from "../../assets/projects/reddy/reddy14.jpeg";
import reddy15 from "../../assets/projects/reddy/reddy15.jpeg";

const RedyBrothersPage = () => {
  return (
    <div className="project-sub">
      <ProjectPage
        title={"Reddy Brothers"}
        address={"Izzat Nagar near Hitex Exibition, Hitec City, Hyderabad."}
        unit={"Hi-Wall & Cassette Acs."}
        capcacity={" VRV-X System 24HP (First & Second Floor )"}
        brand={"Daikin"}
        img={reddy1}
      />
      <div className="rare-images">
        <img
          src={reddy1}
          alt=""
          data-aos-duration="1500"
          data-aos="fade-right"
        />
        <img
          src={reddy8}
          alt=""
          data-aos-duration="1500"
          data-aos="fade-right"
        />
        <img
          src={reddy2}
          alt=""
          data-aos-duration="1500"
          data-aos="fade-left"
        />
        {/* <img
          src={reddy8}
          alt=""
          data-aos-duration="1500"
          data-aos="fade-right"
        /> */}
        <img
          src={reddy4}
          alt=""
          data-aos-duration="1500"
          data-aos="fade-left"
        />
        <img
          src={reddy5}
          alt=""
          data-aos-duration="1500"
          data-aos="fade-right"
        />
        <img
          src={reddy6}
          alt=""
          data-aos-duration="1500"
          data-aos="fade-left"
        />
        <img
          src={reddy7}
          alt=""
          data-aos-duration="1500"
          data-aos="fade-right"
        />
        <img
          src={reddy3}
          alt=""
          data-aos-duration="1500"
          data-aos="fade-left"
        />
        <img
          src={reddy9}
          alt=""
          data-aos-duration="1500"
          data-aos="fade-right"
        />
        <img
          src={reddy10}
          alt=""
          data-aos-duration="1500"
          data-aos="fade-left"
        />
        <img
          src={reddy11}
          alt=""
          data-aos-duration="1500"
          data-aos="fade-right"
        />
        <img
          src={reddy12}
          alt=""
          data-aos-duration="1500"
          data-aos="fade-left"
        />
        <img
          src={reddy13}
          alt=""
          data-aos-duration="1500"
          data-aos="fade-right"
        />
        <img
          src={reddy14}
          alt=""
          data-aos-duration="1500"
          data-aos="fade-left"
        />
        <img
          src={reddy15}
          alt=""
          data-aos-duration="1500"
          data-aos="fade-right"
        />
      </div>
      {/*  */}
    </div>
  );
};

export default RedyBrothersPage;
