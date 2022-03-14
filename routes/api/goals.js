const express = require('express');
const router = express.Router();
const goalsCtrl = require('../../controllers/api/goals');

router.post('/weight/add', goalsCtrl.addNewWeight);
router.get('/weight', goalsCtrl.allWeight);

module.exports = router;