import React from "react";
import FounderProfilesList from "./FounderProfilesList";
import { Container, Typography, Box } from "@mui/material";
import InvestorProfilesList from "./InvestorProfilesList";

const FounderHome = () => {
  return (
    <>
      <Typography variant="h4" color={"skyblue"} margin={"14px"}>
        Welcome Founder
      </Typography>
      <Typography variant="body" color={"skyblue"}>
        Here you can view profiles of other founders and investors for
        networking
      </Typography>
      <Container
        maxWidth="lg"
        display="flex"
        flexDirection="row"
        // alignItems="center"
        // justifyContent="center"
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          // height="100vh"
        >
          <Typography variant="h4" style={{ marginTop: "10px" }}>
            Founders like you
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
            Investors you might be interested in
          </Typography>
          <InvestorProfilesList />
        </Box>
      </Container>
    </>
  );
};

export default FounderHome;
