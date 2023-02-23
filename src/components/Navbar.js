import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "@mui/material";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav>
      <div className="right-nav">
        <Button
          variant="contained"
          className="dropdown"
          onClick={() => setOpen(!isOpen)}
        >
          <i className="menu-button"></i> Menu
        </Button>
        {isOpen && (
          <ul className="dropdown-buttons">
            <li className="about-button">
              <Link to="/about">About Me</Link>
            </li>
            <li className="biofield-button">
              <Link to="/biofield">What is BioField Tune-Up?</Link>
            </li>
            <li className="blog-button">
              <Link to="/appointments">Appointments</Link>
            </li>
            <li className="blog-button">
              <Link to="/blog">Blog</Link>
            </li>

            <li className="contact-button">
              <Link to="/contact">Contact Form</Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
