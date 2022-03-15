const Workout = require('../../models/workout');
const Fit = require('../../models/fitnessGoals');


module.exports = {
    getAll,
    addNewWorkout,
}

async function getAll(req, res) {
    console.log("hiii")
    const workout = await Workout.find({})
    console.log(workout)
    res.json(workout);
}

async function addNewWorkout(req, res) {
    console.log(req.body);
    const workout = await Workout.create(req.body);
    res.json(workout);
}

