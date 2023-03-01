const express = require('express')
const router = express.Router()

const mainPage = require('../controllers/mainPage')
const aboutPage = require('../controllers/aboutPage')
const contactPage = require('../controllers/contactPage')
const getImage = require('../controllers/getImage')

router.get('/', mainPage)
router.get('/about', aboutPage)
router.get('/contact', contactPage)
router.get('/getimage', getImage)

module.exports = router
