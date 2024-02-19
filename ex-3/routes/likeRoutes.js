const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.put("/like/:id", (req, res) => {
  Controllers.likeController.likePost(req.body, res);
});

module.exports = router;
