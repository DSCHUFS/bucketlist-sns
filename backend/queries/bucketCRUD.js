const CREATE_BUCKET = `INSERT INTO Buckets(user_id, bucket_title, bucket_contents, bucket_create_at, bucket_dday, bucket_location, bucket_progress) VALUES (?, ?, ?, ?, ?, ?, ?);`;
const READ_BUCKET = `SELECT * FROM Buckets WHERE bucket_id = ?;`;
const UPDATE_BUCKET = `
  UPDATE Buckets
  SET bucket_title = ?,
  SET bucket_contents = ?,
  SET bucket_dday = ?,
  SET bucket_location = ?,
  SET bucket_progress = ?
  WHERE bucket_id = ?
`;
const DELETE_BUCKET = `DELETE FROM Buckets WHERE bucket_id = ? and user_id = ?`;
const LIST_BUCKET = `
  SELECT * FROM Buckets
  WHERE user_id = ?
`;

module.exports = {
  CREATE_BUCKET,
  READ_BUCKET,
  UPDATE_BUCKET,
  DELETE_BUCKET,
  LIST_BUCKET,
};
