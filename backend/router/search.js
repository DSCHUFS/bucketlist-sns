const express = require("express");
const {
  findBucketByTitle,
  findBucketByContent,
  findBucketByTag,
} = require("../controller/search");
const router = express.Router();

router.get("/title/:searchTitle", findBucketByTitle);
router.get("/content/:searchTitle", findBucketByContent);
router.get("/tag/:searchTitle", findBucketByTag);

module.exports = router;