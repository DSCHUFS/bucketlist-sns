const express = require('express')
const router = express.Router()
const mypageController = require('../controller/mypage')
const { uploadImage } = require('./middleware/uploadImage')
const { verifyToken } = require('./middleware/verifyToken')

router.get('', verifyToken, mypageController.mypageAPI)
// router.put('', uploadImage, mypageController.profileUpdateAPI)

module.exports = router