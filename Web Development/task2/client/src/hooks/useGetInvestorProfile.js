import { useState, useEffect } from "react";
import { CustomErrorAlert } from "../utils/general.js";

const useGetInvestorProfile = () => {
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getInvestorProfile = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://innovatesphere-server.onrender.com/investorProfile/get",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setProfile(data);
    } catch (error) {
      CustomErrorAlert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getInvestorProfile();
  }, []);

  return { profile, isLoading, getInvestorProfile };
};

export default useGetInvestorProfile;
