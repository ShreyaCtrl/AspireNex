import React from "react";
import { Box, Container, Typography } from "@mui/material";

const CustomerHome = () => {
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
          Welcome Customer!
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Here you can browse and compare products.
        </Typography>
        {/* Add customer-specific features and components here */}
      </Box>
    </Container>
  );
};

export default CustomerHome;
