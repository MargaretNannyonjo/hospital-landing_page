import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.avif";

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbarLogo">
          <img src={logo} alt="Unity Hospital" />
        </div>
        <Link to="/" className="logoName">
          UH
        </Link>

        <div className="navLinks">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/about" className="link">
            About
          </Link>
          <Link to="/services" className="link">
            Services
          </Link>
          <Link to="/careers" className="link">
            Careers
          </Link>
          <Link to="/contact" className="link">
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};
