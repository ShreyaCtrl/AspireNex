import React from "react";
import { Box, Container, Typography } from "@mui/material";

const FounderHome = () => {
  return (
    <Container maxWidth="lg">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome Employee!
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Here you can manage products and user accounts.
        </Typography>
        {/* Add employee-specific features and components here */}
      </Box>
    </Container>
  );
};

export default FounderHome;
