// // NavBar.jsx
// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   IconButton,
//   Menu,
//   MenuItem,
//   useMediaQuery,
//   useTheme,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import { UserContext } from "../UserContext";

// const NavBar = () => {
//   const { user } = useContext(UserContext);
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));

//   const handleMenu = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <Typography variant="h6" sx={{ flexGrow: 1 }}>
//           StartUp Board
//         </Typography>
//         {isMobile ? (
//           <>
//             <IconButton
//               edge="start"
//               color="inherit"
//               aria-label="menu"
//               onClick={handleMenu}
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               anchorEl={anchorEl}
//               keepMounted
//               open={Boolean(anchorEl)}
//               onClose={handleClose}
//             >
//               <MenuItem onClick={handleClose} component={Link} to="/">
//                 Login
//               </MenuItem>
//               <MenuItem onClick={handleClose} component={Link} to="/signup">
//                 Signup
//               </MenuItem>
//               <MenuItem onClick={handleClose} component={Link} to="/profile">
//                 Profile
//               </MenuItem>
//               <MenuItem
//                 onClick={handleClose}
//                 component={Link}
//                 to="/create-post"
//               >
//                 Create Post
//               </MenuItem>
//               <MenuItem onClick={handleClose} component={Link} to="/posts">
//                 Posts
//               </MenuItem>
//             </Menu>
//           </>
//         ) : (
//           <>
//             <Button color="inherit" component={Link} to="/">
//               Login
//             </Button>
//             <Button color="inherit" component={Link} to="/signup">
//               Signup
//             </Button>
//             <Button color="inherit" component={Link} to="/profile">
//               Profile
//             </Button>
//             <Button color="inherit" component={Link} to="/create-post">
//               Create Post
//             </Button>
//             <Button color="inherit" component={Link} to="/posts">
//               Posts
//             </Button>
//             <Button color="inherit" component={Link} to="/home">
//               Home
//             </Button>
//           </>
//         )}
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default NavBar;


// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   IconButton,
//   Menu,
//   MenuItem,
//   useMediaQuery,
//   useTheme,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import { UserContext } from "../UserContext";

// const NavBar = () => {
//   const { user } = useContext(UserContext);
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));

//   const handleMenu = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <Typography variant="h6" sx={{ flexGrow: 1 }}>
//           StartUp Board
//         </Typography>
//         {isMobile ? (
//           <>
//             <IconButton
//               edge="start"
//               color="inherit"
//               aria-label="menu"
//               onClick={handleMenu}
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               anchorEl={anchorEl}
//               keepMounted
//               open={Boolean(anchorEl)}
//               onClose={handleClose}
//             >
//               {user ? (
//                 <>
//                   <MenuItem
//                     onClick={handleClose}
//                     component={Link}
//                     to="/profile"
//                   >
//                     Profile
//                   </MenuItem>
//                   <MenuItem
//                     onClick={handleClose}
//                     component={Link}
//                     to="/create-post"
//                   >
//                     Create Post
//                   </MenuItem>
//                   <MenuItem onClick={handleClose} component={Link} to="/posts">
//                     Posts
//                   </MenuItem>
//                   <MenuItem onClick={handleClose} component={Link} to="/home">
//                     Home
//                   </MenuItem>
//                 </>
//               ) : (
//                 <>
//                   <MenuItem onClick={handleClose} component={Link} to="/">
//                     Login
//                   </MenuItem>
//                   <MenuItem onClick={handleClose} component={Link} to="/signup">
//                     Signup
//                   </MenuItem>
//                 </>
//               )}
//             </Menu>
//           </>
//         ) : (
//           <>
//             {user ? (
//               <>
//                 <Button color="inherit" component={Link} to="/profile">
//                   Profile
//                 </Button>
//                 <Button color="inherit" component={Link} to="/create-post">
//                   Create Post
//                 </Button>
//                 <Button color="inherit" component={Link} to="/posts">
//                   Posts
//                 </Button>
//                 <Button color="inherit" component={Link} to="/home">
//                   Home
//                 </Button>
//               </>
//             ) : (
//               <>
//                 <Button color="inherit" component={Link} to="/">
//                   Login
//                 </Button>
//                 <Button color="inherit" component={Link} to="/signup">
//                   Signup
//                 </Button>
//               </>
//             )}
//           </>
//         )}
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default NavBar;

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { UserContext } from "../UserContext";

const NavBar = () => {
  const { user } = useContext(UserContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          InnovateSphere
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {user ? (
                <>
                  {user.role === "investor" || user.role === "founder" ? (
                    <>
                      <MenuItem
                        onClick={handleClose}
                        component={Link}
                        to="/profile"
                      >
                        Profile
                      </MenuItem>
                      <MenuItem
                        onClick={handleClose}
                        component={Link}
                        to="/create-post"
                      >
                        Create Post
                      </MenuItem>
                      <MenuItem
                        onClick={handleClose}
                        component={Link}
                        to="/posts"
                      >
                        Posts
                      </MenuItem>
                      <MenuItem
                        onClick={handleClose}
                        component={Link}
                        to="/home"
                      >
                        Home
                      </MenuItem>
                    </>
                  ) : (
                    <>
                      <MenuItem
                        onClick={handleClose}
                        component={Link}
                        to="/posts"
                      >
                        Posts
                      </MenuItem>
                      <MenuItem
                        onClick={handleClose}
                        component={Link}
                        to="/home"
                      >
                        Home
                      </MenuItem>
                    </>
                  )}
                </>
              ) : (
                <>
                  <MenuItem onClick={handleClose} component={Link} to="/">
                    Login
                  </MenuItem>
                  <MenuItem onClick={handleClose} component={Link} to="/signup">
                    Signup
                  </MenuItem>
                </>
              )}
            </Menu>
          </>
        ) : (
          <>
            {user ? (
              <>
                {user.role === "investor" || user.role === "founder" ? (
                  <>
                    <Button color="inherit" component={Link} to="/profile">
                      Profile
                    </Button>
                    <Button color="inherit" component={Link} to="/create-post">
                      Create Post
                    </Button>
                    <Button color="inherit" component={Link} to="/posts">
                      Posts
                    </Button>
                    <Button color="inherit" component={Link} to="/home">
                      Home
                    </Button>
                  </>
                ) : (
                  <>
                    <Button color="inherit" component={Link} to="/posts">
                      Posts
                    </Button>
                    <Button color="inherit" component={Link} to="/home">
                      Home
                    </Button>
                  </>
                )}
              </>
            ) : (
              <>
                <Button color="inherit" component={Link} to="/">
                  Login
                </Button>
                <Button color="inherit" component={Link} to="/signup">
                  Signup
                </Button>
              </>
            )}
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
