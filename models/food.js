const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodSchema = new Schema({
    name: String,
    meal: { type: String, enum:[Breakfast, Lunch, Dinner, Snack]}
})


module.exports = mongoose.model ('Food', foodSchema)