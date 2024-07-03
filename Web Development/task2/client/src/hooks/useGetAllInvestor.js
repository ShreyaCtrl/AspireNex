import { useState, useEffect } from "react";
import { CustomErrorAlert } from "../utils/general.js";

const useGetInvestorProfiles = () => {
  const [investorProfiles, setInvestorProfiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getInvestorProfiles = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "http://localhost:5000/investorProfile/",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setInvestorProfiles(data);
    } catch (error) {
      setError(error.message);
      CustomErrorAlert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getInvestorProfiles();
  }, []);

  return { investorProfiles, isLoading, error };
};

export default useGetInvestorProfiles;