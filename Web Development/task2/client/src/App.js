import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import HomePage from "./pages/HomePage";
import { UserProvider } from "./UserContext.jsx";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <UserProvider>
      <Router>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
