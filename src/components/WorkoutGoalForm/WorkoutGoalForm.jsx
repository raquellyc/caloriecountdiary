import { useState } from 'react';
import './WorkoutGoalForm.css'

export default function WourkoutGoalForm({ addFitnessGoal }) {
    const [newFitnessGoal, setNewFitnessGoal] = useState({
        workout: "3",
        minutes: ""
    });

    /*-- Event Handlers --*/
    function handleChangeState(evt) {
        const updateFitnessGoal = {
            ...newFitnessGoal,
            [evt.target.name]: evt.target.value
        };
        setNewFitnessGoal(updateFitnessGoal);
        console.log(newFitnessGoal)
    }
    
    function handleAddFitnessGoal(evt) {
        evt.preventDefault();
        addFitnessGoal(newFitnessGoal);
        setNewFitnessGoal({
            workout: "3",
            minutes: ""
        });
    }

    return(
        <>
        <form className="NewFitGoalForm" onSubmit={handleAddFitnessGoal}>
            <label>Workouts per Week: </label>
                <select name="workout" value={newFitnessGoal.workout} onChange={handleChangeState}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                </select>
            <label>Minutes per Day: </label>
                <input
                name="minutes"
                type="Number"
                onChange={handleChangeState}
                />
                <button className="addGoal" type="submit">Add Goal!</button>
        </form>
        </>
    );
}