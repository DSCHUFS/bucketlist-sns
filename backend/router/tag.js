const express = require('express')
const router = express.Router()
const tagController = require('../controller/tag')

const { verifyToken } = require('./middleware/verifyToken')

router.post('/following', verifyToken, tagController.followingTagAPI) // 사용자가 tag following/unfollowing
router.get('/following/list/:user_id', verifyToken, tagController.userFollowingListAPI) // 사용자의 following tag list

module.exports = router