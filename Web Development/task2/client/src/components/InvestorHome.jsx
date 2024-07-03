import React from "react";
import { Box, Container, Typography } from "@mui/material";
import FounderProfilesList from "./FounderProfilesList";
import InvestorProfilesList from "./InvestorProfilesList";

const InvestorHome = () => {
  return (
    <>
      <Typography variant="h4" color={"skyblue"} margin={"14px"}>
        Welcome Investor
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
            Investors like you
          </Typography>
          <InvestorProfilesList />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          // height="100vh"
        >
          <Typography variant="h4" style={{ marginTop: "10px" }}>
            Founders you might be interested in
          </Typography>
          <FounderProfilesList />
        </Box>
      </Container>
    </>
  );
};

export default InvestorHome;
