// src/components/Footer.js
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = () => (
  <Box sx={{ background: 'rgba(255, 255, 255, 0.2)',  backdropFilter: "blur(8px)",padding: '1rem', position: 'fixed', bottom: 0, width: '100%', textAlign: 'center' }}>
    <Typography variant="body2">
      &copy; 2024 Mon CV. Tous droits réservés.
    </Typography>
  </Box>
);

export default Footer;