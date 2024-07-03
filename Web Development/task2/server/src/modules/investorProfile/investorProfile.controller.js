import InvestorProfile from "../../../DB/models/investorProfile.model.js";

export const createInvestorProfile = async (req, res) => {
  const { investmentPreferences, portfolio, successStories } = req.body;

  try {
    const profile = new InvestorProfile({
      user: req.user._id,
      investmentPreferences,
      portfolio,
      successStories,
    });
    const createdProfile = await profile.save();
    res.status(201).json(createdProfile);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

export const getInvestorProfile = async (req, res) => {
  try {
    const profile = await InvestorProfile.findOne({
      user: req.user._id,
    }).populate("user", "username");
    if (profile) {
      res.json(profile);
    } else {
      res.status(404).json({ message: "Profile not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

export const updateInvestorProfile = async (req, res) => {
  const { investmentPreferences, portfolio, successStories } = req.body;

  try {
    const profile = await InvestorProfile.findOne({ user: req.user._id });
    if (profile) {
      profile.investmentPreferences =
        investmentPreferences || profile.investmentPreferences;
      profile.portfolio = portfolio || profile.portfolio;
      profile.successStories = successStories || profile.successStories;

      const updatedProfile = await profile.save();
      res.json(updatedProfile);
    } else {
      res.status(404).json({ message: "Profile not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};


export const getAllInvestor = async (req, res) => {
  try {
    const investorProfiles = await InvestorProfile.find().populate("user");
    res.json(investorProfiles);
  } catch (error) {
    console.error("Error fetching investor profiles:", error);
    res.status(500).send("Server error");
  }
};