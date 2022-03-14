const Workout = require('../../models/workout');
const Fit = require('../../models/fit');


module.exports = {
    getAll,
    addNewWorkout,
    addNewFitGoal,
    getAllFitGoal
}

async function getAll(req, res) {
    const workout = await Workout.find({})
    res.json(workout);
}

async function getAllFitGoal(req, res) {
    const fitGoal = await Fit.find({})
    res.json(fitGoal);
}

async function addNewWorkout(req, res) {
    console.log(req.body);
    const workout = await Workout.create(req.body);
    res.json(workout);
}

async function addNewFitGoal(req, res) {
    const fitGoal = await Fit.create(req.body);
    res.json(fitGoal);
}