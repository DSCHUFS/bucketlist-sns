const express = require('express')
const router = express.Router()
const signupController = require('../controller/signup')
const { uploadImage } = require('./middleware/uploadImage')

router.post('', uploadImage, signupController.signupAPI)

module.exports = router