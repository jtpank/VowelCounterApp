const express = require('express')
const controller = require('./controllers/controller1')
const router = express.Router()

router.get('/', controller.home)

//post when click button
router.post('/', controller.countChars)

module.exports = router