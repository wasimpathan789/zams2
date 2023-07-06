import "./Contact.css";
import { ImLocation } from "react-icons/im";
const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-top">
        <div className="contact-overlay"></div>
        <div className="contact-content">
          <h1>ZAMS Psychometric System</h1>
          <h5>We provide the Best...</h5>
          <div className="contact-address">
            <ImLocation />
            <p>
              {" "}
              Registered Office - <br /> Santosh Nagar Colony, <br /> St Ann's
              College Road, <br />
              Mehdipatnam, <br /> Hyderabad - 500028 (T.S).
            </p>
          </div>
          <p>
            GSTIN : UXXXXXXXX
            <br />
            GSTIN : UXXXXXXXX
          </p>
          <p></p>
        </div>
      </div>
      <div className="contact-bottom">
        <form action="" className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Your Phone Number" />
          <input type="email" placeholder="Your Email" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="7"
            placeholder="Description"
          ></textarea>
          <div className="contactForm-btn">
            <button>Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
