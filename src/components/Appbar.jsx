import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import "./../css/data.css";

function appbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ background: "#000000" }} position="sticky" elevation={0}>
        <Toolbar>
          <Typography variant="h4" className="appbar" sx={{ flexGrow: 1 }}>
            Spring cURL
          </Typography>
          <br />
        </Toolbar>
        <Toolbar>
          <Typography
            variant="subtitle1"
            className="appbar"
            sx={{ flexGrow: 1 }}
          >
            Easily generate Spring Boot project using{" "}
            <a className="hyperlink-white" href="https://curl.haxx.se">
              cURL
            </a>{" "}
            Command
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default appbar;
