import "./Contact.css";
import { ImLocation } from "react-icons/im";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const [username, setUsername] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const form = useRef();
  // service id:  service_e9m8dyh

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
    <div className="contact-container">
      {/* <div className="contact-top">
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
      </div> */}
      <div className="contact-bottom">
        <form
          ref={form}
          onSubmit={sendEmail}
          action=""
          className="contact-form"
        >
          <input
            type="text"
            placeholder="Your Name"
            name="user_name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="Your Phone Number"
            name="user_number"
            value={userNumber}
            onChange={(e) => setUserNumber(e.target.value)}
          />
          <input
            type="email"
            placeholder="Your Email"
            name="user_email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="7"
            placeholder="Description"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
          ></textarea>
          <div className="contactForm-btn">
            <button type="submit" value="Send">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
