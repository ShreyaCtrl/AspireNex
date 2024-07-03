import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext.jsx";
import InvestorHome  from "../components/InvestorHome.jsx";
import  FounderHome  from "../components/FounderHome.jsx";
import  GeneralPublicHome  from "../components/GeneralPublicHome.jsx";

const HomePage = () => {
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
      {user.role === "Investor" && <InvestorHome />}
      {user.role === "Founder" && <FounderHome />}
      {user.role === "General Public" && <GeneralPublicHome />}
    </>
  );
};

export default HomePage;
