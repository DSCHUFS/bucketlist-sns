const express = require("express");
const router = express.Router();
const buttonController = require("../controller/button");
const { verifyToken } = require('./middleware/verifyToken')

router.post('', verifyToken, buttonController.likeAPI);

module.exports = router;
