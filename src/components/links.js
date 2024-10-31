import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { boxStyle, alignementStyle } from "../styles/styles"; // Assurez-vous que le chemin est correct
import github from "../images/github.png"; // Ensure the path is correct
import rootme from "../images/rootme.webp"; // Ensure the path is correct
import Cookies from "js-cookie";

function Links() {
  useEffect(() => {
    // Configurer le cookie avec SameSite=None et Secure
    const existingCookie = Cookies.get("AWSALBCORS");
    if (existingCookie) {
      Cookies.set("AWSALBCORS", existingCookie, {
        sameSite: "None",
        secure: true,
      });
    }
  }, []);
  return (
    <Box sx={alignementStyle}>
      {/* Bloc GitHub */}
      <motion.div whileHover={{ scale: 1.1 }}>
        <a
          href="https://github.com/eyquemro"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Box
            sx={{
              ...boxStyle,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography class="Subheading">GitHub</Typography>
            <img
              src={github}
              alt="GitHub"
              style={{ width: "5.5rem", height: "5.5rem" }}
            />
          </Box>
        </a>
      </motion.div>

      {/* Bloc TryHackMe */}
      <motion.div whileHover={{ scale: 1.1 }}>
        <Box
          sx={{
            ...boxStyle,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography class="Subheading">TryHackme</Typography>
          <iframe
            src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=3138204"
            style={{
              border: "none",
              width: "110%",
              height: "90px",
              transform: "scale(0.8)", // Réduisez le facteur d'échelle selon vos besoins
            }}
          ></iframe>
        </Box>
      </motion.div>

      {/* Bloc Root-Me */}
      <motion.div whileHover={{ scale: 1.1 }}>
        <a
          href="https://www.root-me.org/eyquemro"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Box
            sx={{
              ...boxStyle,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography class="Subheading">Root-Me</Typography>
            <img
              src={rootme}
              alt="Root-Me"
              style={{ width: "5.5rem", height: "5.5rem" }}
            />
          </Box>
        </a>
      </motion.div>
    </Box>
  );
}

export default Links;
