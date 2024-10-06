import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { boxStyle, alignementStyle } from "../styles/styles"; // Assurez-vous que le chemin est correct

function Links() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tryhackme.com/badge/3138204";
    script.async = true;

    // Écouter l'événement de chargement du script
    script.onload = () => {
      const badgeContainer = document.getElementById("tryhackme-badge");
      if (badgeContainer) {
        badgeContainer.innerHTML = ""; // Vider le contenu précédent
        badgeContainer.appendChild(script); // Ajouter le script au conteneur
      }
    };

    document.body.appendChild(script);

    // Nettoyage
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Box sx={alignementStyle}>
      {/* Bloc GitHub */}
      <Box sx={boxStyle}>
        <img src="link-to-github-image" alt="GitHub" />
        <a href="https://github.com/your-username">GitHub</a>
      </Box>

      {/* Bloc TryHackMe */}
      <Box sx={boxStyle}>
        <img src="link-to-tryhackme-image" alt="TryHackMe" />
        <a href="https://tryhackme.com/p/eyquemro">TryHackMe</a>
        {/* Badge TryHackMe */}
        <div id="tryhackme-badge">Le badge n'est pas disponible à cause d'une restriction de cookie.</div>
      </Box>

      {/* Bloc Root-Me */}
      <Box sx={boxStyle}>
        <img src="link-to-rootme-image" alt="Root-Me" />
        <a href="https://root-me.org/your-username">Root-Me</a>
      </Box>
    </Box>
  );
}

export default Links;
