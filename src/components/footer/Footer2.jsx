import "./footer2.css";
import logo from "../../assets/logo.png";
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import { BiLogoFacebook } from "react-icons/bi";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Footer2 = () => {
  return (
    <div className="footer-main">
      <div className="footer">
        <img src={logo} alt="" />
        <h6
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          We are team of HVAC engineers that have gained considerable experience
          in HVAC system design and execution in multiple sectors. We have a
          passion for design and engineering within the built environment and
          relish the challenging of turning project into reality.
        </h6>
        <hr />
        <div class="hr"></div>
        <div className="footer-address">
          <h6
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            Registered Office - <br /> Santosh Nagar Colony, <br /> St Ann's
            College Road Mehdipatnam Hyderabad - 500028 (T.S).
          </h6>
        </div>
        <div className="footer-numbers">
          <h6>
            <p data-aos="fade-up" data-aos-duration="2000">
              +91 99 60 18 89 92
            </p>
            {/* <p data-aos="fade-up" data-aos-duration="2000">
              +91 99 60 18 89 92
            </p> */}
            <span>|</span>{" "}
            <a data-aos="fade-up" data-aos-duration="2000">
              info@zamshvac.com
            </a>
          </h6>
        </div>

        <div class="contact-social">
          <ul>
            <li>
              <a
                data-aos="fade-up"
                data-aos-duration="2000"
                class="hover-target"
                href=""
              >
                <BiLogoFacebook />
              </a>
            </li>
            <li>
              <a
                data-aos="fade-down"
                data-aos-duration="2000"
                class="hover-target"
                href=""
              >
                <BsLinkedin />
              </a>
            </li>
            <li>
              <a
                data-aos="fade-up"
                data-aos-duration="2000"
                class="hover-target"
                href=""
              >
                <BsTwitter />
              </a>
            </li>
            <li>
              <a
                data-aos="fade-down"
                data-aos-duration="2000"
                class="hover-target"
                href=""
              >
                <BsInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="copyRight">
        <p data-aos="zoom-in">Copyright &copy; 2021</p>
        <img data-aos="zoom-in" src={logo} alt="logo" />
        <p data-aos="zoom-in"> All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer2;
