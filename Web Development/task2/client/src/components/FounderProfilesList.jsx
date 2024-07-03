import React from "react";
import { CircularProgress, List, Typography, Card, CardContent, Divider } from "@mui/material";
import useGetFounderProfiles from "../hooks/useGetAllFounders";

const FounderProfilesList = () => {
  const { founderProfiles, isLoading, error } = useGetFounderProfiles();

  if (isLoading) {
    return (
      <React.Fragment>
        <svg width={0} height={0}>
          <defs>
            <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e01cd5" />
              <stop offset="100%" stopColor="#1CB5E0" />
            </linearGradient>
          </defs>
        </svg>
        <CircularProgress
          sx={{ "svg circle": { stroke: "url(#my_gradient)" } }}
        />
      </React.Fragment>
    );
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
