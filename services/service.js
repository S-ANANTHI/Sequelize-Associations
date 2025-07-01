const db = require('../models');
const User = db.User;

exports.createUser = async (data) => {
  return await User.create(data);
};

exports.getUsers = async () => {
  return await User.findAll();
};

exports.getUserById = async (id) => {
  return await User.findByPk(id);
};

exports.updateUser = async (id, data) => {
  const [updated] = await User.update(data, { where: { id } });
  if (updated) {
    return await User.findByPk(id);
  }
  return null;
};

exports.deleteUser = async (id) => {
  return await User.destroy({ where: { id } });
};
