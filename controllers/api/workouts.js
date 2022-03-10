const Workouts = require('../../models/workout');
const request = require('request');

module.exports = {
    getAll,
    addNewWorkout
}

async function getAll(req, res) {
    const workouts = await Workouts.find();
    res.json(workouts);
}

async function addNewWorkout(req, res) {
    const workout = await Workouts.create();
    res.json(workout);
}
