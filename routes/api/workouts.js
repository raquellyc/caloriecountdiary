const express = require('express');
const router = express.Router();
const workoutsCtrl = require('../../controllers/api/workouts');

router.get('/workouts', workoutsCtrl.getAll);
router.get('/fitGoal', workoutsCtrl.getAllFitGoal);
router.post('/workouts/add', workoutsCtrl.addNewWorkout);
router.post('fitGoal/add', workoutsCtrl.addNewFitGoal);

module.exports = router;