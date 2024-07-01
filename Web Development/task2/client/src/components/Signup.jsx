import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Alert,
  MenuItem,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import useAddUser from "../hooks/useAddUser"; // Adjust the import path

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState(null);
  const { addUser, isAddingUser } = useAddUser();
  const navigate = useNavigate();

  const roles = ["Investor", "Founder", "General Public"];

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null); // Reset any previous errors
    try {
      addUser({ username, password, role });
      navigate("/");

    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <Container maxWidth="xs">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Sign Up
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          Already have an account? <Link to="/">Login here</Link>
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            select
            label="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            {roles.map((role) => (
              <MenuItem key={role} value={role}>
                {role}
              </MenuItem>
            ))}
          </TextField>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={isAddingUser}
            style={{ margin: "24px 0 16px" }}
          >
            {isAddingUser ? "Signing Up..." : "Sign Up"}
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Signup;