const express = require('express')
const router = express.Router()
const tagController = require('../controller/tag')

router.post('/following', tagController.followingTagAPI)

module.exports = router