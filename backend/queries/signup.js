exports.EMAIL_CHECK = `SELECT * FROM Users WHERE user_email = ?;`
exports.USER_INSERT = `INSERT INTO Users(user_email, user_password, user_name, user_birth, user_death, user_profile_image, user_profile_detail) VALUES (?, ?, ?, ?, ?, ?, ?);`
exports.FIND_TAG_NAME = `SELECT * FROM Tags WHERE tag_name = ?;`
exports.TAG_INSERT = `INSERT INTO Tags VALUES (?);`
exports.FOLLOWING_TAG = `INSERT INTO FollowingTags (user_id, tag_name) VALUES (?,?);`