import FounderProfile from "../../../DB/models/founderProfile.model.js";

export const createFounderProfile = async (req, res) => {
  const {
    companyInfo,
    pitchDeck,
    fundingRequirements,
    achievements,
    milestones,
    updates,
  } = req.body;

  try {
    const profile = new FounderProfile({
      user: req.user._id,
      companyInfo,
      pitchDeck,
      fundingRequirements,
      achievements,
      milestones,
      updates,
    });
    const createdProfile = await profile.save();
    res.status(201).json(createdProfile);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

export const getFounderProfile = async (req, res) => {
  try {
    const profile = await FounderProfile.findOne({
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

export const updateFounderProfile = async (req, res) => {
  const {
    companyInfo,
    pitchDeck,
    fundingRequirements,
    achievements,
    milestones,
    updates,
  } = req.body;

  try {
    const profile = await FounderProfile.findOne({ user: req.user._id });
    if (profile) {
      profile.companyInfo = companyInfo || profile.companyInfo;
      profile.pitchDeck = pitchDeck || profile.pitchDeck;
      profile.fundingRequirements =
        fundingRequirements || profile.fundingRequirements;
      profile.achievements = achievements || profile.achievements;
      profile.milestones = milestones || profile.milestones;
      profile.updates = updates || profile.updates;

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


export const getAllFounder = async (req, res) => {
  try {
    const founderProfiles = await FounderProfile.find()
      .populate(
      "user",
      "username email"
      );
    res.status(200).json(founderProfiles);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
}; 