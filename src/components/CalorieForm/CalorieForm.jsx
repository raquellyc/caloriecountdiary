import { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';

export default function CalorieForm({ addMeal, food, handleQuery }) {
  const [newMealItem, setNewMealItem] = useState({
    name: "",
    calories: ""
  });

  const [newMeal, setNewMeal] = useState({
     date: "", 
     meal: "breakfast", 
     food:  [],
     calories: []
  });

  /*-- Event Handlers --*/
  function handleChange(evt) {
    setNewMeal({...newMeal, 
      food:food.name, 
      calories:food.calories, 
      [evt.target.name]: evt.target.value
    });
  }

  function handleAddMeal(evt) {
    evt.preventDefault();
    addMeal(newMeal);
    setNewMeal({
      date: "", 
      meal: "breakfast", 
      food: [],
      calories: [] 
    })
  }

  return (
    <div>
      <SearchBar handleQuery={handleQuery} food={food} />
      <div className="food-diary">
        <form onSubmit={handleAddMeal} >

          <label name="food" >food: </label>
          <p>{food && food.name}</p>

          <label name="calories" >calories: </label>
          <p>{food && food.calories}</p>
          
          <label>Date: </label>
          <input
            type= "Date" 
            name="date" 
            value={newMeal.date} 
            onChange={handleChange}
          />
          <label>Meal: </label>
            <select name="meal" onChange={handleChange} >
                <option value='breakfast' >Breakfast</option>
                <option value='lunch'>Lunch</option>
                <option value='dinner'>Dinner</option>
                <option value='snack' >Snack</option>
            </select>
          <button type="submit" >ADD MEAL</button>
          </form>
      </div>

    </div>
  );
}