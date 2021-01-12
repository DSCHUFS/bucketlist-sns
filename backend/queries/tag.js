exports.UNFOLLOWING_TAG = `DELETE FROM FollowingTags WHERE user_id = ? and tag_name = ?;`
exports.FOLLOWING_TAG = `INSERT INTO FollowingTags(user_id, tag_name) VALUES(?, ?);`
exports.FOLLOWING_LIST = `SELECT tag_name FROM FollowingTags WHERE user_id = ?`