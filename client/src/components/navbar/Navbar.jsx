import "./navbar.css";
import logo from "../../assets/logo.png";
import { BiMenuAltRight } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [click, setClick] = useState(false);

  const menuHandler = () => {
    setClick(!click);
  };
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
      </div>
      <ul className={click ? "nav-links-active" : "nav-links"}>
        <li>
          {/* <a href="">Home</a> */}
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#project">Projects</a>
        </li>
        <li>
          <a href="#team">Our Team</a>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
      </ul>
      <div className="hamburger" onClick={menuHandler}>
        {click ? (
          <IoMdClose style={{ fontSize: "40px" }} />
        ) : (
          <BiMenuAltRight style={{ fontSize: "40px" }} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
