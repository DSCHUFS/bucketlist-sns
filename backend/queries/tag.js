exports.UNFOLLOWING_TAG = `DELETE FROM FollowingTags WHERE user_id = ? and tag_name = ?;`
exports.FOLLOWING_TAG = `INSERT INTO FollowingTags(user_id, tag_name) VALUES(?, ?);`
exports.FOLLOWING_LIST = `SELECT tag_name FROM FollowingTags WHERE user_id = ?`
exports.CHECK_TAG_EXIST = `SELECT * FROM Tags WHERE tag_name = ?;`
exports.ADD_TAG = `INSERT INTO Tags(tag_name) VALUES (?);`
exports.CHECK_FOLLOWING_EXIST = `SELECT * FROM FollowingTags WHERE user_id = ? AND tag_name = ?;`