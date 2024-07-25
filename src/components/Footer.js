// src/components/Footer.js
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const Footer = () => (
  <Box
  sx={{
    background: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: "blur(8px)",
    position: 'fixed',
    bottom: 0,
    width: '100%',
    textAlign: 'center',
    height: '2.5rem',
    display: 'flex', // Utilisation de flexbox pour aligner le contenu
    justifyContent: 'center', // Centrage horizontal
    alignItems: 'center' // Centrage vertical
  }}
>
    <Typography variant="body2">
      &copy; 2024 Eyquemro. Tous droits réservés.
    </Typography>
  </Box>
);

export default Footer;