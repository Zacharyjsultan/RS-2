import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header>
        <div className="header-nav">
          <Link to="/" className="home-button">
            <Button variant="contained" size="small" className="button-home">
              <h3>home</h3>{" "}
              <Avatar
                alt="little zach"
                className="avatar"
                src={`${process.env.PUBLIC_URL}/RS.png`}
              />
            </Button>
          </Link>
          <h2 className="rs">Rebecca Sultan</h2>
          <div className="nav">
            <div className="contact-button">
              <Button size="large " to="/contact">
                Contact Form
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

/* <a
              className="Email"
              href="mailto:RebeccaSultan@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="unstyled"
                onClick={() => {
                  alert("this will take your email");
                }}
              >
                Email
              </Button>
            </a>{" "} */
