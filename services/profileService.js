const db = require('../models');
const Profile = db.Profile;

exports.createProfile = async (data) => {
  return await Profile.create(data);
};

exports.getProfiles = async () => {
  return await Profile.findAll();
};

exports.getProfileById = async (id) => {
  return await Profile.findByPk(id);
};

exports.getProfileByUserId = async (userId) => {
  return await Profile.findOne({ where: { userId } });
};

exports.updateProfile = async (id, data) => {
  const [updated] = await Profile.update(data, { where: { id } });
  if (updated) {
    return await Profile.findByPk(id);
  }
  return null;
};

exports.deleteProfile = async (id) => {
  return await Profile.destroy({ where: { id } });
};
