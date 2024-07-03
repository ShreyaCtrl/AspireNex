import { useState } from "react";
import { CustomSuccessAlert, CustomErrorAlert } from "../utils/general.js";

const useUpdateInvestorProfile = () => {
  const [isLoading, setIsLoading] = useState(false);

  const updateInvestorProfile = async (profile) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://innovatesphere-server.onrender.com/investorProfile/update",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(profile),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      CustomSuccessAlert("Investor profile updated successfully");
    } catch (error) {
      CustomErrorAlert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { updateInvestorProfile, isUpdatingInvestorProfile: isLoading };
};

export default useUpdateInvestorProfile;