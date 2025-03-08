const mongoose = require("mongoose");
const { Schema } = mongoose;

const like = new Schema(
  {
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post", //reference to the post model
    },
    user: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Like", like);
  