import React, { useState, useEffect, useContext } from "react";
import {
  Card,
  CardContent,
  CardActions,
  TextField,
  Button,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  IconButton,
  CircularProgress
} from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { UserContext } from "../UserContext";
import useCreatePost from "../hooks/useCreatePost";
import useUpdatePost from "../hooks/useUpdatePost";
import useDeletePost from "../hooks/useDeletePost";
import useGetPost from "../hooks/useGetPosts";
import useAddComment from "../hooks/useAddComment";
import useUpvotePost from "../hooks/useUpvotePost";
import "../assets/Post.css"; // Import the CSS file

const Post = ({ postId }) => {
  const { user } = useContext(UserContext);
  const { post, isLoading, getPost } = useGetPost(postId);
  const { createPost, isCreatingPost } = useCreatePost();
  const { updatePost, isUpdatingPost } = useUpdatePost();
  const { deletePost, isDeletingPost } = useDeletePost();
  const { addComment, isAddingComment } = useAddComment();
  const { upvotePost, isUpvotingPost } = useUpvotePost();
  const [editablePost, setEditablePost] = useState({
    title: "",
    content: "",
    category: "Other",
    upvotes: 0,
  });
  const [comment, setComment] = useState("");

  useEffect(() => {
    if (post) {
      setEditablePost(post);
    }
  }, [post]);

  const handleChange = (e) => {
    setEditablePost({
      ...editablePost,
      [e.target.name]: e.target.value,
    });
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (postId) {
      await updatePost(postId, editablePost);
    } else {
      await createPost({ ...editablePost, author: user._id });
    }
    getPost();
  };

  const handleDelete = async () => {
    await deletePost(postId);
    // Redirect or update the UI after deletion
  };

  const handleAddComment = async (e) => {
    e.preventDefault();
    await addComment(postId, { text: comment, author: user._id });
    setComment("");
    getPost();
  };

  const handleUpvote = async () => {
    await upvotePost(postId);
    getPost();
  };

  if (isLoading) return (
    <React.Fragment>
      <svg width={0} height={0}>
        <defs>
          <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e01cd5" />
            <stop offset="100%" stopColor="#1CB5E0" />
          </linearGradient>
        </defs>
      </svg>
      <CircularProgress
        sx={{ "svg circle": { stroke: "url(#my_gradient)" } }}
      />
    </React.Fragment>
  );

  return (
    <Card className="post-card">
      <CardContent>
        <Typography variant="h5" component="div" className="post-title">
          {postId ? "Edit Post" : "Create Post"}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={editablePost.title || ""}
              onChange={handleChange}
              variant="outlined"
              className="post-input"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Content"
              name="content"
              value={editablePost.content || ""}
              onChange={handleChange}
              variant="outlined"
              multiline
              rows={4}
              className="post-input"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Category"
              name="category"
              value={editablePost.category || "Other"}
              onChange={handleChange}
              variant="outlined"
              className="post-input"
            />
          </Grid>
        </Grid>
        {postId && (
          <div>
            <Typography variant="h6" component="div" className="post-title">
              Comments
            </Typography>
            <List>
              {post.comments.map((comment, index) => (
                <ListItem key={index}>
                  <ListItemText
                    primary={comment.text}
                    secondary={`By: ${comment.author}`}
                  />
                </ListItem>
              ))}
            </List>
            <TextField
              fullWidth
              label="Add Comment"
              name="comment"
              value={comment}
              onChange={handleCommentChange}
              variant="outlined"
              className="post-input"
            />
            <Button
              size="large"
              color="primary"
              onClick={handleAddComment}
              disabled={isAddingComment}
              className="post-button"
            >
              {isAddingComment ? "Adding..." : "Add Comment"}
            </Button>
          </div>
        )}
        <div className="post-meta">
          <Typography variant="body2" color="textSecondary">
            {`Created at: ${new Date(editablePost.createdAt).toLocaleString()}`}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {`Upvotes: ${editablePost.upvotes}`}
          </Typography>
          <IconButton onClick={handleUpvote} disabled={isUpvotingPost}>
            <ThumbUpIcon color={isUpvotingPost ? "disabled" : "primary"} />
          </IconButton>
        </div>
      </CardContent>
      <CardActions className="post-actions">
        <Button
          size="large"
          color="primary"
          onClick={handleSubmit}
          disabled={isCreatingPost || isUpdatingPost}
          className="post-button"
        >
          {isCreatingPost || isUpdatingPost
            ? "Saving..."
            : postId
            ? "Update Post"
            : "Create Post"}
        </Button>
        {postId && (
          <Button
            size="large"
            color="secondary"
            onClick={handleDelete}
            disabled={isDeletingPost}
            className="post-button"
          >
            {isDeletingPost ? "Deleting..." : "Delete Post"}
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Post;
