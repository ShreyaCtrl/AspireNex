import React from "react";
import {
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
  Card,
  CardContent,
} from "@mui/material";
import useGetInvestorProfiles from "../hooks/useGetAllInvestor";

const InvestorProfilesList = () => {
  const { investorProfiles, isLoading, error } = useGetInvestorProfiles();

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <List>
      {investorProfiles.map((profile) => (
        <Card key={profile._id} style={{ marginBottom: "20px" }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              {profile.user.username}
            </Typography>
            <Divider />
            <Typography variant="body1" style={{ marginTop: "10px" }}>
              <strong>Investment Preferences:</strong>{" "}
              {profile.investmentPreferences || "N/A"}
            </Typography>
            <Typography variant="body1" style={{ marginTop: "10px" }}>
              <strong>Portfolio:</strong>{" "}
              {profile.portfolio.join(", ") || "N/A"}
            </Typography>
            <Typography variant="body1" style={{ marginTop: "10px" }}>
              <strong>Success Stories:</strong>{" "}
              {profile.successStories.join(", ") || "N/A"}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </List>
  );
};

export default InvestorProfilesList;
