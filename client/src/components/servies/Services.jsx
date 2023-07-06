import "./services.css";
import check from "../../assets/check.png";
import ac from "../../assets/ac/ac1.jpg";
import ServiceCard from "./ServiceCard";
import { SiAltiumdesigner } from "react-icons/si";
import { GrVmMaintenance } from "react-icons/gr";
import Heading from "../heading/Heading";
import { ImDrawer } from "react-icons/im";
import { SiGoogletagmanager } from "react-icons/si";
import { MdPointOfSale } from "react-icons/md";
import { PiPerspectiveBold } from "react-icons/pi";
import { RiZcoolFill } from "react-icons/ri";
import { SiTestcafe } from "react-icons/si";
import { BiSolidHot } from "react-icons/bi";
import { FcRefresh } from "react-icons/fc";
import { RiBillLine } from "react-icons/ri";
import { SiAntdesign } from "react-icons/si";

const Services = () => {
  return (
    <div id="services">
      <Heading title={"Our Services"} />
      <div className="serviceWrapper">
        {/* <div className="serviceImage">
          <img src={ac} alt="" />
        </div>
        <ul className="serviceLeft">
          <li>
            <img src={check} alt="" />
            <p>Provide customized design for HVAC system</p>
          </li>
          <li>
            <img src={check} alt="" />
            <p>Provide customized design for HVAC system</p>
          </li>
          <li>
            <img src={check} alt="" />
            <p>Provide customized design for HVAC system</p>
          </li>
          <li>
            <img src={check} alt="" />
            <p>Provide customized design for HVAC system</p>
          </li>
          <li>
            <img src={check} alt="" />
            <p>Provide customized design for HVAC system</p>
          </li>
          <li>
            <img src={check} alt="" />
            <p>Provide customized design for HVAC system</p>
          </li>
          <li>
            <img src={check} alt="" />
            <p>Provide customized design for HVAC system</p>
          </li>
        </ul> */}
        <ServiceCard
          title={"Design"}
          // animation={"bounce"}
          description={" Provide customized design for HVAC system          "}
          icon={<SiAntdesign />}
        />
        <ServiceCard
          title={"Shop drawings"}
          description={"We provide Execution of shop drawings      "}
          icon={<ImDrawer />}
        />
        <ServiceCard
          title={"Maintenance "}
          description={" Annual Maintenance Contract"}
          icon={<GrVmMaintenance />}
        />
        <ServiceCard
          title={"management"}
          description={"We alos do Project Management"}
          icon={<SiGoogletagmanager />}
        />
        <ServiceCard
          title={"Sales "}
          description={" Sales and service of HVAC system          "}
          icon={<MdPointOfSale />}
        />
        <ServiceCard
          title={"Duct"}
          description={" Duct design and execution work"}
          icon={<PiPerspectiveBold />}
        />
        <ServiceCard
          title={"BOQ"}
          description={" Bill of quantities and materials          "}
          icon={<RiBillLine />}
        />
        <ServiceCard
          title={"VRF"}
          description={" VRV/VRF system installation          "}
          icon={<SiAltiumdesigner />}
        />
        <ServiceCard
          title={"AHU"}
          description={"AHU,FCU,TFA Unit installation"}
          icon={<FcRefresh />}
        />
        <ServiceCard
          title={"ventilation system"}
          description={
            " Designing and execution of ventilation system (toilet, kitchen, car parking)          "
          }
          icon={<BiSolidHot />}
        />
        <ServiceCard
          title={"Commissioning "}
          description={
            " Commissioning and handing over of the project          "
          }
          icon={<SiTestcafe />}
        />
        <ServiceCard
          title={"cooled system"}
          description={" Water cooled system and  Air cooled system          "}
          icon={<RiZcoolFill />}
        />
      </div>
    </div>
  );
};

export default Services;
