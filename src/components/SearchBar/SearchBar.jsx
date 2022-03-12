import { useState } from "react";


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
    <form onSubmit={handleSubmit}>
        <label>Search Food: </label>
            <input 
            value={inputValue} 
            type="text" 
            name="search" 
            onChange={evt => handleChange(evt)}
            />
        <button type="submit">ADD</button>
    </form>
    );  
}


