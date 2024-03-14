
const express = require('express')
const router = express()
const adminController = require('../../controllers/admin/admincontroller')

router.post('/register',adminController.register)
router.post('/login',adminController.Login)


module.exports = router