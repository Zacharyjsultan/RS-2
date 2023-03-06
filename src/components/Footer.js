import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import "./Footer.css";
// import { Button } from "@mui/material";

export default function Footer() {
  return (
    <div className="footer-container">
      {/* <a
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
      </a>{" "} */}
      <div className="icons">
        <a href="https://www.facebook.com">
          <i className="fa fa-facebook">Facebook</i>
        </a>
        <a href="https://www.instagram.com">
          <i className="fa fa-instagram">Instagram</i>
        </a>
        <a href="https://www.linkedin.com">
          <i className="fa fa-linkedin">Linkedin</i>
        </a>
        <a href="https://www.youtube.com">
          <i className="fa fa-youtube">Youtube</i>
        </a>
      </div>
      <Stack direction="row" spacing={2}>
        <Avatar
          alt="little zach"
          className="avatarr"
          src={`${process.env.PUBLIC_URL}/RS.png`}
        />
      </Stack>
    </div>
  );
}
