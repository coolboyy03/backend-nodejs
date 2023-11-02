const express = require('express')
const router = express.Router()
const { getHomePage,sampleCLB } = require('../controllers/homeController.js')

router.get("/", getHomePage);
router.get('/example',sampleCLB);      


module.exports = router;