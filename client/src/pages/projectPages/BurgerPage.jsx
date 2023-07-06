import React from "react";
import ProjectPage from "./ProjectPage";
import burger1 from "../../assets/projects/burger1.jpeg";
import burger2 from "../../assets/projects/burger2.jpeg";
import burger3 from "../../assets/projects/burger3.jpg";
import burger4 from "../../assets/projects/burger4.jpeg";

const BurgerPage = () => {
  return (
    <div>
      <ProjectPage
        title={"Burger Division"}
        address={
          "Sarath City Capital Mall, Gachibowli - Miyapur Rd, Whitefields, HITEC City, Hyderabad"
        }
        capcacity={"4 TR"}
        unit={"Chilled Water Cassette Ac"}
        brand={"Midea"}
        img={burger3}
      />
      <div className="rare-images">
        <img
          src={burger1}
          alt=""
          data-aos-duration="1500"
          data-aos="fade-right"
        />
        <img
          src={burger2}
          alt=""
          data-aos-duration="1500"
          data-aos="fade-left"
        />
        <img
          src={burger3}
          alt=""
          data-aos-duration="1500"
          data-aos="fade-right"
        />
        <img
          src={burger4}
          alt=""
          data-aos-duration="1500"
          data-aos="fade-left"
        />
      </div>
    </div>
  );
};

export default BurgerPage;
