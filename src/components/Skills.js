import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { boxStyle, alignementStyle } from "../styles/styles";
import { floatingAnimationStyle, transitionStyle } from "../styles/animation";
import test from "../images/test.png";
import firewall from "../images/firewall.webp";  // Ensure the path is correct
import encryption from "../images/encryption.png";  // Ensure the path is correct
import monitoring from "../images/monitoring.webp";  // Ensure the path is correct
import penetration from "../images/penetration.webp";  // Ensure the path is correct



import azure from "../images/azure.webp";
import js from "../images/js.png";
import virtualbox from "../images/virtualbox.webp"; // Add image imports as needed
import python from "../images/python.webp";
import java from "../images/java.webp";
import csharp from "../images/csharp.webp";
import aws from "../images/aws.png";
import docker from "../images/docker.png";
import webdevelopment from "../images/webdevelopment.webp";
import react from "../images/react.webp";
import angular from "../images/angular.png";
import php from "../images/php.webp";
import sqlserver from "../images/sqlserver.png";
import git from "../images/git.webp";

const skillsData = [
  {
    domain: "Cybersecurity",
    technologies: [
      {
        name: "Firewall",
        logo: firewall,
        description: "Experience with firewall setup and management.",
      },
      {
        name: "Encryption",
        logo: encryption,
        description: "Proficient in encryption techniques to secure data.",
      },
      {
        name: "Intrusion Detection",
        logo: monitoring,
        description: "Skills in monitoring network traffic for suspicious activities.",
      },
      {
        name: "Penetration jsing",
        logo: penetration,
        description: "Conducting simulated attacks",
      },

    ],

  },

  {
    domain: "Cloud and Virtualization",
    technologies: [
      {
        name: "AWS",
        logo: aws,
        description: "Experience with Amazon Web Services, including S3, EC2, and Lambda.",
      },
      {
        name: "Azure",
        logo: azure,
        description: "Knowledge of Microsoft Azure services and deployment.",
      },
      {
        name: "Docker",
        logo: docker,
        description: "Containerization using Docker for application deployment.",
      },
      {
        name: "VirtualBox",
        logo: virtualbox,
        description: "Experience with VirtualBox for virtual environment setups.",
      },
    ],

  },
  {
    domain: "Web Development",
    technologies: [
      {
        name: "HTML & CSS",
        logo: webdevelopment,
        description: "Markup and styling for web pages.",
      },
      {
        name: "JavaScript",
        logo: js,
        description: "Programming for interactive and dynamic web content.",
      },
      {
        name: "React",
        logo: react,
        description: "Building user interfaces using React.",
      },
      {
        name: "Angular",
        logo: angular,
        description: "Developing web applications with Angular.",
      },
      {
        name: "PHP",
        logo: php,
        description: "Server-side scripting for dynamic web content.",
      },
    ],

  },
  {
    domain: "Software Development",
    technologies: [
      {
        name: "C#",
        logo: csharp,
        description: "Development of applications using C#.",
      },
      {
        name: "Java",
        logo: java,
        description: "Backend development using Java.",
      },
      {
        name: "Python",
        logo: python,
        description: "Scripting and automation using Python.",
      },
      {
        name: "SQL",
        logo: sqlserver,
        description: "Database management and query optimization.",
      },
      {
        name: "Git",
        logo: git,
        description: "Version control and collaboration using Git.",
      },
    ],

  },
];




const Skills = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleBoxClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <Box>
      <Box sx={alignementStyle}>
        {skillsData.map((skill, index) => (
          <motion.div key={index} whileHover={{ scale: 1.1 }}>
            <Box sx={boxStyle} onClick={() => handleBoxClick(index)}>
              <Typography class="Subheading">{skill.domain}</Typography>
            </Box>
          </motion.div>
        ))}
      </Box>

      <Box
        sx={{ display: "flex", justifyContent: "center", position: "relative" }}
      >
        <AnimatePresence mode="wait">
          {activeIndex !== null ? (
            <motion.div key={activeIndex} {...transitionStyle}>
              <Box sx={boxStyle}>
                <Typography class="Subheading">
                  {skillsData[activeIndex].domain}
                </Typography>

                {skillsData[activeIndex].technologies.map((tech, techIndex) => (
                  <Box
                    key={techIndex}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <img src={tech.logo} alt={tech.name} class="small-image" />
                    <Typography class="Body2">
                      {tech.description}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </motion.div>
          ) : (
            <motion.div {...floatingAnimationStyle}>
              <img
                src={test}
                style={{
                  width: "70%", // Ajustez en fonction de la taille souhaitée de l'image
                  height: "70%",
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </Box>
    </Box>
  );
};

export default Skills;
