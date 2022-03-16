import { useState } from "react";
import './SearchBar.css'


export default function SearchBar({ handleQuery }){
    const [inputValue, setInputValue] = useState('');
    
    function handleChange(evt) {
        setInputValue(evt.target.value)
    }

    function handleSubmit(evt) {
        evt.preventDefault()
        handleQuery(inputValue)

    }
    
  return(
    <form className="SearchForm" onSubmit={handleSubmit}>
        <label><strong>Search Food: </strong></label>
            <input 
            value={inputValue} 
            type="text" 
            name="search" 
            onChange={evt => handleChange(evt)}
            placeholder="food!"
            />
        <button className="AddSearch" type="submit">ADD</button>
    </form>
    );  
}


