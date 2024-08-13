// src/components/Contact.js
import React, { useState } from "react";
import { Box, Typography, Container, TextField, Button } from "@mui/material";
import { textFieldStyle, buttonStyle, formStyle } from "../styles/styles";
import { motionStyle } from "../styles/animation";
import { motion } from "framer-motion"; // Import framer-motion

const Contact = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Subject:", subject);
    console.log("Message:", message);

    try {
      const response = await fetch('https://sendmail-api-5muimqwbua-ew.a.run.app', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ subject, body: message }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.text();
      console.log("Response:", result);

      // Réinitialiser les champs de texte après l'envoi
      setSubject("");
      setMessage("");
      setSuccess(true); // Marquer l'envoi comme réussi
    } catch (error) {
      console.error("Error:", error);
      setSuccess(false); // Réinitialiser l'état en cas d'échec
    }
  };

  return (
    <Box>
      <Container>
        <Typography class="Heading">Contact me!</Typography>
        <Box>
          <form onSubmit={handleSubmit} style={formStyle}>
            <TextField
              label="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              sx={textFieldStyle}
            />
            <TextField
              label="Message"
              multiline
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              sx={textFieldStyle}
            />
            <Button type="submit" sx={buttonStyle}>
              Send
            </Button>
          </form>
        </Box>
       
        <Typography class="Body1">Phone Number: +33644044073</Typography>
        {success && (
          <motion.div {...motionStyle}>
            <Typography class="Body1">
              Message sent successfully!
            </Typography>
          </motion.div>
        )}
      </Container>
    </Box>
  );
};

export default Contact;
