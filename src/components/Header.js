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
            <Button variant="contained" className="buttonhome">
              <h3>home</h3>{" "}
              <Avatar
                alt="little zach"
                className="avatar"
                src={`${process.env.PUBLIC_URL}/RS.png`}
              />
            </Button>
          </Link>
          <div className="nav">
            <Navbar />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
