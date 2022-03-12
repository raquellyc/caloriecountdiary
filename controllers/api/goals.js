const Goal = require('../../models/goal');

module.exports = {
    addNewWeight
}

async function addNewWeight(res, req) {
    const weight = await Goal.create(req.body);
    res.json(weight);
}

