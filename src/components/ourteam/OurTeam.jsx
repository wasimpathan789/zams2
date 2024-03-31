import TeamCard from "./TeamCard";
import "./ourTeam.css";
import hi from "../../assets/user.jpg";
import Heading from "../heading/Heading";
import logo from "../../assets/zams.png";

const OurTeam = () => {
  return (
    <div id="team" className="ourTeam">
      <Heading title={"Our Team"} />
      <div className="teamCards">
        <TeamCard
          color={"#ff2c95"}
          name={"Mohammad Zahed"}
          qualification={"B.E (Mechanical) HVAC"}
          designation={" Assistant Manager"}
          bg={logo}
        />
        <TeamCard
          color={"#1c68b3"}
          name={"Mohammad Muneeb"}
          qualification={"B.E (Mechanical) HVAC"}
          designation={"Design Head"}
          bg={logo}
        />
        <TeamCard
          color={"#ff2c95"}
          name={"Mohammad Shoib"}
          qualification={"B.E (Mechanical) HVAC"}
          designation={"Project Head"}
          bg={logo}
        />
      </div>
    </div>
  );
};

export default OurTeam;
