import { useState } from "react";


export default function SearchBar({ handleQuery, handleFood, food }){
    const [inputValue, setInputValue] = useState('');
    
    function handleChange(evt) {
        setInputValue(evt.target.value)
    }

    function handleSubmit(evt) {
        evt.preventDefault()
        handleQuery(inputValue)
        handleFood(food)
    }

    //add function to add multiply fooods to a meal

  return(
    <form onSubmit={handleSubmit}>
        <label>Search Food: </label>
            <input 
            value={inputValue} 
            type="text" 
            name="search" 
            onChange={evt => handleChange(evt)}
            />
        <button type="submit" >ADD</button>
    </form>
    );  
}


