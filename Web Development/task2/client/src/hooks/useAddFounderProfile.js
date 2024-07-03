import { useState } from "react";
import { CustomSuccessAlert, CustomErrorAlert } from "../utils/general.js";

const useAddFounderProfile = () => {
  const [isLoading, setIsLoading] = useState(false);

  const addFounderProfile = async (profile) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://innovatesphere-server.onrender.com/founderProfile/create",
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

      CustomSuccessAlert("Founder profile added successfully");
    } catch (error) {
      CustomErrorAlert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { addFounderProfile, isAddingFounderProfile: isLoading };
};

export default useAddFounderProfile;
