const db = require("../config/database");
const moment = require('./timeStamp')
const {
  CREATE_BUCKET,
  READ_BUCKET,
  UPDATE_BUCKET,
  DELETE_BUCKET,
} = require("../queries/bucketCRUD");

const createBucket = async (req, res) => {
  try {
    const user_id = res.user_id
    const bucketProgress = -1 // -1: 진행전, 0: 도전중, 1: 완료 (변경가능)
    const bucketCreateAt = moment.datetime()
    const {
      bucketTitle,
      bucketContents,
      bucketDday,
      bucketLocation,
    } = req.body;

    let result = await db
      .promise()
      .query(CREATE_BUCKET, [
        user_id,
        bucketTitle,
        bucketContents,
        bucketCreateAt,
        bucketDday,
        bucketLocation,
        bucketProgress
      ]);

    if (result === undefined) {
      res.status(400);
    }

    // TODO: 생성된 버킷 ID 보내주기
    res.send(200);
  } catch (e) {
    console.log(e);
    res.status(400);
  }
};

const readBucket = async (req, res) => {
  try { 
    const { bucketId } = req.params;
    let result = await db.promise().query(READ_BUCKET, [bucketId]);
    console.log(result[0]);
    if (result === undefined) {
      res.status(400).json({ message: "fail" });
    }
    res.status(200).json({ result: result[0] });
  } catch (error) {
    console.log(e);
    res.status(400).json({ message: "fail" });
  }
};

// (유진이 추가) TODO: 변경된 항목만 db에서 update하기
const updateBucket = async (req, res) => {
  try {
    const {
      bucketId,
      bucketTitle,
      bucketContents,
      bucketDday,
      bucketLocation,
      bucketProgress,
    } = req.params;

    let result = await db
      .promise()
      .query(UPDATE_BUCKET, [
        bucketTitle,
        bucketContents,
        bucketDday,
        bucketLocation,
        bucketProgress,
        bucketId,
      ]);
    console.log(result[0]);
    if (result === undefined) {
      res.status(400).json({ message: "fail" });
    }
    // TODO: 업데이트된 버킷 ID 반환하기
    res.status(200).json({ result: result[0] });
  } catch (error) {}
};

const deleteBucket = async (req, res) => {
  try {
    const user_id = res.user_id
    const { bucketId } = req.params;
    let result = await db.promise().query(DELETE_BUCKET, [bucketId, user_id]);
    console.log(result[0]);
    if (result === undefined) {
      res.status(400).json({ message: "fail" });
    }
    res.status(200).json({ message: "Removed" });
  } catch (error) {
    console.log(e);
    res.status(400).json({ message: "fail" });
  }
};
const listBucket = async (req, res) => {};

module.exports = {
  createBucket,
  readBucket,
  updateBucket,
  deleteBucket,
  listBucket,
};
