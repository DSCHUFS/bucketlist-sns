const express = require('express')
const router = express.Router()
const userController = require('../controller/user')
const { uploadImage } = require('./middleware/uploadImage')
const { verifyToken } = require('./middleware/verifyToken')

router.get('/:user_id', verifyToken, userController.userInfoAPI)
router.put('/update', verifyToken, userController.userUpdateAPI)

module.exports = router