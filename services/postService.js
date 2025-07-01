const db = require('../models');
const Post = db.Post;

exports.createPost = async (data) => {
  return await Post.create(data);
};

exports.getAllPosts = async () => {
  return await Post.findAll();
};

exports.getPostById = async (id) => {
  return await Post.findByPk(id);
};

exports.getPostsByUser = async (userId) => {
  return await Post.findAll({ where: { userId } });
};
 
exports.updatePost = async (id, data) => {
  const [updated] = await Post.update(data, { where: { id } });
  if (updated) {
    return await Post.findByPk(id);
  }
  return null;
};

exports.deletePost = async (id) => {
  return await Post.destroy({ where: { id } });
};

exports.getPostsWithTags = () => {
  return Post.findAll({
    include: [{model: db.Tag, as: 'tags'}]
  });
};

exports.linkTagsToPost = async (postId, tagIds) => {
  const post = await Post.findByPk(postId);
  if (!post) throw new Error('Post not found');
  await post.setTags(tagIds);  
  return post;
};
