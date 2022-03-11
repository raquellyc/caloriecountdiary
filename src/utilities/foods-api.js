import { getToken } from "./users-service";
const BASE_URL = '/api/foods';

export function searchFood(query) {
    return sendRequest(`${BASE_URL}/foods`, 'POST', {query});
}

export function addNewMeal(meal) {
  return sendRequest(`${BASE_URL}/foods/add`, 'POST', meal);
}

export function getAllMeals() {
  return sendRequest(`${BASE_URL}/foods/meals`)
}

async function sendRequest(url, method = 'GET', payload = null) {
    // Fetch accepts an options object as the 2nd argument
    // used to include a data payload, set headers, etc. 
    const options = { method };
    if (payload) {
      options.headers = { 'Content-Type': 'application/json', 'X-Api-Key':`${process.env.API_KEY}` };
      options.body = JSON.stringify(payload);
    }
    const token = getToken();
    if (token) {
      // Ensure that the headers objects exists
      options.headers = options.headers || {};
      // Add the Authorization header
      // Prefacing the token with 'Bearer '
      options.headers.Authorization = `Bearer ${token}`;
    }
    const res = await fetch(url, options);
    // res.ok will be false if the status code set to 4xx in the controller action
    if (res.ok) return res.json();
    throw new Error('Bad Request');
  }