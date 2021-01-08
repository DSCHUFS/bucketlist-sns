// 제목
const SEARCH_TITLE = `SELECT bucket_id FROM Buckets WHERE bucket_title = ?;`;

// 내용
const SEARCH_CONTENT = `SELECT bucket_id FROM Buckets WHERE bucket_contents = ?;`;

// 태그
const SEARCH_TAG = `SELECT bucket_id FROM BucketTags WHERE tag_name = ?;`;

module.exports = {
  SEARCH_TITLE,
  SEARCH_CONTENT,
  SEARCH_TAG,
};
