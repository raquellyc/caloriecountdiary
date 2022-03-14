import { useState } from "react";

export default function WeightGoalForm({ addWeight }) {
    const [newWeight, setNewWeight] = useState({
        date: "dd/MM/yyyy",
        weight: "0"
    });

    function handleChangeState(evt) {
        const updateWeight = {
            ...newWeight,
            [evt.target.date]: evt.target.value 
        };
        setNewWeight(updateWeight);
    }

    function handleAddWeight(evt) {
        evt.preventDefault();
        addWeight(newWeight);
        setNewWeight({
            date: "dd/MM/yyyy",
            weight: "0"
        });
    }

    return(
        <>
        <h1>Weight Entry Form</h1>
            <form onSubmit={handleAddWeight}>
                <label>Add Date: </label>
                <input
                    type= "Date" 
                    name="date" 
                    value={newWeight.date}
                    onChange={handleChangeState}
                />
                <label>Add Weight: </label>
                <input
                    type="Number"
                    name="weight"
                    value={newWeight.weight}
                    placeholder="New Weight"
                    onChange={handleChangeState}
                />
                <button type="submit">Add Weight</button>
            </form>
       </> 
    );
}