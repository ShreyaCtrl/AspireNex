import { useState, useEffect } from "react";
import { CustomErrorAlert } from "../utils/general.js"; // Adjust the import path as necessary

const useGetAllFounders = () => {
  const [founderProfiles, setFounderProfiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getFounderProfiles = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:5000/founderProfile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setFounderProfiles(data);
    } catch (error) {
      setError(error.message);
      CustomErrorAlert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getFounderProfiles();
  }, []);

  return { founderProfiles, isLoading, error };
};

export default useGetAllFounders;
