const express = require('express')
const router = express.Router()
const tagController = require('../controller/tag')

const { verifyToken } = require('./middleware/verifyToken')

router.post('/following', verifyToken, tagController.followingTagAPI)

module.exports = router