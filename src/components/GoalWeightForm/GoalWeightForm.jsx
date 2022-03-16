import { useState } from "react";
import './GoalWeightForm.css';

export default function WeightGoalForm({ addWeight }) {
    const [newWeight, setNewWeight] = useState({
        date: "",
        weight: ""
    });

    function handleChange(evt) {
        setNewWeight({...newWeight, 
            [evt.target.name]: evt.target.value
        });
    }

    function handleAddWeight(evt) {
        evt.preventDefault();
        addWeight(newWeight);
        setNewWeight({
            date: "",
            weight: ""
        });
    }

    return(
        <div>
            <form onSubmit={handleAddWeight}>
            <label>Date: </label>
                <input
                    type= "Date" 
                    name="date" 
                    value={newWeight.date} 
                    onChange={handleChange}
                />
                <label>Add Weight: </label>
                <input
                    type="Number"
                    name="weight"
                    value={newWeight.weight}
                    placeholder="New Weight"
                    onChange={handleChange}
                />
                <button className="addWeight" type="submit">Add Weight</button>
            </form>
       </div> 
    );
}