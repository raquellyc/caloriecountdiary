import { useState } from "react";
import WorkoutForm from '../../components/WorkoutForm/WorkoutForm';
import WorkoutList from '../../components/WorkoutList/WorkoutList';


export default function WorkoutPage() {
  const [workouts, setworkouts] = useState({ name: "", duration: "", time: "" });

  function addWorkout(workout) {
    setworkouts([...workouts, workout]);
  }

  return (
    <>
      <h1>WorkoutPage</h1>
      <WorkoutForm  addWorkout={addWorkout} />
      <WorkoutList workouts={workouts}/>
    </>
  );
}