const Schema = require('mongoose').Schema;

const workoutSchema = new Schema({
    name: String,
    time: String,
    duration: Number
})

module.exports = workoutSchema;
