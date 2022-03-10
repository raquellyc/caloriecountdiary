import { useState } from "react";

export default function WeightGoalForm() {
    const [newWeight, setNewWeight] = useState();

    return(
        <>
        <form>
            <label>Add Weight: </label>
            <input>
                type="Number"
                name="weight"
                placeholder="New Weight"
            </input>
        </form>
        </>
    );
}