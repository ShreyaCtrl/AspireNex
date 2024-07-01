import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardActions,
  TextField,
  Button,
  Typography,
  Grid,
} from "@mui/material";
import useGetFounderProfile from "../hooks/useGetFounderProfile";
import useUpdateFounderProfile from "../hooks/useUpdateFounderProfile";

const FounderProfileCard = () => {
  const { profile, isLoading } = useGetFounderProfile();
  const { updateFounderProfile, isUpdatingFounderProfile } =
    useUpdateFounderProfile();
  const [editableProfile, setEditableProfile] = useState({});

  useEffect(() => {
    if (profile) {
      setEditableProfile(profile);
    }
  }, [profile]);

  const handleChange = (e) => {
    setEditableProfile({
      ...editableProfile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateFounderProfile(editableProfile);
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          Founder Profile
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Company Info"
              name="companyInfo"
              value={editableProfile.companyInfo || ""}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Pitch Deck"
              name="pitchDeck"
              value={editableProfile.pitchDeck || ""}
              onChange={handleChange}
              variant="outlined"
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Funding Requirements"
              name="fundingRequirements"
              value={editableProfile.fundingRequirements || ""}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Achievements"
              name="achievements"
              value={editableProfile.achievements || ""}
              onChange={handleChange}
              variant="outlined"
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Milestones"
              name="milestones"
              value={editableProfile.milestones || ""}
              onChange={handleChange}
              variant="outlined"
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Updates"
              name="updates"
              value={editableProfile.updates || ""}
              onChange={handleChange}
              variant="outlined"
              multiline
              rows={4}
            />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button
          size="large"
          color="primary"
          onClick={handleSubmit}
          disabled={isUpdatingFounderProfile}
        >
          {isUpdatingFounderProfile ? "Updating..." : "Update Profile"}
        </Button>
      </CardActions>
    </Card>
  );
};

export default FounderProfileCard;
