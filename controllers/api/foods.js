const Foods = require('../../models/food');

module.exports = {

}

var query = '3lb carrots and a chicken sandwich';
request.get({
  url: 'https://api.calorieninjas.com/v1/nutrition?query='+query,
  headers: {
    'X-Api-Key':'/lMXkVFD0hiExj9jnNzkWQ==GLiYCMlq9LTjuKBh'
  },
}, function(error, response, body) {
  if(error) return console.error('Request failed:', error);
  else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
  else console.log(body)
})
