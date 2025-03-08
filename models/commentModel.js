const mongoose = require("mongoose");
const { Schema } = mongoose;

const comment = new Schema(
    {
        post: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",  //reference to the post model
        },
        user: {
            type: String,
            required: true,
        }, 
        body: {
            type: String,
            required: true,
        },
    },
    {timestamps: true},
)

module.exports = mongoose.model("Comment", comment)
 