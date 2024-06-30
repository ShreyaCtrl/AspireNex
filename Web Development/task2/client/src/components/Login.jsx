// import React, { useState, useContext } from "react";
// import {
//   Box,
//   Button,
//   Container,
//   TextField,
//   Typography,
//   Alert,
// } from "@mui/material";
// import { useNavigate, Link } from "react-router-dom";
// import { UserContext } from "../UserContext.jsx"; // Adjust the import path
// import useGetUser from "../hooks/useGetUser.js"; // Adjust the import path

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const { setUser } = useContext(UserContext);
//   const { fetchUser, isFetchingUser } = useGetUser(setUser);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null); // Reset any previous errors
//     const fetchedUser = await fetchUser(username, password);
//     if (fetchedUser) {
//       navigate("/home");
//     } else {
//       setError("Invalid username or password.");
//     }
//   };

//   return (
//     <Container maxWidth="xs">
//       <Box
//         display="flex"
//         flexDirection="column"
//         alignItems="center"
//         justifyContent="center"
//         height="100vh"
//       >
//         <Typography variant="h4" component="h1" gutterBottom>
//           Login
//         </Typography>
//         <Typography variant="body2" color="textSecondary">
//           Visiting first time? <Link to="/signup">Sign up here</Link>
//         </Typography>
//         {error && <Alert severity="error">{error}</Alert>}
//         <form onSubmit={handleSubmit}>
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             id="username"
//             label="Username"
//             name="username"
//             autoComplete="username"
//             autoFocus
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             id="password"
//             autoComplete="current-password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             disabled={isFetchingUser}
//             style={{ margin: "24px 0 16px" }}
//           >
//             {isFetchingUser ? "Logging in..." : "Login"}
//           </Button>
//         </form>
//       </Box>
//     </Container>
//   );
// };

// export default Login;

import React, { useState, useContext } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Alert,
} from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../UserContext.jsx"; // Adjust the import path
import useGetUser from "../hooks/useGetUser.js"; // Adjust the import path

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { setUser } = useContext(UserContext);
  const { fetchUser, isFetchingUser } = useGetUser(setUser);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset any previous errors
    try {
      const fetchedUser = await fetchUser(username, password);
      console.log("Fetched user: ", fetchedUser);
      if (fetchedUser) {
        setUser(fetchedUser); // Set the user context with fetched user data
        navigate("/home");
      } else {
        setError("Invalid username or password.");
      }
    } catch (err) {
      console.error("Login error: ", err);
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
          Login
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Visiting first time? <Link to="/signup">Sign up here</Link>
        </Typography>
        {error && <Alert severity="error">{error}</Alert>}
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={isFetchingUser}
            style={{ margin: "24px 0 16px" }}
          >
            {isFetchingUser ? "Logging in..." : "Login"}
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
