import * as foodAPI from '../../utilities/foods-api'
import { useEffect, useState } from 'react';
import CalorieForm from '../../components/CalorieForm/CalorieForm';
import SearchBar from '../../components/SearchBar/SearchBar';


export default function CaloriePage() {
  const [food, setFood] = useState();
  const [meals, setMeals] = useState([]);
  const [query, setQuery] = useState('');
  
  async function getFood(query) {
    const foodSearch = await foodAPI.searchFood(query);
    const parseFood = JSON.parse(foodSearch)
    setFood(parseFood.items[0])
  }

  function handleQuery(value) {
    setQuery(value)
  }

  useEffect(function(){
    getFood(query);
  }, [ query ])

  async function addMeal(meal) {
    const newMeal = await foodAPI.addNewMeal(meal);
    setMeals([...meals, newMeal]);
  }


console.log(food)
  return (
    <>
    <h1>My Food Diary</h1>
    <CalorieForm handleQuery={handleQuery} addMeal={addMeal} food={food}/>
    </>

  );
}