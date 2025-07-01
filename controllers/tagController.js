const tagService = require('../services/tagService');

exports.createTag = async (req, res) => {
  try {
    const tag = await tagService.createTag({ name: req.body.name });
    if (tag){
        res.status(201).json(tag);
    } else {
        res.status(404).json({ error: 'tag not found' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
