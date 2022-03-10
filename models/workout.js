const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    name: {type: String, required:true },
    time: {type: String, required:true },
    duration: {type: Number, required:true, default: 0 }
})

module.exports = mongoose.model('Workout', workoutSchema);
