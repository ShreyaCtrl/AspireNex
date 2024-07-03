import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Grid,
} from "@mui/material";
import { UserContext } from "../UserContext";
import useCreatePost from "../hooks/useCreatePost";
import "../assets/CreatePostPage.css"; // Assuming you want to use some custom styling

const CreatePostPage = () => {
  const { user } = useContext(UserContext);
  const { createPost, isCreatingPost } = useCreatePost();
  const [post, setPost] = useState({
    title: "",
    content: "",
    category: "Other",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPost({ ...post, author: user._id });
    navigate("/posts"); // Redirect to the posts page after creating a post
  };

  return (
    <div className="create-post-container">
      <Card className="create-post-card">
        <CardContent>
          <Typography variant="h5" component="div">
            Create a New Post
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Title"
                  name="title"
                  value={post.title}
                  onChange={handleChange}
                  variant="outlined"
                  required
                  className="create-post-input"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Content"
                  name="content"
                  value={post.content}
                  onChange={handleChange}
                  variant="outlined"
                  multiline
                  rows={4}
                  required
                  className="create-post-input"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Category"
                  name="category"
                  value={post.category}
                  onChange={handleChange}
                  variant="outlined"
                  select
                  SelectProps={{ native: true }}
                  className="create-post-input"
                >
                  <option value="Funding">Funding</option>
                  <option value="Mentorship">Mentorship</option>
                  <option value="Networking">Networking</option>
                  <option value="Other">Other</option>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  disabled={isCreatingPost}
                  className="create-post-button"
                >
                  {isCreatingPost ? "Creating..." : "Create Post"}
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreatePostPage;
