const Post = require("../model/posts");
const successHandle = require("../service/successHandle");
const errorHandle = require("../service/errorHandle");

const posts = {
  async getPosts(req, res) {
    const allPosts = await Post.find();
    successHandle(res, allPosts);
  },

  async createdPosts(req, res) {
    try {
      const { body } = req;
      const newPost = await Post.create({
        name: body.name,
        tags: body.tags,
        type: body.type,
        image: body.image,
        content: body.content,
      });
      successHandle(res, newPost);
    } catch (error) {
      errorHandle(res, error);
    }
  },

  async likedPosts(req, res) {
    const id = req.params.id;
    const post = await Post.findById(id);
    if (post !== null) {
      var likes = post.likes;
      likes++;
      const updatedLike = {
        likes: likes,
      };
      await Post.findByIdAndUpdate(id, updatedLike);
      const likedPost = await Post.findById(id);
      successHandle(res, likedPost);
    } else {
      const error = "無此ID";
      errorHandle(res, error);
    }
  },
  async updatedPosts(req, res) {
    try {
      const { body } = req;
      const id = req.params.id;
      const post = await Post.findById(id);
      if (post != null) {
        const updatedData = {
          name: body.name,
          tags: body.tags,
          type: body.type,
          image: body.image,
          content: body.content,
        };

        await Post.findByIdAndUpdate(id, updatedData, { runValidators: true });
        const updatedPost = await Post.findById(id);
        successHandle(res, updatedPost);
      } else {
        const error = "無此ID";
        errorHandle(res, error);
      }
    } catch (error) {
      errorHandle(res, error);
    }
  },
  async deletedAllPosts(req, res) {
    const posts = await Post.deleteMany({});
    successHandle(res, posts);
  },
  async deletedPost(req, res) {
    const id = req.params.id;
    const post = await Post.findById(id);
    if (post == null) {
      const error = "無此ID";
      errorHandle(res, error);
    } else {
      const posts = await Post.findByIdAndDelete(id);
      successHandle(res, posts);
    }
  },
};

module.exports = posts;
