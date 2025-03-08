const Post = require("../models/postModel.js");
const Like = require("../models/likeModel.js");

exports.likepost = async (req, res) => {
  try {
    //fetch data from req body
    const { post, user } = req.body;
    //create a like object
    const like = new Like({
      post, user
    });

    //save the new like into database
    const savedLike = await like.save(); //note- you can create using model.create(as in todo APP) or by making a new object and saving(as here) it to DB

    //find the post by id and add the new like to its likes array
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { likes: savedLike._id } },
      { new: true }
    )
    .populate("likes") //without populate only like id comes and using populate gives whole like 
    .exec();

    res.json({
      post: updatedPost,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Error while creating comment",
    });
  }
};

//for unliking the post
exports.unlikePost = async (req, res) => {
  try {
    //fetch data from req body
    const { post, like } = req.body;
    //create a comment object
    const deletedLike = await Like.findOneAndDelete({post: post, _id: like});

    //update the post collection
    const updatedPost = await  Post.findByIdAndUpdate(post, {$pull: {likes: deletedLike._id}}, {new: true});

    res.json({
      post: updatedPost,
    })


  } catch (error) {
    return res.status(500).json({
      error: "Error while creating comment",
    });
  }
};
