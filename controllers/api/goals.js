const Goal = require('../../models/goal');

module.exports = {
    addNewWeight,
    allWeight
}

async function allWeight(req, res) {
    const weight = await Goal.find({})
    res.json(weight)
}

async function addNewWeight(res, req) {
    const weight = await Goal.create(req.body);
    req.json(weight);
    console.log(weight)
}


