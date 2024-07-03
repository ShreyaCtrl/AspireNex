// import React, { useState, useEffect } from "react";
// import {
//   Card,
//   CardContent,
//   CardActions,
//   TextField,
//   Button,
//   Typography,
//   Grid,
// } from "@mui/material";
// import useGetInvestorProfile from "../hooks/useGetInvestorProfile";
// import useUpdateInvestorProfile from "../hooks/useUpdateInvestorProfile";

// const InvestorProfileCard = () => {
//   const { profile, isLoading } = useGetInvestorProfile();
//   const { updateInvestorProfile, isUpdatingInvestorProfile } =
//     useUpdateInvestorProfile();
//   const [editableProfile, setEditableProfile] = useState({});

//   useEffect(() => {
//     if (profile) {
//       setEditableProfile(profile);
//     }
//   }, [profile]);

//   const handleChange = (e) => {
//     setEditableProfile({
//       ...editableProfile,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await updateInvestorProfile(editableProfile);
//   };

//   if (isLoading) return <div>Loading...</div>;

//   return (
//     <Card>
//       <CardContent>
//         <Typography variant="h5" component="div">
//           Investor Profile
//         </Typography>
//         <Grid container spacing={2}>
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="Investment Preferences"
//               name="investmentPreferences"
//               value={editableProfile.investmentPreferences || ""}
//               onChange={handleChange}
//               variant="outlined"
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="Portfolio"
//               name="portfolio"
//               value={editableProfile.portfolio || ""}
//               onChange={handleChange}
//               variant="outlined"
//               multiline
//               rows={4}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="Success Stories"
//               name="successStories"
//               value={editableProfile.successStories || ""}
//               onChange={handleChange}
//               variant="outlined"
//               multiline
//               rows={4}
//             />
//           </Grid>
//         </Grid>
//       </CardContent>
//       <CardActions>
//         <Button
//           size="large"
//           color="primary"
//           onClick={handleSubmit}
//           disabled={isUpdatingInvestorProfile}
//         >
//           {isUpdatingInvestorProfile ? "Updating..." : "Update Profile"}
//         </Button>
//       </CardActions>
//     </Card>
//   );
// };

// export default InvestorProfileCard;

// import React, { useState, useEffect, useContext } from "react";
// import {
//   Card,
//   CardContent,
//   CardActions,
//   TextField,
//   Button,
//   Typography,
//   Grid,
// } from "@mui/material";
// import useGetInvestorProfile from "../hooks/useGetInvestorProfile";
// import useUpdateInvestorProfile from "../hooks/useUpdateInvestorProfile";
// import useAddInvestorProfile from "../hooks/useAddInvestorProfile";
// import { UserContext } from "../UserContext";

// const InvestorProfileCard = () => {
//   const { profile, isLoading } = useGetInvestorProfile();
//   const { updateInvestorProfile, isUpdatingInvestorProfile } =
//     useUpdateInvestorProfile();
//   const { addInvestorProfile, isAddingInvestorProfile } =
//     useAddInvestorProfile();
//   const { user } = useContext(UserContext);
//   const [editableProfile, setEditableProfile] = useState({
//     investmentPreferences: "",
//     portfolio: "",
//     successStories: "",
//   });
//   const [isEditMode, setIsEditMode] = useState(false);

//   useEffect(() => {
//     if (profile) {
//       setEditableProfile(profile);
//       setIsEditMode(true);
//     } else {
//       setIsEditMode(false);
//     }
//   }, [profile]);

//   const handleChange = (e) => {
//     setEditableProfile({
//       ...editableProfile,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (isEditMode) {
//       await updateInvestorProfile(editableProfile);
//     } else {
//       await addInvestorProfile({ ...editableProfile, userId: user._id });
//     }
//   };

//   if (isLoading) return <div>Loading...</div>;

//   return (
//     <Card>
//       <CardContent>
//         <Typography variant="h5" component="div">
//           Investor Profile
//         </Typography>
//         <Grid container spacing={2}>
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="Investment Preferences"
//               name="investmentPreferences"
//               value={editableProfile.investmentPreferences || ""}
//               onChange={handleChange}
//               variant="outlined"
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="Portfolio"
//               name="portfolio"
//               value={editableProfile.portfolio || ""}
//               onChange={handleChange}
//               variant="outlined"
//               multiline
//               rows={4}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="Success Stories"
//               name="successStories"
//               value={editableProfile.successStories || ""}
//               onChange={handleChange}
//               variant="outlined"
//               multiline
//               rows={4}
//             />
//           </Grid>
//         </Grid>
//       </CardContent>
//       <CardActions>
//         <Button
//           size="large"
//           color="primary"
//           onClick={handleSubmit}
//           disabled={isUpdatingInvestorProfile || isAddingInvestorProfile}
//         >
//           {isUpdatingInvestorProfile || isAddingInvestorProfile
//             ? "Saving..."
//             : isEditMode
//             ? "Update Profile"
//             : "Add Profile"}
//         </Button>
//       </CardActions>
//     </Card>
//   );
// };

// export default InvestorProfileCard;

// import React, { useState, useEffect, useContext } from "react";
// import {
//   Card,
//   CardContent,
//   CardActions,
//   TextField,
//   Button,
//   Typography,
//   Grid,
// } from "@mui/material";
// import useGetInvestorProfile from "../hooks/useGetInvestorProfile";
// import useUpdateInvestorProfile from "../hooks/useUpdateInvestorProfile";
// import useAddInvestorProfile from "../hooks/useAddInvestorProfile";
// import { UserContext } from "../UserContext";
// import "../assets/InvestorProfileCard.css"; // Import the CSS file

// const InvestorProfileCard = () => {
//   const { profile, isLoading } = useGetInvestorProfile();
//   const { updateInvestorProfile, isUpdatingInvestorProfile } =
//     useUpdateInvestorProfile();
//   const { addInvestorProfile, isAddingInvestorProfile } =
//     useAddInvestorProfile();
//   const { user } = useContext(UserContext);
//   const [editableProfile, setEditableProfile] = useState({
//     investmentPreferences: "",
//     portfolio: "",
//     successStories: "",
//   });
//   const [isEditMode, setIsEditMode] = useState(false);

//   useEffect(() => {
//     if (profile) {
//       setEditableProfile(profile);
//       setIsEditMode(true);
//     } else {
//       setIsEditMode(false);
//     }
//   }, [profile]);

//   const handleChange = (e) => {
//     setEditableProfile({
//       ...editableProfile,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (isEditMode) {
//       await updateInvestorProfile(editableProfile);
//     } else {
//       await addInvestorProfile({ ...editableProfile, userId: user._id });
//     }
//   };

//   if (isLoading) return <div>Loading...</div>;

//   return (
//     <Card className="profile-card">
//       <CardContent>
//         <Typography variant="h5" component="div" className="profile-title">
//           Investor Profile
//         </Typography>
//         <Grid container spacing={2}>
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="Investment Preferences"
//               name="investmentPreferences"
//               value={editableProfile.investmentPreferences || ""}
//               onChange={handleChange}
//               variant="outlined"
//               className="profile-input"
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="Portfolio"
//               name="portfolio"
//               value={editableProfile.portfolio || ""}
//               onChange={handleChange}
//               variant="outlined"
//               multiline
//               rows={4}
//               className="profile-input"
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="Success Stories"
//               name="successStories"
//               value={editableProfile.successStories || ""}
//               onChange={handleChange}
//               variant="outlined"
//               multiline
//               rows={4}
//               className="profile-input"
//             />
//           </Grid>
//         </Grid>
//       </CardContent>
//       <CardActions className="profile-actions">
//         <Button
//           size="large"
//           color="primary"
//           onClick={handleSubmit}
//           disabled={isUpdatingInvestorProfile || isAddingInvestorProfile}
//           className="profile-button"
//         >
//           {isUpdatingInvestorProfile || isAddingInvestorProfile
//             ? "Saving..."
//             : isEditMode
//             ? "Update Profile"
//             : "Add Profile"}
//         </Button>
//       </CardActions>
//     </Card>
//   );
// };

// export default InvestorProfileCard;


import React, { useState, useEffect, useContext } from "react";
import {
  Card,
  CardContent,
  CardActions,
  TextField,
  Button,
  Typography,
  Grid,
  CircularProgress
} from "@mui/material";
import useGetInvestorProfile from "../hooks/useGetInvestorProfile";
import useUpdateInvestorProfile from "../hooks/useUpdateInvestorProfile";
import useAddInvestorProfile from "../hooks/useAddInvestorProfile";
import { UserContext } from "../UserContext";
import "../assets/InvestorProfileCard.css"; // Import the CSS file

const InvestorProfileCard = () => {
  const { profile, isLoading } = useGetInvestorProfile();
  const { updateInvestorProfile, isUpdatingInvestorProfile } =
    useUpdateInvestorProfile();
  const { addInvestorProfile, isAddingInvestorProfile } =
    useAddInvestorProfile();
  const { user } = useContext(UserContext);
  const [editableProfile, setEditableProfile] = useState({
    investmentPreferences: "",
    portfolio: "",
    successStories: "",
  });
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    if (profile) {
      setEditableProfile(profile);
      setIsEditMode(true);
    } else {
      setIsEditMode(false);
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
    if (isEditMode) {
      await updateInvestorProfile(editableProfile);
    } else {
      await addInvestorProfile({ ...editableProfile, userId: user._id });
    }
  };

  if (isLoading) return (
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

  return (
    <Card className="profile-card">
      <CardContent>
        <Typography variant="h5" component="div" className="profile-title">
          Investor Profile
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Investment Preferences"
              name="investmentPreferences"
              value={editableProfile.investmentPreferences || ""}
              onChange={handleChange}
              variant="outlined"
              className="profile-input"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Portfolio"
              name="portfolio"
              value={editableProfile.portfolio || ""}
              onChange={handleChange}
              variant="outlined"
              multiline
              rows={4}
              className="profile-input"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Success Stories"
              name="successStories"
              value={editableProfile.successStories || ""}
              onChange={handleChange}
              variant="outlined"
              multiline
              rows={4}
              className="profile-input"
            />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions className="profile-actions">
        <Button
          size="large"
          color="primary"
          onClick={handleSubmit}
          disabled={isUpdatingInvestorProfile || isAddingInvestorProfile}
          className="profile-button"
        >
          {isUpdatingInvestorProfile || isAddingInvestorProfile
            ? "Saving..."
            : isEditMode
            ? "Update Profile"
            : "Add Profile"}
        </Button>
      </CardActions>
    </Card>
  );
};

export default InvestorProfileCard;
