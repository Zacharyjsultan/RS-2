import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import "./Header.css";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <header>
        <div className="header-nav">
          <Link to="/" className="home-button">
            <Button variant="contained">
              {" "}
              <Avatar
                alt="little zach"
                className="avatar"
                src={`${process.env.PUBLIC_URL}/RS.png`}
              />
            </Button>
          </Link>

          <a
            className="Email"
            href="mailto:RebeccaSultan@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="contained"
              onClick={() => {
                alert("this will take your email");
              }}
            >
              Email
            </Button>
          </a>
        </div>
      </header>
      <Navbar />
    </>
  );
};

export default Header;
