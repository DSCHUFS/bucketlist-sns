exports.UNFOLLOWING_TAG = `DELETE FROM FollowingTags WHERE user_id = ? and tag_id = ?;`
exports.FOLLOWING_TAG = `INSERT INTO FollowingTags(user_id, tag_id) VALUES(?, ?);`