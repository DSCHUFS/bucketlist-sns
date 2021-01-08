const express = require("express");
const {
  findBucketByTitle,
  findBucketByContent,
  findBucketByTag,
} = require("../controller/search");
const router = express.Router();

router.get("/search/title/:searchTitle", findBucketByTitle);
router.get("/search/content/:searchTitle", findBucketByContent);
router.get("/search/tag/:searchTitle", findBucketByTag);

module.exports = router;
