"use strict";
const Models = require("../models");
const getPost = (res) => {
  Models.Post.findAll({})
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
const createPost = (data, res) => {
  Models.Post.create(data)
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// const likePost = (data, res) => {
//     Models.Post.update(data)
//     .then((data) => {
//       res.send({ result: 200, data: data });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.send({ result: 500, error: err.message });
//     });
// };

// const likePost = (req, res) => {
//   // updates the user matching the ID from the param using JSON data POSTed in request body
//   console.log(req.body);
//   Models.Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
//     .then((data) => res.send({ result: 200, data: data }))
//     .catch((err) => {
//       console.log(err);
//       res.send({ result: 500, error: err.message });
//     });
// };

// const commentPost = (data, res) => {
//     Models.Post.create(data)
//     .then((data) => {
//       res.send({ result: 200, data: data });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.send({ result: 500, error: err.message });
//     });
// };

module.exports = {
  getPost,
  createPost,
  // likePost,
  // commentPost,
};
