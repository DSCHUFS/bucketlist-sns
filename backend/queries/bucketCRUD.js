const CREATE_BUCKET = `INSERT INTO Buckets(user_id, bucket_title, bucket_contents, bucket_create_at, bucket_dday, bucket_location, bucket_progress) VALUES (?, ?, ?, ?, ?, ?, ?);`;
const READ_BUCKET = `
  SELECT bucket_id, Users.user_id, bucket_title, bucket_contents, 
  bucket_create_at, bucket_dday, bucket_location, bucket_progress, 
  user_name, user_profile_image 
  FROM Buckets 
  JOIN Users 
  ON bucket_id = ? AND Buckets.user_id = Users.user_id;
`;
const COUNT_TOTAL_LIKE = `SELECT COUNT(*) FROM PushButtons WHERE bucket_id = ?`
const CHECK_MY_LIKE = `SELECT COUNT(*) FROM PushButtons WHERE bucket_id = ? AND user_id = ?;`
const SELECT_BUCKET_IDS = `SELECT bucket_id FROM BucketTags JOIN FollowingTags ON user_id = ? AND FollowingTags.tag_name = BucketTags.tag_name`;
const SELECT_BUCKET_TAGS = `SELECT tag_name FROM BucketTags WHERE bucket_id = ?`

const UPDATE_BUCKET = `
  UPDATE Buckets 
  SET bucket_title = ?, 
  bucket_contents = ?, 
  bucket_dday = ?, 
  bucket_location = ?, 
  bucket_progress = ? 
  WHERE bucket_id = ?;
`;
const DELETE_BUCKET = `DELETE FROM Buckets WHERE bucket_id = ? and user_id = ?`;
const DELETE_BUCKET_TAGS = `DELETE FROM BucketTags WHERE bucket_id = ?;`

const CHECK_TAG_EXIST = `SELECT * FROM Tags WHERE tag_name = ?;`
const SELECT_USER_BUCKET_ID = `SELECT bucket_id FROM Buckets WHERE user_id = ?;`
const TAG_INSERT = `INSERT INTO Tags VALUES (?);`
const INSERT_BUCKET_TAGS = `INSERT INTO BucketTags (bucket_id, tag_name) VALUES(?, ?);`

module.exports = {
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
};
