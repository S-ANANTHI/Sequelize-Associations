const db = require('../models');
const User = db.User;

exports.createUser = (data) => User.create(data);
exports.getUsers = () => User.findAll();
exports.getUserById = (id) => User.findByPk(id);

exports.updateUser = async (id, data) => {
  const [updated] = await User.update(data, { where: { id } });
  if (updated) return User.findByPk(id);
  return null;
};

exports.deleteUser = (id) => User.destroy({ where: { id } });
