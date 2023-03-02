import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-text">sdfsdfsd</div>
      <a
        className="Email"
        href="mailto:RebeccaSultan@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          variant="contained"
          onClick={() => {
            alert("this will take your email");
          }}
        >
          Email
        </button>
      </a>
      <div className="footer">
        {" "}
        <Stack direction="column" spacing={2}>
          <Avatar
            alt="little rs"
            className="avatar"
            src={`${process.env.PUBLIC_URL}/RS.png`}
          />
        </Stack>
      </div>
    </div>
  );
}
