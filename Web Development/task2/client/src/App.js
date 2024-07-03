import React, { useContext } from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { UserContext } from "./UserContext.jsx";
import { UserProvider } from "./UserContext.jsx";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ProfilePage from "./pages/ProfilePage.jsx";
import CreatePostPage from "./pages/CreatePostPage"; // Import the CreatePostPage
import PostsPage from "./pages/PostsPage"; // Import the PostsPage
import ViewPostPage from "./pages/ViewPostPage";
import NavBar from "./components/NavBar.jsx";
import HomePage from "./pages/HomePage.jsx";

function App() {
  // const { user } = useContext(UserContext);
  console.log("use Context", useContext(UserContext));
  return (
    <UserProvider>
      <Router>
        <NavBar />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/create-post" element={<CreatePostPage />} />{" "}
          <Route path="/home" element={<HomePage />} />
          <Route path="/posts" element={<PostsPage />} /> {/* Add the route */}
          <Route path="/posts/:postId" element={<ViewPostPage />} />{" "}
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
