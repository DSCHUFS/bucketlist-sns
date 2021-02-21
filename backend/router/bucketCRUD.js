const express = require("express");
const router = express.Router();
const {
  readBucket,
  updateBucket,
  deleteBucket,
  createBucket,
  listBucket,
} = require("../controller/bucketCRUD");
const { verifyToken } = require("./middleware/verifyToken");

router.post("/create", verifyToken, createBucket);
router.get("/get/:bucketId", verifyToken, readBucket);
router.post("/update/:bucketId", verifyToken, updateBucket);
router.get("/delete/:bucketId", verifyToken, deleteBucket);
router.get("/list", verifyToken, listBucket);

module.exports = router;
