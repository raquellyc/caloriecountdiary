const Fit = require('../../models/fitnessGoals');


module.exports = {
    addNewFitGoal,
    getAllFitGoal
}


async function getAllFitGoal(req, res) {
    const fitGoal = await Fit.find({})
    res.json(fitGoal);
}


async function addNewFitGoal(req, res) {
    const fitGoal = await Fit.create(req.body);
    res.json(fitGoal);
}