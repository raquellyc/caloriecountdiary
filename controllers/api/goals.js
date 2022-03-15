const Goal = require('../../models/goal');

module.exports = {
    addNewWeight,
    allWeight
}

async function addNewWeight(res, req) {
    const weight = await Goal.create(res.body);
    req.json(weight);
}

async function allWeight(res, req) {
    const weight = await Goal.find({})
    req.json(weight)
}



