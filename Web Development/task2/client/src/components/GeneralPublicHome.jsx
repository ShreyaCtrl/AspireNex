import React from "react";
import { Box, Container, Typography } from "@mui/material";
import FounderProfilesList from "./FounderProfilesList";
import InvestorProfilesList from "./InvestorProfilesList";

const GeneralPublicHome = () => {
  return (
    <Container maxWidth="lg">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        // height="100vh"
      >
        <Typography variant="h4" style={{ marginTop: "10px" }}>
          Founders
        </Typography>
        <FounderProfilesList />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        // height="100vh"
      >
        <Typography variant="h4" style={{ marginTop: "10px" }}>
          Investors
        </Typography>
        <InvestorProfilesList />
      </Box>
      
    </Container>
  );
};

export default GeneralPublicHome;
