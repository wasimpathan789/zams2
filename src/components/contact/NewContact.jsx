import "./NewContact.css";
import { ImLocation } from "react-icons/im";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const NewContact = () => {
  const [username, setUsername] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y8wfgsh",
        "template_jjuf2fh",
        form.current,
        "AjoI7BRuuxrUhVJ5p"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          console.log("send ");
        },
        (error) => {
          console.log(error.text);
        }
      );
    setUserEmail("");
    setUserMessage("");
    setUserNumber("");
    setUsername("");
    console.log("hi");
  };
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
        <form
          ref={form}
          onSubmit={sendEmail}
          action=""
          className="contactRightForm"
        >
          <input
            type="text"
            placeholder="Your Name"
            data-aos-duration="1000"
            data-aos="fade-left"
            name="user_name"
            value={username}
            onChange={(e) => setUsername(e.target.event)}
          />
          <input
            type="text"
            placeholder="Your Phone Number"
            data-aos-duration="1000"
            data-aos="fade-left"
            name="user_number"
            value={userNumber}
            onChange={(e) => setUserNumber(e.target.event)}
          />
          <input
            type="email"
            placeholder="Your Email"
            data-aos-duration="1000"
            data-aos="fade-left"
            name="user_email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.event)}
          />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="7"
            placeholder="Description"
            data-aos-duration="1000"
            data-aos="fade-left"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.event)}
          ></textarea>
          <div className="contactForm-btn">
            <button type="submit" data-aos-duration="1000" data-aos="fade-left">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewContact;
