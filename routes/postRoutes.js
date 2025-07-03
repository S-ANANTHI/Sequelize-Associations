const express = require('express');
const router = express.Router();
const postController = require('../controllers/postControllers.js');

router.get('/getPostsGreaterthanId/:id', postController.getPostsGreaterthanId);
router.get('/getBetweenCreatedBy',postController.getBetweenCreatedBy);
router.get('/getByKeyword', postController.getByKeyword);
router.get('/getByUserOrTitle', postController.getByUserOrTitle);
router.get('/getByIdIn', postController.getByIdIn);

router.post('/', postController.createPost);
router.get('/', postController.getAllPosts);
router.get('/with-tags', postController.getPostsWithTags);
router.get('/:id', postController.getPostById);
router.get('/user/:userId', postController.getPostsByUser);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);

router.post('/:postId/tags', postController.addTagsToPost);

module.exports = router;