import "./footer.css";
import { BiLogoFacebook } from "react-icons/bi";
import { BsLinkedin, BsWhatsapp, BsTwitter, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div
            className="footer-col"
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
          >
            <h4>company</h4>
            <ul>
              <li href="#">
                <a>
                  We are team of HVAC engineers that have gained considerable
                  experience in HVAC system design and execution in multiple
                  sectors. We have a passion for design and engineering within
                  the built environment and relish the challenging of turning
                  project into reality.
                </a>
              </li>
            </ul>
          </div>
          <div
            className="footer-col"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h4>Address</h4>
            <ul>
              <li>
                <a href="#">
                  Santosh Nagar Colony, <br /> St Ann's College Road <br />{" "}
                  Mehdipatnam Hyderabad - 500028 (T.S).
                </a>
              </li>
            </ul>
          </div>
          <div
            className="footer-col"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <h4>Contact Details</h4>
            <ul>
              <li>
                <a href="#">info@zamshvac.com</a>
              </li>
              <li>
                <a href="#">+91 99 60 18 89 92</a>
              </li>
              <li>
                <a href="#">+91 77 96 41 89 93</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <a
                data-aos="fade-up"
                data-aos-duration="1000"
                class="hover-target"
                href="https://www.facebook.com/profile.php?id=100064179366839"
              >
                <BiLogoFacebook />
              </a>
              <a
                data-aos="fade-down"
                data-aos-duration="1000"
                class="hover-target"
                href=""
              >
                <BsLinkedin />
              </a>

              <a
                data-aos="fade-down"
                data-aos-duration="1000"
                class="hover-target"
                href="https://instagram.com/zams_psychrometric_system?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D"
              >
                <BsInstagram />
              </a>
              <a
                data-aos="fade-up"
                data-aos-duration="1000"
                class="hover-target"
                href="https://wa.me/+919960188992"
              >
                <BsWhatsapp />
              </a>
              {/* <FloatingWhatsApp
                phoneNumber="+91 9960188992"
                accountName="ZAMS"
                allowEsc
                allowClickAway
                notification
                notificationSound
              /> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
