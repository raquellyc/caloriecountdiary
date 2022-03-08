import { useState } from 'react';

export default function CalorieForm() {
  const [diary, setDiary] = useState({
    food: '',
  });

  return (
    <div>
      <div className="food-diary">
        <form>
          <label>Search Food: </label>
          <input type="text" name="search"></input>
          <label>Meal: </label>
            <select>
                <option>Breakfast</option>
                <option>Lunch</option>
                <option>Dinner</option>
                <option>Snack</option>
            </select>
          <button type="submit">ADD</button>
        </form>
      </div>

    </div>
  );
}