// import { useState } from "react";
// import { CustomSuccessAlert, CustomErrorAlert } from "../utils/general.js";

// const useUpvotePost = () => {
//   const [isLoading, setIsLoading] = useState(false);

//   const upvotePost = async (postId) => {
//     try {
//       setIsLoading(true);
//       const response = await fetch(
//         `http://localhost:5000/post/${postId}/upvote`,
//         {
//           method: "POST",
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       CustomSuccessAlert("Post upvoted successfully");
//     } catch (error) {
//       CustomErrorAlert(error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return { upvotePost, isUpvotingPost: isLoading };
// };

// export default useUpvotePost;


import { useState } from "react";
import { CustomSuccessAlert, CustomErrorAlert } from "../utils/general.js";

const useUpvotePost = () => {
  const [isLoading, setIsLoading] = useState(false);

  const upvotePost = async (postId) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://innovatesphere-server.onrender.com/post/${postId}/upvote`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || `HTTP error! status: ${response.status}`
        );
      }

      const data = await response.json();
      CustomSuccessAlert("Post upvoted successfully");
      return data;
    } catch (error) {
      CustomErrorAlert(error.message);
      throw error; // Re-throw the error if you need to handle it elsewhere
    } finally {
      setIsLoading(false);
    }
  };

  return { upvotePost, isUpvotingPost: isLoading };
};

export default useUpvotePost;
