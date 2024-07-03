import express from "express";
import {
  createInvestorProfile,
  getInvestorProfile,
  updateInvestorProfile,
  getAllInvestor
} from "./investorProfile.controller.js";
import { authenticate } from "../../middleware/authenticateUser.js";

const router = express.Router();

router
  .post("/create", authenticate, createInvestorProfile)
  .get("/get", authenticate, getInvestorProfile)
  .put("/update", authenticate, updateInvestorProfile)
  .get("/", getAllInvestor);

export default router;
