// import React, { useState } from "react";
// import {
//   Card,
//   CardContent,
//   Typography,
//   Button,
//   TextField,
//   List,
//   ListItem,
// } from "@mui/material";
// import { Link } from "react-router-dom";

// const ShowPost = ({ post }) => {
//   const [comment, setComment] = useState("");
//   const [comments, setComments] = useState(post.comments || []);

//   const handleCommentChange = (e) => {
//     setComment(e.target.value);
//   };

//   const handleCommentSubmit = async () => {
//     if (!comment) return;

//     // Assuming we have an API endpoint to handle comments
//     try {
//       const response = await fetch(
//         `http://localhost:5000/posts/${post._id}/comments`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//           body: JSON.stringify({ text: comment }),
//         }
//       );

//       const data = await response.json();
//       setComments([...comments, data]);
//       setComment("");
//     } catch (error) {
//       console.error("Failed to submit comment", error);
//     }
//   };

//   return (
//     <Card style={{ width: "100%", marginBottom: "10px" }}>
//       <CardContent>
//         <Typography variant="h3">{post.title}</Typography>
//         <Typography variant="body" color="textSecondary">
//           {post.content}
//         </Typography>
//         <Typography variant="body2" color="textSecondary">
//           Category: {post.category}
//         </Typography>
//         <Typography variant="body2" color="textSecondary">
//           Upvotes: {post.upvotes}
//         </Typography>
//         <Typography variant="body2" color="textSecondary">
//           Author: {post.author.name}
//         </Typography>

//         <Typography variant="h6">Comments:</Typography>
//         <List>
//           {comments.map((comment, index) => (
//             <ListItem key={index}>
//               <Typography variant="body2" color="textSecondary">
//                 {comment.text} - {comment.author.name}
//               </Typography>
//             </ListItem>
//           ))}
//         </List>

//         <TextField
//           fullWidth
//           label="Add a comment"
//           value={comment}
//           onChange={handleCommentChange}
//           variant="outlined"
//           multiline
//           rows={2}
//           style={{ marginTop: "10px" }}
//         />
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={handleCommentSubmit}
//           style={{ marginTop: "10px" }}
//         >
//           Submit Comment
//         </Button>
//       </CardContent>
//     </Card>
//   );
// };

// export default ShowPost;

// import React, { useState } from "react";
// import {
//   Card,
//   CardContent,
//   Typography,
//   Button,
//   TextField,
//   List,
//   ListItem,
//   Chip,
//   IconButton,
// } from "@mui/material";
// import ThumbUpIcon from "@mui/icons-material/ThumbUp";
// import { Link } from "react-router-dom";
// import useAddComment from "../hooks/useAddComment";

// const ShowPost = ({ post }) => {
//   const [comment, setComment] = useState("");
//   const [comments, setComments] = useState(post.comments || []);
//     const [upvotes, setUpvotes] = useState(post.upvotes || 0);
//     const { addComment, isAddingComment } = useAddComment();

//   const handleCommentChange = (e) => {
//     setComment(e.target.value);
//   };

//   const handleCommentSubmit = async () => {
//     if (!comment) return;

//     await addComment(post._id, { text: comment });
//     setComments([...comments, { text: comment, author: { name: "You" } }]);
//     setComment("");
//   };

//   const handleUpvote = async () => {
//     try {
//       const response = await fetch(
//         `http://localhost:5000/post/${post._id}/upvote`,
//         {
//           method: "POST",
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );

//       if (response.ok) {
//         setUpvotes(upvotes + 1);
//       }
//     } catch (error) {
//       console.error("Failed to upvote post", error);
//     }
//   };

//   return (
//     <Card style={{ width: "100%", marginBottom: "10px" }}>
//       <CardContent>
//         <Typography variant="h3">{post.title}</Typography>
//         <Chip label={post.category} variant="outlined" style={{ margin: "5px 0" }} />
//         <Typography variant="body1" color="textSecondary" style={{ margin: "10px 0" }}>
//           {post.content}
//         </Typography>
//         <Typography variant="body2" color="textSecondary">
//           Author: {post.author?.username || "Unknown"}
//         </Typography>
//         <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
//           <IconButton onClick={handleUpvote} color="primary">
//             <ThumbUpIcon />
//           </IconButton>
//           <Typography variant="body2" color="textSecondary">
//             {upvotes}
//           </Typography>
//         </div>

//         <Typography variant="h6" style={{ marginTop: "20px" }}>Comments:</Typography>
//         <List>
//           {comments.map((comment, index) => (
//             <ListItem key={index}>
//               <Typography variant="body2" color="textSecondary">
//                 {comment.text} - {comment.author?.username || "Anonymous"}
//               </Typography>
//             </ListItem>
//           ))}
//         </List>

//         <TextField
//           fullWidth
//           label="Add a comment"
//           value={comment}
//           onChange={handleCommentChange}
//           variant="outlined"
//           multiline
//           rows={2}
//           style={{ marginTop: "10px" }}
//         />
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={handleCommentSubmit}
//           style={{ marginTop: "10px" }}
//         >
//           Submit Comment
//         </Button>
//       </CardContent>
//     </Card>
//   );
// };

// export default ShowPost;


import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  List,
  ListItem,
  Chip,
  IconButton,
} from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import useAddComment from "../hooks/useAddComment";
import useUpvotePost from "../hooks/useUpvotePost";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import {jwtDecode} from "jwt-decode";

const ShowPost = ({ post }) => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(post.comments || []);
  const [upvotes, setUpvotes] = useState(post.upvotes || 0);
  const [hasLiked, setHasLiked] = useState(false); // State to track if the user has liked the post
  const { addComment } = useAddComment();
  const { upvotePost, isUpvotingPost } = useUpvotePost();

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  

  const getUserIdFromToken = () => {
    const token = localStorage.getItem("token");
    if (!token) return null;

    const decoded = jwtDecode(token);
    return decoded.userId; // Assuming the token contains the userId as a field
  };

  // const checkIfUserHasLiked = (likedBy) => {
  //   const userId = getUserIdFromToken();
  //   if (!userId) return;

  //   const liked = likedBy.includes(userId);
  //   setHasLiked(liked);
  // };
  const userId = getUserIdFromToken();

  const checkIfUserHasLiked = (post, userId) => {
    return post.likedBy.some((user) => user.toString() === userId);
  };

  useEffect(() => {
    // if (post) {
    //   setComments(post.comments || []);
    //   setUpvotes(post.upvotes || 0);
    //   checkIfUserHasLiked(post.likedBy);
    // }
    if (post && userId) {
      const userHasLiked = checkIfUserHasLiked(post, userId);
      setHasLiked(userHasLiked);
    }
  }, [post, userId]);

  const handleCommentSubmit = async () => {
    if (!comment) return;

    await addComment(post._id, { text: comment });
    setComments([...comments, { text: comment, author: { name: "You" } }]);
    setComment("");
  };

  // const handleUpvote = async () => {
  //   try {
  //     await upvotePost(post._id);
  //     setUpvotes(upvotes + 1);
  //   } catch (error) {
  //     console.error("Failed to upvote post", error);
  //   }
  // };
  const handleUpvote = async () => {
    try {
      const result = await upvotePost(post._id);
      setHasLiked(!hasLiked); // Toggle like state
      setUpvotes(result.upvotes); // Update upvotes from server response
    } catch (error) {
      console.error("Failed to upvote post", error);
    }
  };

  return (
    <Card style={{ width: "100%", marginBottom: "10px" }}>
      <CardContent>
        <Typography variant="h3">{post.title}</Typography>
        <Chip
          label={post.category}
          variant="outlined"
          style={{ margin: "5px 0" }}
        />
        <Typography
          variant="body1"
          color="textSecondary"
          style={{ margin: "10px 0" }}
        >
          {post.content}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Author: {post.author?.username || "Unknown"}
        </Typography>
        {/* <div
          style={{ display: "flex", alignItems: "center", marginTop: "10px" }}
        >
          <IconButton
            onClick={handleUpvote}
            color="primary"
            disabled={isUpvotingPost}
          >
            <ThumbUpIcon />
          </IconButton>
          <Typography variant="body2" color="textSecondary">
            {upvotes}
          </Typography>
        </div> */}
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "10px" }}
        >
          <IconButton
            onClick={handleUpvote}
            color="primary"
            disabled={isUpvotingPost}
          >
            {hasLiked ? <ThumbUpIcon /> : <ThumbUpOffAltIcon />}{" "}
            {/* Conditionally render filled or unfilled thumb icon */}
          </IconButton>
          <Typography variant="body2" color="textSecondary">
            {upvotes}
          </Typography>
        </div>

        <Typography variant="h6" style={{ marginTop: "20px" }}>
          Comments:
        </Typography>
        <List>
          {comments.map((comment, index) => (
            <ListItem key={index}>
              <Typography variant="body2" color="textSecondary">
                {comment.text} - {comment.author?.username || "Anonymous"}
              </Typography>
            </ListItem>
          ))}
        </List>

        <TextField
          fullWidth
          label="Add a comment"
          value={comment}
          onChange={handleCommentChange}
          variant="outlined"
          multiline
          rows={2}
          style={{ marginTop: "10px" }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleCommentSubmit}
          style={{ marginTop: "10px" }}
        >
          Submit Comment
        </Button>
      </CardContent>
    </Card>
  );
};

export default ShowPost;
