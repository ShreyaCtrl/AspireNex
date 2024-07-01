import mongoose from "mongoose";

const FounderProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  companyInfo: {
    type: String,
    required: true,
  },
  pitchDeck: {
    type: String,
  },
  fundingRequirements: {
    type: String,
  },
  achievements: [
    {
      type: String,
    },
  ],
  milestones: [
    {
      type: String,
    },
  ],
  updates: [
    {
      type: String,
    },
  ],
});

export default mongoose.model("FounderProfile", FounderProfileSchema);
