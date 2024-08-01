import React from "react";
import { Box, Typography } from "@mui/material";

// Importer les images
import profil from "../images/profil.jpg";


const Home = () => (
  <Box   >
      <Typography class="Heading" >
        Hello👋 I'm Romain from Bordeaux ! 🇫🇷
      </Typography>
      
      <img src={profil} alt="profil"  class="profil" />
      <Typography class="Subheading" >
      Software engineer passionate about protecting information systems.
      </Typography>
      <Box component="blockquote" >
        <Typography class="Body1">
        Security is not a product, but a process.
        </Typography>

      </Box>

  </Box>
);

export default Home;
