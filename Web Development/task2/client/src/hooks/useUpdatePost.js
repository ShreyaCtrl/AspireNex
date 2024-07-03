import { useState } from "react";
import { CustomSuccessAlert, CustomErrorAlert } from "../utils/general.js";

const useUpdatePost = () => {
  const [isLoading, setIsLoading] = useState(false);

  const updatePost = async (postId, post) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://innovatesphere-server.onrender.com/posts/${postId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(post),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      CustomSuccessAlert("Post updated successfully");
    } catch (error) {
      CustomErrorAlert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { updatePost, isUpdatingPost: isLoading };
};

export default useUpdatePost;
