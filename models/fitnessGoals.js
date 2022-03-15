const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FitnessGoalSchema = new Schema({
    workout: {
        type: Number, 
        min: 1,
        max: 14
    },
    minutes:{type: Number, required:true, default: 0 }
})

module.exports = mongoose.model('Fit', FitnessGoalSchema);
