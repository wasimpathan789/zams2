import "./NewContact.css";
import { ImLocation } from "react-icons/im";

const NewContact = () => {
  return (
    <div id="contact" className="contactContainer">
      <div className="contactLeft">
        <div className="contactLeftOverlay"></div>
        <div className="contactLeftContent">
          <h1 data-aos-duration="1000" data-aos="fade-right">
            ZAMS Psychometric System
          </h1>
          <h5 data-aos-duration="1000" data-aos="fade-right">
            We provide the Best...
          </h5>
          <div className="contact-address">
            <ImLocation />
            <p data-aos-duration="1000" data-aos="fade-right">
              {" "}
              Registered Office - <br /> Santosh Nagar Colony, <br /> St Ann's
              College Road, <br />
              Mehdipatnam, <br /> Hyderabad - 500028 (T.S).
            </p>
          </div>
          <p data-aos-duration="1000" data-aos="fade-right">
            CIN : UXXXXXXXX
            <br />
            GSTIN : UXXXXXXXX
          </p>
        </div>
      </div>
      <div className="contactRight">
        <form action="" className="contactRightForm">
          <input
            type="text"
            placeholder="Your Name"
            data-aos-duration="1000"
            data-aos="fade-left"
          />
          <input
            type="text"
            placeholder="Your Phone Number"
            data-aos-duration="1000"
            data-aos="fade-left"
          />
          <input
            type="email"
            placeholder="Your Email"
            data-aos-duration="1000"
            data-aos="fade-left"
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="7"
            placeholder="Description"
            data-aos-duration="1000"
            data-aos="fade-left"
          ></textarea>
          <div className="contactForm-btn">
            <button data-aos-duration="1000" data-aos="fade-left">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewContact;
