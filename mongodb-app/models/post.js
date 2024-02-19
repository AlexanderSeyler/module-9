const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const postSchema = new Schema({
  Title: { type: String, trim: true, required: true },
  Information: { type: String, trim: true, required: true },
  postId: { type: String, trim: true, required: true, unique: true },
  Image: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("post", postSchema);
