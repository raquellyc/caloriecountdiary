import { useState } from 'react';

export default function CalorieForm({ handleQuery }) {

    const [inputValue, setInputValue] = useState('');

    function handleChange(evt) {
        setInputValue(evt.target.value)
    }

    function handleSubmit(evt) {
        evt.preventDefault()
        handleQuery(inputValue)
    }

  return (
    <div>
      <div className="food-diary">
        <form onSubmit={handleSubmit} >
          <label>Search Food: </label>
          <input value={inputValue} type="text" name="search" onChange={evt => handleChange(evt)} ></input>
          <button type="submit" >Search</button>

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