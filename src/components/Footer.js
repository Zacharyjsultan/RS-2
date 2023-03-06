import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="instagram">sdfsdf</div>

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
