import "./OurClients.css";
import Heading from "../heading/Heading";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";
import MainContainer from "./MainContainer";
import TopContainer from "./TopContainer";
import BottomContainer from "./BottomContainer";

const OurClients = () => {
  return (
    <div id="client" className="clients-container">
      <Heading title={"Our Clients"} />
      <div className="clients-wrapper">
        <MainContainer title={"ZAMS Clients"} />
        <div className="topLine"></div>
        <div className="bottomLine"></div>
        <div className="rare" data-aos="fade-right" data-aos-duration="1000">
          <LeftContainer title={"Rare Rabit"} />
          <div className="rarLine"></div>
        </div>
        <div
          className="umar"
          data-aos="fade-left"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <RightContainer title={"Umar Architect"} />
          <div className="umarLine"></div>
        </div>
        <div
          className="stary"
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <LeftContainer title={"Starry Night"} />
          <div className="staryLine"></div>
        </div>
        <div
          className="kachi"
          data-aos="fade-left"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <RightContainer title={"Kachchi Cloths"} />
          <div className="kachiLine"></div>
        </div>
        <div
          className="classic"
          data-aos="fade-left"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <RightContainer title={"Classic Icecream"} />
          <div className="classicLine"></div>
        </div>
        <div
          className="eidpl"
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <LeftContainer title={"EIDPL"} />
          <div className="eidplLine"></div>
        </div>
        <div className="ab" data-aos="fade-down" data-aos-duration="1000">
          <TopContainer title={"AB Architect"} />
          <div className="abLine1"></div>
          <div className="abLine2"></div>
        </div>
        <div className="sma" data-aos="fade-up" data-aos-duration="1000">
          <BottomContainer title={"K J Lifestyle LLP"} />
          <div className="smaLine1"></div>
          <div className="smaLine2"></div>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
