const express = require('express');
const router = express.Router();
const workoutsCtrl = require('../../controllers/api/workouts');

router.get('/workouts', workoutsCtrl.getAll);
router.post('/workouts/add', workoutsCtrl.addNewWorkout);

module.exports = router;