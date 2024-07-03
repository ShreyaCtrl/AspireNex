// import React, { useEffect, useState } from "react";
// import {
//   List,
//   ListItem,
//   ListItemText,
//   Card,
//   CardContent,
//   Typography,
// } from "@mui/material";
// import { Link } from "react-router-dom";

// const PostsPage = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/posts", {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         });
//         const data = await response.json();
//         setPosts(data);
//       } catch (error) {
//         console.error("Failed to fetch posts", error);
//       }
//     };

//     fetchPosts();
//   }, []);

//   return (
//     <div>
//       <h1>All Posts</h1>
//       <List>
//         {posts.map((post) => (
//           <ListItem key={post._id} component={Link} to={`/posts/${post._id}`}>
//             <Card style={{ width: "100%", marginBottom: "10px" }}>
//               <CardContent>
//                 <Typography variant="h5">{post.title}</Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   {post.content.substring(0, 100)}...
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   Category: {post.category}
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   Upvotes: {post.upvotes}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );
// };

// export default PostsPage;

// import React, { useEffect, useState } from "react";
// import {
//   List,
//   ListItem,
//   ListItemText,
//   Card,
//   CardContent,
//   Typography,
// } from "@mui/material";
// import { Link } from "react-router-dom";

// const PostsPage = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/post", {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         });
//         const data = await response.json();
//         setPosts(data);
//       } catch (error) {
//         console.error("Failed to fetch posts", error);
//       }
//     };

//     fetchPosts();
//   }, []);

//   return (
//     <div>
//       <h1>All Posts</h1>
//       <List>
//         {posts.map((post) => (
//           <ListItem key={post._id} component={Link} to={`/posts/${post._id}`}>
//             <Card style={{ width: "100%", marginBottom: "10px" }}>
//               <CardContent>
//                 <Typography variant="h5">{post.title}</Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   {post.content.substring(0, 100)}...
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   Category: {post.category}
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   Upvotes: {post.upvotes}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );
// };

// export default PostsPage;

import React, { useEffect, useState } from "react";
import { List, ListItem } from "@mui/material";
import ShowPost from "../components/ShowPost";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:5000/post", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Failed to fetch posts", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>All Posts</h1>
      <List justifyContent="center">
        {posts.map((post) => (
          <ListItem key={post._id}>
            <ShowPost post={post} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default PostsPage;
