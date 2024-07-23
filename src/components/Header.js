// src/components/Header.js
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import '../styles/Header.css';

// Style pour les boutons
const StyledButton = styled(Button)(({ theme }) => ({
  color: "black", // Texte en noir pour contraster avec le fond blanc
}));

const Header = () => (
  <AppBar
    position="fixed"
    sx={{
      background: "rgba(255, 255, 255, 0.2)", // Fond de la AppBar avec opacité
      backdropFilter: "blur(8px)", // Effet de flou en arrière-plan
      alignItems: "center", // Centre verticalement
      boxShadow: "none", // Enlève l'ombre pour un look net
      height: "auto", // Ajuste la hauteur en fonction du contenu
      padding: 0, // Enlève le padding par défaut
      margin: 0, // Enlève les marges par défaut
    }}
  >
    <Toolbar
      sx={{
        display: "flex",
        flexDirection: "line", // Aligne les boutons en ligne
        alignItems: "center", // Centre verticalement
        justifyContent: "space-between", // Espace les boutons sur toute la largeur
        padding: 0, // Enlève le padding par défaut
        margin: 0, // Enlève les marges par défaut
        width: "80%", // Assure que la Toolbar occupe toute la largeur de l'AppBar
      }}
    >
      <StyledButton component={RouterLink} to="/">
        Home
      </StyledButton>
            <StyledButton component={RouterLink} to="/skills">
        Skills
      </StyledButton>
      <StyledButton component={RouterLink} to="/projects">
        Projects
      </StyledButton>
      <StyledButton component={RouterLink} to="/contact">
        Contact
      </StyledButton>
      <StyledButton component={RouterLink} to="/about">
        About
      </StyledButton>
    </Toolbar>
  </AppBar>
);

export default Header;
