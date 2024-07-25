import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "../styles/Home.css";

// Importer les images
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";

const Home = () => (
  <Box id="home">
    <Container>
      <Typography class="Heading">
        Hello👋 I'm Romain from Bordeaux ! 🇫🇷
      </Typography>
      <Typography class="Subheading">
        Ingénieur en cybersécurité passionné par la protection des systèmes
        d'information.
      </Typography>
      <Box component="blockquote" class="blockquote">
        <Typography class="Body1">
          "La sécurité n'est pas un produit, mais un processus."
        </Typography>
        <Typography class="Body2">Bruce Schneier</Typography>
      </Box>
      {/* <Carousel
        showArrows={true}
        showThumbs={false}
        showIndicators={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        swipeable={true}
        emulateTouch={false}
        dynamicHeight={false}
        stopOnHover={true}
        transitionTime={500}
        centerMode={false}
        centerSlidePercentage={100}
      >
        <div>
          <img src={image1} alt="Photo 1" className="carousel-image" />
          <Typography className="legend">Sécurisation des réseaux</Typography>
        </div>
        <div>
          <img src={image2} alt="Photo 2" className="carousel-image" />
          <Typography className="legend">Audit de sécurité</Typography>
        </div>
        <div>
          <img src={image3} alt="Photo 3" className="carousel-image" />
          <Typography className="legend">Analyse de vulnérabilités</Typography>
        </div>
      </Carousel> */}
    </Container>
  </Box>
);

export default Home;
