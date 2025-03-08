const Post = require("../models/postModel.js");
const Comment = require("../models/commentModel.js");

exports.createComment = async (req, res) => {
    try {
        //fetch data from req body
        const {post, user, body} = req.body;
        //create a comment object
        const comment = new Comment({
            post, user, body
        });

        //save the new comment into database
        const savedComment = await comment.save();        //note- you can create using model.create(as in todo APP) or by making a new object and saving(as here) it to DB 

        //find the post by id and add the new comment to its comments array
        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {comments: savedComment._id}}, {new: true}).populate("comments")     //without populate only id comes and using populate gives whole comment
              .exec();

        res.json({
            post: updatedPost,
        });
    } catch (error) {
        return res.status(500).json({
            error: "Error while creating comment",
        })
    }
}