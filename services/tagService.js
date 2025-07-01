const db = require('../models');
const Tag = db.Tag;

exports.createTag = async (data) => {
  return await Tag.create(data);
};
