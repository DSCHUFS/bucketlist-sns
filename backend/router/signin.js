const express = require('express')
const router = express.Router()
const signinController = require('../controller/signin')

router.post('', signinController.signinAPI)

module.exports = router