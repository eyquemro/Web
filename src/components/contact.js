// src/components/Contact.js
import React, { useState } from "react";
import { Box, Typography, Container, TextField, Button } from "@mui/material";
import { textFieldStyle, buttonStyle, formStyle } from "../styles/styles"; // Import des styles

const Contact = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Subject: ${subject}`);
    console.log(`Message: ${message}`);
  };

  return (
    <Box>
      <Container>
        <Typography class="Heading">Contact me!</Typography>
        <Box>
          <form onSubmit={handleSubmit} style={formStyle}>
            {" "}
            {/* Applique le style */}
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
      </Container>
    </Box>
  );
};

export default Contact;
