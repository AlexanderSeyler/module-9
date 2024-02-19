"use strict";
const User = require("./user"); //require the model
const Post = require("./post");
// const Like = require("./like");

async function init() {
  await User.sync(); // sync the model
  // also sync any extra models here
  await Post.sync();
//   await Like.sync();
}

init();

module.exports = {
  User,
  Post,
//   Like,
};
