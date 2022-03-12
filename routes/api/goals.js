const express = require('express');
const router = express.Router();
const goalsCtrl = require('../../controllers/api/goals');

router.post('/weight/add', goalsCtrl.addNewWeight);

module.exports = router;