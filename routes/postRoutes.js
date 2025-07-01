const express = require('express');
const router = express.Router();
const postController = require('../controllers/postControllers.js');

router.post('/', postController.createPost);
router.get('/', postController.getAllPosts);
router.get('/:id', postController.getPostById);
router.get('/user/:userId', postController.getPostsByUser);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);

router.post('/:postId/tags', postController.addTagsToPost);
router.get('/with-tags', postController.getPostsWithTags);

module.exports = router;