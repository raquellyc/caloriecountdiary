const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const weightSchema = new Schema({
    date: Date,
    weight: Number
})

const GoalSchema = new Schema({

})

module.exports = mongoose.model('Goal', goalSchema);