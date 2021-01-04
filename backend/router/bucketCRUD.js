const express = require("express");
const router = express.Router();
const {
  readBucket,
  updateBucket,
  deleteBucket,
  createBucket,
} = require("../controller/bucketCRUD");

router.post("/create", createBucket);
router.get("/get/:bucketId", readBucket);
router.post("/update/:bucketId", updateBucket);
router.post("/delete/:bucketId", deleteBucket);

module.exports = router;
