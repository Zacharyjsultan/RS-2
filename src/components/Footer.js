import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import "./Footer.css";
import Button from "@mui/material/Button";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="instagram">sdfsdf</div>
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
      </a>{" "}
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
