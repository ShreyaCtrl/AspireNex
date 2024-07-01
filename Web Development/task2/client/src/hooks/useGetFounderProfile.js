import { useState, useEffect } from "react";
import { CustomErrorAlert } from "../utils/general.js";

const useGetFounderProfile = () => {
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getFounderProfile = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:5000/founderProfile/get", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

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
    getFounderProfile();
  }, []);

  return { profile, isLoading, getFounderProfile };
};

export default useGetFounderProfile;
