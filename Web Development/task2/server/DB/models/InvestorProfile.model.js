import mongoose from "mongoose";

const InvestorProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  investmentPreferences: {
    type: String,
    required: true,
  },
  portfolio: [
    {
      type: String,
    },
  ],
  successStories: [
    {
      type: String,
    },
  ],
});

export default mongoose.model("InvestorProfile", InvestorProfileSchema);
