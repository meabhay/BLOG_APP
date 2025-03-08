const mongoose = require("mongoose");
const {Schema} = mongoose;

const post = new Schema  (
    {
        title: {
            type: String,
            required: true,
        },
        body: {
            type: String,
            required: true,
        },
        likes: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Like",
        },
        comments: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment",
        },
    },
    { timestamps: true },
)

module.exports = mongoose.model("Post", post);