import { useState } from "react";
import { CustomSuccessAlert, CustomErrorAlert } from "../utils/general.js";

const useUpdateFounderProfile = () => {
  const [isLoading, setIsLoading] = useState(false);

  const updateFounderProfile = async (profile) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://innovatesphere-server.onrender.com/founderProfile/update",
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

      CustomSuccessAlert("Founder profile updated successfully");
    } catch (error) {
      CustomErrorAlert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { updateFounderProfile, isUpdatingFounderProfile: isLoading };
};

export default useUpdateFounderProfile;
