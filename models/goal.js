const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const weightSchema = new Schema({
    date: Date,
    weight: Number
})

const goalWeightSchema = new Schema ({
    
})

const goalSchema = new Schema({
    Currweight: [weightSchema]
})

module.exports = mongoose.model('Goal', goalSchema);