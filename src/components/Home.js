// src/components/Home.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import '../styles/Home.css';

// Importer les images
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import { Popper } from '@mui/material';


const Home = () => (
  <Box id="home" sx={{ textAlign: 'center', paddingTop: '5rem', paddingBottom: '5rem', color: '#fff', background: 'rgba(0, 0, 0, 0.5)' }}>
    <Container>
      <Typography variant="h3" gutterBottom fontFamily="Poppins">
         Hello👋 I'm Romain from Bordeaux ! 🇫🇷
      </Typography>
      <Typography variant="h6" paragraph>
        Ingénieur en cybersécurité passionné par la protection des systèmes d'information.
      </Typography>
      <Box component="blockquote">
        <Typography variant="body1" gutterBottom>
          "La sécurité n'est pas un produit, mais un processus."
        </Typography>
        <Typography variant="body2">
          - Bruce Schneier
        </Typography>
      </Box>
       <Carousel     
        showArrows={true}
        showThumbs={false} // Masquer les vignettes
        showIndicators={true} // Masquer les indicateurs (les petits points)
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        swipeable={true}
        emulateTouch={false}
        dynamicHeight={false}
        stopOnHover={true}
        transitionTime={500}
        centerMode={false}
        centerSlidePercentage={100}>
         <div>
          <img src={image1} alt="Photo 1" style={{ width: '20%' }} />
          <Typography className="legend">Sécurisation des réseaux</Typography>
        </div>
        <div>
          <img src={image2} alt="Photo 2" style={{ width: '20%' }} />
          <Typography className="legend">Audit de sécurité</Typography>
        </div>
        <div>
          <img src={image3} alt="Photo 3" style={{ width: '20%' }} />
          <Typography className="legend">Analyse de vulnérabilités</Typography>
        </div>
      </Carousel>
    </Container>
    
  </Box>
);

export default Home;
