import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";

function appbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="success" position="sticky" elevation={0}>
        <Toolbar>
          <Typography
            variant="h4"
            style={{ textAlign: "center" }}
            sx={{ flexGrow: 1 }}
          >
            Spring cURL
          </Typography>
          <br />
        </Toolbar>
        <Toolbar>
          <Typography
            variant="subtitle1"
            style={{ textAlign: "center", padding: "0%" }}
            sx={{ flexGrow: 1 }}
          >
            Easily generate Spring Boot project using{" "}
            <a style={{ color: "#ffffff" }} href="https://curl.haxx.se">
              cURL
            </a>
            Command
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default appbar;
