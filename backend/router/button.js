const express = require("express");
const router = express.Router();
const buttonController = require("../controller/button");
const { verifyToken } = require('./middleware/verifyToken')

router.get("/:bucket_id", verifyToken, buttonController.likeAPI);

module.exports = router;
