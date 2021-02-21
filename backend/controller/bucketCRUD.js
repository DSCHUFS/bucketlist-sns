const moment = require("../lib/timeStamp");
const { exportsValue } = require('../lib/obj')
const {
  READ_BUCKET,
  COUNT_TOTAL_LIKE,
  CHECK_MY_LIKE,
  SELECT_BUCKET_TAGS,
  CREATE_BUCKET,
  CHECK_TAG_EXIST,
  UPDATE_BUCKET,
  DELETE_BUCKET,
  DELETE_BUCKET_TAGS,
  SELECT_BUCKET_IDS,
  TAG_INSERT,
  SELECT_USER_BUCKET_ID,
  INSERT_BUCKET_TAGS
} = require("../queries/bucketCRUD");
const url = 'http://localhost:3001/'

const bucketInfo = async (res, bucket_id, user_id) => {
  // Bucket 기본 정보, 작성자 정보
  let result = await res.pool.query(READ_BUCKET, bucket_id)
  if (result === undefined) {
    res.status(400).json({ message: "fail" });
  }
  const bucket_info = result[0][0];
  bucket_info.user_profile_image = url + bucket_info.user_profile_image

  // Bucket 좋아요 정보
  let count = await res.pool.query(COUNT_TOTAL_LIKE, [bucket_id])
  let push = await res.pool.query(CHECK_MY_LIKE, [bucket_id, user_id])
  bucket_info['like'] = count[0][0]['COUNT(*)']
  bucket_info['my_like'] = push[0][0]['COUNT(*)']

  // Bucket tag정보
  let tags = await res.pool.query(SELECT_BUCKET_TAGS, [bucket_id])
  bucket_info['tags'] = await exportsValue(tags[0], 'tag_name')

  return bucket_info
}

const createBucket = async (req, res) => { // bucket tag 추가
  const conn = await res.pool.getConnection()
  try {
    const user_id = res.user_id;
    const bucketProgress = -1; // -1: 진행전, 0: 도전중, 1: 완료 (변경가능)
    const bucketCreateAt = moment.datetime();
    const {
      bucketTitle,
      bucketContents,
      bucketDday,
      bucketLocation,
      tag // array형태
    } = req.body;

    await conn.beginTransaction()
    let result = await conn.query(CREATE_BUCKET, 
      [
        user_id,
        bucketTitle,
        bucketContents,
        bucketCreateAt,
        bucketDday,
        bucketLocation,
        bucketProgress,
      ]);

    if (result === undefined) {
      res.status(400).json({'msg' : 'create bucket failed'});
    }
    const bucket_id = result[0].insertId

    // Bucket tag정보 저장
    // console.log(tags)
    for (let i = 0; i < tags.length; i++) {
      let result = await conn.query(CHECK_TAG_EXIST, [tags[i]])
      if(result[0].length === 0) { // Tags table에 존재하지 않으면 tag table에 insert
          await conn.query(TAG_INSERT, [tags[i]])
      }
      await conn.query(INSERT_BUCKET_TAGS, [bucket_id, tags[i]])
    }
    await conn.commit()
    res.status(200).json({'msg' : 'create bucket success', 'bucket_id' : bucket_id});
  } catch (e) {
    await conn.rollback()
    console.log(e);
    res.status(400).json({'msg' : 'create bucket failed'});
  } finally {
    await conn.release()
  }
};

const readBucket = async (req, res) => { // bucket tag 추가
  try {
    const user_id = res.user_id
    const { bucketId } = req.params;

    bucket_info = await bucketInfo(res, bucketId, user_id)

    res.status(200).json({ 'bucketInfo' : bucket_info });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "fail" });
  }
};

// TODO: bucket tag update하기
const updateBucket = async (req, res) => { 
  try {
    const { bucketId } = req.params;
    // console.log(bucketId)
    const {
      bucketTitle,
      bucketContents,
      bucketDday,
      bucketLocation,
      bucketProgress
    } = req.body
    
    let result = await res.pool.query(UPDATE_BUCKET, 
      [
        bucketTitle,
        bucketContents,
        bucketDday,
        bucketLocation,
        bucketProgress,
        bucketId,
      ]);

    if (result === undefined) {
      res.status(400).json({ message: "fail" });
    }
    res.status(200).json({ 'msg' : 'bucket update success', 'bucket_id' : bucketId });
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: "fail" });
  }
};

const deleteBucket = async (req, res) => {
  try {
    const user_id = res.user_id;
    const { bucketId } = req.params;
    // console.log(user_id, bucketId)
    await res.pool.query(DELETE_BUCKET_TAGS, [bucketId])
    let result = await res.pool.query(DELETE_BUCKET, [bucketId, user_id]);
    
    if (result === undefined) {
      res.status(400).json({ message: "fail" });
    }
    res.status(200).json({ message: "Removed" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "fail" });
  }
};


const listBucket = async (req, res) => {
  try {
    const user_id = res.user_id;
    // 나의 following tag에 해당하는 bucket id 가져오기
    let bucket_ids = await res.pool.query(SELECT_BUCKET_IDS, [user_id])
    bucket_ids = await exportsValue(bucket_ids[0], 'bucket_id')

    // 내가 작성한 bucket id 가져오기
    let my_bucket_ids = await res.pool.query(SELECT_USER_BUCKET_ID, [user_id])
    my_bucket_ids = await exportsValue(my_bucket_ids[0], 'bucket_id')

    bucket_ids = bucket_ids.concat(my_bucket_ids)
    bucket_ids = Array.from(new Set(bucket_ids))

    // 해당 bucket 정보 가져오기
    let info = []
    for (let i = 0; i < bucket_ids.length; i++) {
      bucket_info = await bucketInfo(res, bucket_ids[i], user_id)
      info.push(bucket_info)
    }

    // 최근순으로 정렬
    info.sort(function(a, b) {
      return a.bucket_create_at > b.bucket_create_at ? -1 : a.bucket_create_at < b.bucket_create_at ? 1:0
    })

    res.status(200).json({'info' : info})
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "fail" });
  }
};

module.exports = {
  createBucket,
  readBucket,
  updateBucket,
  deleteBucket,
  listBucket,
};
