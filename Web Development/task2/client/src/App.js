import React, { useContext } from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import HomePage from "./pages/HomePage";
import { UserContext } from "./UserContext.jsx";
import { UserProvider } from "./UserContext.jsx";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ProfilePage from "./pages/ProfilePage.jsx";

function App() {
  // const { user } = useContext(UserContext);
  console.log("use Context", useContext(UserContext));
  return (
    <UserProvider>
      <Router>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          {/* <Route path="/home" element={<HomePage />} /> */}
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
