import { useState } from "react";

export default function WeightGoalForm({ addNewWeight }) {
    const [newWeight, setNewWeight] = useState({
        date: "",
        weight: ""
    });

    function handleAddWeight(evt) {
        evt.preventDefault();
        addNewWeight(newWeight);
        setNewWeight({
            date: "",
            weight: ""
        });
    }

    return(
        <>
        <div>
            <form onSubmit={handleAddWeight}>
                <label>Add Weight: </label>
                <input
                    type= "Date" 
                    name="date" 
                />
                <input
                    type="Number"
                    name="weight"
                    placeholder="New Weight"
                />
            <button type="submit">Add Workout</button>
            </form>
        </div>
       </> 
    );
}