import { useEffect, useState } from "react";
import WorkoutForm from '../../components/WorkoutForm/WorkoutForm';
import WorkoutList from '../../components/WorkoutList/WorkoutList';
import * as workoutAPI from '../../utilities/workout-api';

export default function WorkoutPage() {
  const [workouts, setworkouts] = useState({ name: "", duration: "", time: "" });

  async function addWorkout(workout) {
    const newWorkout = await workoutAPI.addNewWorkout(workout);
    console.log(newWorkout);
    // setworkouts([...workouts, newWorkout]);
  }

  useEffect( function(){
    async function getAll() {
      const workouts = await workoutAPI.getAllWorkouts();
      setworkouts(workouts);
    }
    getAll()
  }, [])

console.log(workouts)
  return (
    <>
      <h1>WorkoutPage</h1>
      <WorkoutForm  addWorkout={addWorkout} />
      <WorkoutList workouts={workouts}/>
    </>
  );
}