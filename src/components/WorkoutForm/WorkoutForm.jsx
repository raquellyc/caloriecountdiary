import { useState } from "react";
import './WorkoutForm.css';

export default function WorkoutForm({ addWorkout }) {
  const [newWorkout, setNewWorkout] = useState({ 
    name: "", 
    duration: "", 
    time: "" 
  });

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
      time: "00-00"
    });
  }

  return (
    <>
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
      <label>Start Time: </label>
      <input
      type= "time" 
      name="time" 
      value={newWorkout.time} 
      onChange={handleChangeState}
      />
      <label>Duration: </label>
      <input
        name="duration"
        value={newWorkout.duration}
        onChange={handleChangeState}
        placeholder="Time in minutes"
      />
      <button className="addWorkout" type="submit" >Add Workout</button>
    </form>

    </>
  );
}