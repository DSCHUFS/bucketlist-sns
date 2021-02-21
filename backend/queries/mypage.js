exports.SELECT_USER_INFO = `SELECT user_email, user_name, user_birth, user_death, user_profile_image, user_profile_detail FROM Users WHERE user_id = ?;`
exports.SELECT_FOLLOWING_TAGS = `SELECT tag_name FROM FollowingTags WHERE user_id = ?;`
exports.UPDATE_USER_INFO = `UPDATE Users SET user_name = ?, user_birth = ?, user_death = ?, user_profile_image = ?, user_profile_detail = ? WHERE user_id = ?`