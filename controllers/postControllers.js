const postService = require('../services/postService.js');

exports.createPost = async(req, res) =>{
    try{
        const post = await postService.createPost(req.body);
        if (post){
        res.status(201).json(post);
        } else {
            res.status(404).json({ error: 'Post not found' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await postService.getAllPosts();
    if (posts){
        res.json(posts);
    } else {
        res.status(404).json({ error: 'posts not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getPostById = async (req, res) => {
  try {
    const post = await postService.getPostById(req.params.id);
    if (post) {
        res.json(post);
    } else {
        res.status(404).json({ error: 'Post not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getPostsByUser = async (req, res) => {
  try {
    const posts = await postService.getPostsByUser(req.params.userId);
    if (posts){
        res.json(posts);
    } else {
        res.status(404).json({ error: 'not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.updatePost = async (req, res) => {
  try {
    const updatedPost = await postService.updatePost(req.params.id, req.body);
    if (updatedPost) {
      res.json(updatedPost);
    } else {
      res.status(404).json({ error: 'Post not found' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const deleted = await postService.deletePost(req.params.id);
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Post not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getPostsWithTags = async (req, res) => {
  try {
    const posts = await postService.getPostsWithTags();
    if (posts) {
      res.json(posts);
    } else {
      res.status(404).json({ error: 'No posts found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addTagsToPost = async (req, res) => {
  try {
    const { postId } = req.params;
    const { tagIds } = req.body;
    const post = await postService.linkTagsToPost(postId, tagIds);   
    if (post) {
      res.json({ message: 'Tags linked successfully', post });
    } else {
      res.status(404).json({ error: 'Post not found' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};