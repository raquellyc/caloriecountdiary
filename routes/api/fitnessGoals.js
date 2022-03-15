const express = require('express');
const router = express.Router();
const workoutsCtrl = require('../../controllers/api/fitnessGoals');

router.post('/fitGoal/add', workoutsCtrl.addNewFitGoal);
router.get('/fitGoal', workoutsCtrl.getAllFitGoal);

module.exports = router;