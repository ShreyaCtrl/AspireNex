import React from "react";
import { CircularProgress, List, ListItem, Typography, Card, CardContent, Divider } from "@mui/material";
import useGetFounderProfiles from "../hooks/useGetAllFounders";

const FounderProfilesList = () => {
  const { founderProfiles, isLoading, error } = useGetFounderProfiles();

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <List>
      {founderProfiles.map((profile) => (
        <Card key={profile._id} style={{ marginBottom: "20px" }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              {profile.companyInfo}
            </Typography>
            <Divider />
            <Typography variant="body1" style={{ marginTop: "10px" }}>
              <strong>Pitch Deck:</strong> {profile.pitchDeck || "N/A"}
            </Typography>
            <Typography variant="body1" style={{ marginTop: "10px" }}>
              <strong>Funding Requirements:</strong>{" "}
              {profile.fundingRequirements || "N/A"}
            </Typography>
            <Typography variant="body1" style={{ marginTop: "10px" }}>
              <strong>Achievements:</strong>{" "}
              {profile.achievements.join(", ") || "N/A"}
            </Typography>
            <Typography variant="body1" style={{ marginTop: "10px" }}>
              <strong>Milestones:</strong>{" "}
              {profile.milestones.join(", ") || "N/A"}
            </Typography>
            <Typography variant="body1" style={{ marginTop: "10px" }}>
              <strong>Updates:</strong> {profile.updates.join(", ") || "N/A"}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </List>
  );
};

export default FounderProfilesList;
