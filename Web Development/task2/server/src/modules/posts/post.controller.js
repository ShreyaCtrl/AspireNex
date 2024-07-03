import Post from "../../../DB/models/Post.model.js";
import { authenticate } from "../../middleware/authenticateUser.js";

export const getAllPost = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 }).populate("author");
    if (posts) {
      res.json(posts);
    } else {
      res.json({ message: "No posts available !!" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

export const getOnePost = async (req, res) => {
  const { postId } = req.params;
  try {
    const post = await Post.findById(postId)
      .populate("author")
      .populate("comments.author");
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

export const createPost = async (req, res) => {
  const { title, content, category } = req.body;
  const userId = req.user._id; // Assuming userId is extracted from JWT token

  try {
    const newPost = new Post({
      title,
      content,
      category,
      author: userId,
    });

    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error", ...err });
  }
};

export const addComment = async (req, res) => {
  const { postId } = req.params;
  const { text } = req.body;
  const userId = req.user._id; // Assuming userId is extracted from JWT token

  try {
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    const newComment = {
      text,
      author: userId,
    };

    post.comments.push(newComment);
    await post.save();

    res.status(201).json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error", err });
  }
};

export const updatePost = async (req, res) => {
  const { postId } = req.params;
  const { title, content, category } = req.body;
  const userId = req.user._id; // Assuming userId is extracted from JWT token

  try {
    let post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    console.log(post.author, userId);
    // Ensure only the author can update their own post
    // Converting to string is essential as equating object id doesnt seem toserver/src/modules/posts/post.router.js
    if (post.author.toString() !== userId.toString()) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    post.title = title || post.title;
    post.content = content || post.content;
    post.category = category || post.category;

    const updatedPost = await post.save();
    res.json(updatedPost);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

export const deletePost = async (req, res) => {
  const { postId } = req.params;
  const userId = req.user._id; // Assuming userId is extracted from JWT token

  try {
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Ensure only the author can delete their own post
    console.log(post.author.toString(), userId);
    if (post.author.toString() !== userId.toString()) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    await post.deleteOne();
    res.json({ message: "Post deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

export const upvotePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    const userId = req.user.id;
    console.log("user id for upvoting : ", userId);

    if (post.likedBy.includes(userId)) {
      post.likedBy.pull(userId);
      post.upvotes -= 1;
    } else {
      post.likedBy.push(userId);
      post.upvotes += 1;
    }

    const updatedPost = await post.save();
    res.json(updatedPost);

    // res.json({ upvotes: post.upvotes, likedBy: post.likedBy });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};