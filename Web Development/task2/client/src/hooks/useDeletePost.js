import { useState } from "react";
import { CustomSuccessAlert, CustomErrorAlert } from "../utils/general.js";

const useDeletePost = () => {
  const [isLoading, setIsLoading] = useState(false);

  const deletePost = async (postId) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://innovatesphere-server.onrender.com/post/${postId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      CustomSuccessAlert("Post deleted successfully");
    } catch (error) {
      CustomErrorAlert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { deletePost, isDeletingPost: isLoading };
};

export default useDeletePost;
