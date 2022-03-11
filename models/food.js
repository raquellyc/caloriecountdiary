const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const foodSchema = new Schema({
//     food: String,
//     calories: String
// })

const diarySchema = new Schema({
    date: Date,
    food: [],
    meal: { type: String, enum:['breakfast', 'lunch', 'dinner', 'snack']},
})


module.exports = mongoose.model ('Diary', diarySchema)