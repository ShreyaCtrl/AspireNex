import { useState } from "react";
import { CustomSuccessAlert, CustomErrorAlert } from "../utils/general.js";

const useAddInvestorProfile = () => {
  const [isLoading, setIsLoading] = useState(false);

  const addInvestorProfile = async (profile) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "http://localhost:5000/investorProfile/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`, // assuming token is stored in localStorage
          },
          body: JSON.stringify(profile),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      CustomSuccessAlert("Investor profile added successfully");
    } catch (error) {
      CustomErrorAlert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { addInvestorProfile, isAddingInvestorProfile: isLoading };
};

export default useAddInvestorProfile;
