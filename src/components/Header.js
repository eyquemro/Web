// src/components/Header.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';
import '../styles/Header.css'
const Header = () => (
  <AppBar
    position="fixed"
    sx={{
      background: 'rgba(255, 255, 255, 0.2)', // Fond de la AppBar avec opacité
      backdropFilter: 'blur(8px)', // Effet de flou en arrière-plan
      alignItems: 'center', // Centre verticalement
      boxShadow: 'none', // Enlève l'ombre pour un look net
      height :'4rem'
    }}
  >
    <Toolbar
      sx={{
        display: 'flex',
        flexDirection: 'row', // Aligne les boutons en ligne
        alignItems: 'center', // Centre verticalement
        display: 'flex', // Utilisation de flexbox pour aligner le contenu
        justifyContent: 'center', // Centrage horizontal
       
        width: '100%', // Assure que la Toolbar occupe toute la largeur de l'AppBar
        padding: 0, // Enlève le padding par défaut
        margin: 0, // Enlève les marges par défaut
      }}
    >
      <Button className="styled-button" component={RouterLink} to="/">
        Home
      </Button >
      <Button className="styled-button" component={RouterLink} to="/skills">
        Skills
      </Button >
      <Button className="styled-button" component={RouterLink} to="/projects">
        Projects
      </Button >
      <Button className="styled-button" component={RouterLink} to="/contact">
        Contact
      </Button >
      <Button className="styled-button" component={RouterLink} to="/about">
        About
      </Button >
    </Toolbar>
  </AppBar>
);

export default Header;
