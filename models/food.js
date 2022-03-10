const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodSchema = new Schema({
    date: Date,
    food: String,
    meal: { type: String, enum:['breakfast', 'lunch', 'dinner', 'snack']},
    calories: String
})


module.exports = mongoose.model ('Food', foodSchema)