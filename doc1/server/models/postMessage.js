import mongoose from "mongoose";

// buat schema
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  author: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

// buat model
const PostMessage = mongoose.model("PostMessaga", postSchema);

export default PostMessage;
