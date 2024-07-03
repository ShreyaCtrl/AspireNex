import { useState } from "react";
import { CustomSuccessAlert, CustomErrorAlert } from "../utils/general.js";

const useAddComment = () => {
  const [isLoading, setIsLoading] = useState(false);

  const addComment = async (postId, comment) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://innovatesphere-server.onrender.com/post/${postId}/comments`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(comment),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      CustomSuccessAlert("Comment added successfully");
    } catch (error) {
      CustomErrorAlert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { addComment, isAddingComment: isLoading };
};

export default useAddComment;
