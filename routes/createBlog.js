const express = require("express");
const router = express.Router();

const {createComment} = require("../controllers/comment.js");
const {createPost, getAllPosts} = require("../controllers/createPost.js");
const { likepost, unlikePost } = require("../controllers/like.js");


router.post("/comments/create",createComment);
router.post("/posts/create",createPost);
router.get("/posts",getAllPosts);
router.post("/likes/like",likepost);
router.post("/likes/unlike",unlikePost);
 
module.exports = router;