import { useState } from 'react';

export default function WourkoutGoalForm({ addFitnessGoal }) {
    const [newFitnessGoal, setNewFitnessGoal] = useState({
        workout: "",
        minutes:""
    });

    /*-- Event Handlers --*/
    function handleChangeState(evt) {
        const updateFitnessGoal = {
            ...newFitnessGoal,
            [evt.target.workouts]: evt.target.value
        };
        setNewFitnessGoal(updateFitnessGoal);
    }
    function handleAddFitnessGoal(evt) {
        evt.preventDeafault();
        addFitnessGoal(newFitnessGoal);
        setNewFitnessGoal({
            workout: "",
            minutes: ""
        });
    }

    return(
        <>
        <h1>Enter your fitness Goal!</h1>
        <form onSubmit={handleAddFitnessGoal}>
            <label>Workouts per Week: </label>
                <select onChange={handleChangeState}>
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
                type="Number"
                onChange={handleChangeState}

                />
                <button type="submit">Add Goal!</button>
        </form>
        </>
    );
}