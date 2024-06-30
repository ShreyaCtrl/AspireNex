import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext.jsx";
import CustomerHome from "../components/CustomerHome.jsx";
import EmployeeHome from "../components/EmployeeHome.jsx";

const Home = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/"); // Redirect to login if user is not logged in
    }
  }, [user, navigate]);

  if (!user) return null; // Show nothing if user is not set

  return (
    <>
      {user.role === "customer" && <CustomerHome />}
      {user.role === "employee" && <EmployeeHome />}
    </>
  );
};

export default Home;
