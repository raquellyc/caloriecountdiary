import * as foodAPI from '../../utilities/foods-api'
import { useEffect, useState } from 'react';
import CalorieForm from '../../components/CalorieForm/CalorieForm';
import MealList from '../../components/MealList/MealList';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import './CaloriePage.css';

export default function CaloriePage({ user, setUser }) {
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

  useEffect(function() {
    async function getAll() {
      const allMeals = await foodAPI.getAllMeals();
      setMeals(allMeals);
    }
    getAll()
  }, [])

  return (
   <>
    <h1 className='CalorieTitle'>My Calorie Diary</h1>
    <main className='Calorieinfo'>
    <MealList meals={meals}/>
    <CalorieForm handleQuery={handleQuery} addMeal={addMeal} food={food} />
    </main>
    </> 

  );
}