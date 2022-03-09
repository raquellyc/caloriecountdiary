import { useState } from "react";

export default function WorkoutForm() {
  const [newWorkout, setNewWorkout] = useState({ name: "", time: "" });
  const [addWorkout] = useState();

  function handleChangeState(evt) {
    const updatedNewWorkout = {
      ...newWorkout,
      [evt.target.name]: evt.target.value
    };
    setNewWorkout(updatedNewWorkout);
  }

  function handleAddWorkout(evt) {
    evt.preventDefault();
    addWorkout(newWorkout);
    setNewWorkout({
      name: "",
      duration: "",
      time: ""
    });
  }

  return (
    <form className="NewWorkoutForm" onSubmit={handleAddWorkout}>
      <label>Exercise: </label>
      <input
        name="name"
        value={newWorkout.name}
        onChange={handleChangeState}
        placeholder="New Exercise"
        required
        pattern=".{4,}"
      />
      <label>Duration: </label>
      <input
        name="duration"
        value={newWorkout.duration}
        onChange={handleChangeState}
        placeholder="Time in minutes"
        required
        pattern=".{4,}"
      />
      <label>Start Time: </label>
      <input
      type= "time" 
      name="level" 
      value={newWorkout.time} 
      onChange={handleChangeState}>
      </input>
      <button type="submit">Add Workout</button>
    </form>
  );
}