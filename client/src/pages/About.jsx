import React from "react";
import { Box, Typography, Container, Grid, Avatar, Paper } from "@mui/material";
import { FcAbout } from "react-icons/fc";

const About = () => {
  return (
    <Container sx={{ mt: 5, mb: 5 }}>
      {/* Page Header */}
      <Box textAlign="center" mb={4}>
        <FcAbout size={50} />
        <Typography variant="h4" component="h1" fontWeight="bold" mt={2}>
          About Cartifya
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" mt={1}>
          Your one-stop solution for online shopping
        </Typography>
      </Box>

      {/* Description */}
      <Paper sx={{ p: 4, mb: 5, backgroundColor: "#f9f9f9" }}>
        <Typography variant="body1" paragraph>
          Cartifya is an e-commerce web application built to provide a seamless online shopping experience. 
          I designed and developed this project from scratch, implementing features like:
        </Typography>
        <ul>
          <li>Responsive UI using React and Material-UI</li>
          <li>User authentication (Login/Register)</li>
          <li>Shopping Cart functionality</li>
          <li>Product Categories and Navigation</li>
          <li>Interactive and modern UI/UX</li>
        </ul>
        <Typography variant="body1" paragraph>
          The goal was to create a fully functional, clean, and user-friendly online store interface, while focusing on code modularity and maintainability.
        </Typography>
      </Paper>

      {/* Developer Section */}
      <Box textAlign="center">
        <Typography variant="h5" mb={3}>
          Meet the Developer
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item>
            <Avatar
              alt="Ritvij Verma"
              src="/path-to-your-photo.jpg"
              sx={{ width: 120, height: 120, mx: "auto", mb: 2 }}
            />
            <Typography variant="h6">Ritvij Verma</Typography>
            <Typography variant="body2" color="text.secondary">
              Full-Stack Developer | React & Material-UI Enthusiast
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default About;
