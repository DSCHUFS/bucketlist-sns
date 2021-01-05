const express = require("express");
const router = express.Router();
const {
  readBucket,
  updateBucket,
  deleteBucket,
  createBucket,
} = require("../controller/bucketCRUD");
const { verifyToken } = require('./middleware/verifyToken')

router.post("/create", verifyToken, createBucket);
router.get("/get/:bucketId", verifyToken, readBucket);
router.post("/update/:bucketId", verifyToken, updateBucket);
router.post("/delete/:bucketId", verifyToken, deleteBucket);

module.exports = router;
