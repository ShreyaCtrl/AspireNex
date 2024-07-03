import express from "express";
import {
  createFounderProfile,
  getFounderProfile,
  updateFounderProfile,
  getAllFounder
} from "./founderProfile.controller.js";
import { authenticate } from "../../middleware/authenticateUser.js";

const router = express.Router();

router
  .post("/create", authenticate, createFounderProfile)
  .get("/get", authenticate, getFounderProfile)
  .put("/update", authenticate, updateFounderProfile)
  .get("/", getAllFounder);

export default router;
