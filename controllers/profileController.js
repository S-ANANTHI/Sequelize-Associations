const profileService = require('../services/profileService');

exports.createProfile = async (req, res) => {
  try {
    const profile = await profileService.createProfile(req.body);
    if (profile){
        res.status(201).json(profile);
    } else {
        res.status(404).json({ error: 'profile not found' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getProfiles = async (req, res) => {
  try {
    const profiles = await profileService.getProfiles();
    if (profiles){
        res.json(profiles);
    } else {
        res.status(404).json({ error: 'profiles not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getProfileById = async (req, res) => {
  try {
    const profile = await profileService.getProfileById(req.params.id);
    if (profile) {
        res.json(profile);
    } else {
        res.status(404).json({ error: 'Profile not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const updatedProfile = await profileService.updateProfile(req.params.id, req.body);
    if (updatedProfile) {
        res.json(updatedProfile);
    } else {
        res.status(404).json({ error: 'Profile not found' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteProfile = async (req, res) => {
  try {
    const deleted = await profileService.deleteProfile(req.params.id);
    if (deleted) {
        res.status(204).send();
    } else {
        res.status(404).json({ error: 'Profile not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getProfileByUserId = async (req, res) => {
  try {
    const profile = await profileService.getProfileByUserId(req.params.userId);
    if (profile) {
        res.json(profile);
    }else {
        res.status(404).json({ error: 'Profile not found for this user' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
