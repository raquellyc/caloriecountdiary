import WorkoutForm from '../../components/WorkoutForm/WorkoutForm';
import * as userService from '../../utilities/users-service';
import { useState } from "react";


export default function WorkoutPage() {
  const [newWorkout, setNewWorkout] = useState({ name: "", duration: "", time: "" });
  const [addWorkout] = useState();


  return (
    <>
      <h1>WorkoutPage</h1>
      <WorkoutForm  addWorkout={addWorkout} newWorkout={newWorkout} setNewWorkout={setNewWorkout} />

      <ul className="SkillListItem">
      <li>Workout: {newWorkout.name} </li>
      <li className="time"> Start-Time: {newWorkout.time} </li>
      <li className="duration"> duration: {newWorkout.duration} </li>
    </ul>   
    </>
  );
}