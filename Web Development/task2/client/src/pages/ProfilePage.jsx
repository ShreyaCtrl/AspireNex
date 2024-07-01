import React, { useContext } from "react";
import { Container, Grid } from "@mui/material";
import InvestorProfileCard from "../components/InvestorProfileCard";
import FounderProfileCard from "../components/FounderProfileCard";
import { UserContext } from "../UserContext";

const ProfilePage = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <div>Loading...</div>; // or redirect to login page
  }

  return (
    <Container>
      <Grid container spacing={3} justifyContent="center">
        {user.role === "Investor" && (
          <Grid item xs={12} md={6}>
            <InvestorProfileCard />
          </Grid>
        )}
        {user.role === "Founder" && (
          <Grid item xs={12} md={6}>
            <FounderProfileCard />
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default ProfilePage;
