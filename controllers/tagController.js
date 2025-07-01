const db = require('../models');

exports.createTag = async (req, res) => {
  try {
    const tag = await db.Tag.create({ name: req.body.name });
    res.status(201).json(tag);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
