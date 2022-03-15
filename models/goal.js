const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const goalSchema = new Schema({
    date: Date,
    weight: {type: Number, required:true, default: 0 }
})

module.exports = mongoose.model('Goal', goalSchema);