const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const weightSchema = new Schema({
//     date: Date,
//     weight: Number
// })

const goalSchema = new Schema({
    date: Date,
    weight: Number
})

module.exports = mongoose.model('Goal', goalSchema);