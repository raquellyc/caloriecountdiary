const Foods = require('../../models/food');
const request = require('request');

module.exports = {
    search,
    addNewMeal,
    getAllMeals
}

async function addNewMeal(req,res) {
  const meal = await Foods.create(req.body)
  res.json(meal);
}

async function getAllMeals(res, req) {
  const meal = await Foods.find({})
  console.log(meal)
  req.json(meal);
}

async function search(req, res) {
    request.get({
      url: 'https://api.calorieninjas.com/v1/nutrition?query=' + req.body.query,
      headers: {
        'X-Api-Key':`${process.env.API_KEY}`
      },
    }, function(error, response, body) {
      if(error) return console.error('Request failed:', error);
      else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
      else res.json(body)

    })
}

