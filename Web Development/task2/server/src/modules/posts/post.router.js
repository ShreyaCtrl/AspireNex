import express from "express";
import Post from "../../../DB/models/Post.model.js";
// const Post = require("../models/Post");
import { addComment, createPost, deletePost, getAllPost, getOnePost, updatePost } from "./post.controller.js";
import { authenticate } from "../../middleware/authenticateUser.js"; // middleware for authentication

const router = express.Router();

// GET all posts
router.get("/", getAllPost);

// GET a single post by ID
router.get("/:postId", getOnePost);

// POST create a new post
router.post("/create", authenticate, createPost);

// POST add a comment to a post
router.post("/:postId/comments", authenticate, addComment);

// PUT update a post by ID
router.put("/:postId", authenticate, updatePost);

// DELETE a post by ID
router.delete("/:postId", authenticate, deletePost);

export default router;
