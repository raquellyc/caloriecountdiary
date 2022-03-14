const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FitnessGoalSchema = new Schema({
    workout: {
        type: Number, 
        min: 1,
        max: 14,
        default: 3
    },
    minutes:{
        type: Number,
        min:1
    }
})

module.exports = mongoose.model('Fit', FitnessGoalSchema);
