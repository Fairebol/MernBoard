const express = require('express');
const router = express.Router();
const { dashboardView, dashboardResults } = require('../controllers/DashController')

router.post('/', (req, res) => {res.status(200).send({success: true})})
router.get('/:limit', dashboardResults)
router.get('/', dashboardResults)

module.exports = router;