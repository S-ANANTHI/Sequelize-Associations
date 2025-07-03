const { Op } = require('sequelize');

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

exports.getPostsGreaterthanId = async (id) => {
  return await Post.findAll({ where: { 
    Id: { [Op.gte]:id } } });
};

exports.getBetweenCreatedBy = async (start, end) => {
  return await Post.findAll({ where: { 
    createdAt: { [Op.between]: [start, end] } } });
};

exports.getByKeyword = async (keyword) => {
  return await Post.findAll({
    where: {
      title: { [Op.like]: `%${keyword}%` }
    }
  });
};
exports.getByUserOrTitle = async ({ userId, titleKeyword }) => {
  return await Post.findAll({
    where: {
      [Op.or]: [
        { userId: userId },
        { title: { [Op.like]: `%${titleKeyword}%` } }
      ]
    }
  });
};
exports.getByIdIn = async (ids) => {
  return await Post.findAll({
    where: {
      id: { [Op.in]: ids }
    }
  });
};