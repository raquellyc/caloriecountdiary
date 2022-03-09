const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodSchema = new Schema({
    name: String,
    meal: { type: String, enum:['breakfast', 'lunch', 'dinner', 'snack']}
})


module.exports = mongoose.model ('Food', foodSchema)