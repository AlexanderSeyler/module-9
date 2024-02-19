let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");

router.get("/", (req, res) => {
  Controllers.postController.getPost(res);
});
router.post("/create", (req, res) => {
  Controllers.postController.createPost(req.body, res);
});
module.exports = router;
