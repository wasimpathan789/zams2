import Heading from "../../components/heading/Heading";
import "./AboutUsPage.css";
import logo from "../../assets/zams.png";

const AboutUsPage = () => {
  return (
    <div id="about">
      <Heading title={"About Us"} />
      <div className="about-us-wrapper">
        <div className="about-overlay"></div>
        <div className="about-content">
          <div className="about-image">
            <img src={logo} alt="" />
          </div>
          <div className="about-text">
            <p
              data-aos="fade-right"
              data-aos-duration="1500"
              // data-aos-easing="ease-in-sine"
            >
              We are team of HVAC engineers that have gained considerable
              experience in HVAC system design and execution in multiple
              sectors. We have a passion for design and engineering within the
              built environment and relish the challenging of turning project
              into reality.{" "}
            </p>{" "}
            <br /> <br />
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              // data-aos-easing="ease-in-sine"
            >
              Our team combine experience, expertise and knowledge to provide
              clients with what they want for all temperature controlled
              environments. Using our specialist knowledge, we involve to reduce
              the carbon footprint of the world via clean and green design
              solutions. We are a passionate team that combines energies to
              serve you professionally. We understand your requirements and
              deliver accordingly to exceed expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
