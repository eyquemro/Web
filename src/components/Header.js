import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Link as RouterLink } from "react-router-dom";
import { appBarStyle, toolbarStyle, buttonStyle } from "../styles/styles"; // Import des styles
import Button from "@mui/material/Button"; // Import de Button depuis MUI

const Header = () => (
  <AppBar sx={appBarStyle}  position="relative">
    <Toolbar sx={toolbarStyle}>
      <Button sx={buttonStyle} component={RouterLink} to="/">
        Home
      </Button>
      <Button sx={buttonStyle} component={RouterLink} to="/skills">
        Skills
      </Button>
      <Button sx={buttonStyle} component={RouterLink} to="/contact">
        Contact
      </Button>
      <Button sx={buttonStyle} component={RouterLink} to="/links">
        Links
      </Button>
    </Toolbar>
  </AppBar>
);

export default Header;
