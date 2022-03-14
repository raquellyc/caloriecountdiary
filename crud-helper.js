// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Food = require('./models/food');
const Goal = require('./models/goal');
const Workout = require('./models/workout');

// Local variables will come in handy for holding retrieved documents
let user, food, goal, workout;
let users, foods, goals, workouts;

