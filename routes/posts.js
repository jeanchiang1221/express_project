var express = require("express");
var router = express.Router();
const postsController = require("../controller/posts");

router.get("/", postsController.getPosts);
router.post("/", postsController.createdPosts);
router.patch("/likes/:id", postsController.likedPosts);
router.patch("/:id", postsController.updatedPosts);
router.delete("/", postsController.deletedAllPosts);
router.delete("/:id", postsController.deletedPost);

module.exports = router;
