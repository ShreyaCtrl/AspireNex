import { useState, useEffect } from "react";
import { CustomErrorAlert } from "../utils/general.js";

const useGetPosts = (postId) => {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getPost = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`http://localhost:5000/post/${postId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setPost(data);
    } catch (error) {
      CustomErrorAlert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (postId) {
      getPost();
    }
  }, [postId]);

  return { post, isLoading, getPost };
};

export default useGetPosts;
