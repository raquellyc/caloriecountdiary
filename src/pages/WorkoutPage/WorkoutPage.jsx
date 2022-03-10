import { useEffect, useState } from "react";
import WorkoutForm from '../../components/WorkoutForm/WorkoutForm';
import WorkoutList from '../../components/WorkoutList/WorkoutList';
import * as workoutAPI from '../../utilities/workout-api';

export default function WorkoutPage() {
  const [workouts, setWorkouts] = useState([]);

  
  async function addWorkout(workout) {
    const newWorkout = await workoutAPI.addNewWorkout(workout);
    console.log(newWorkout);
    setWorkouts([...workouts, newWorkout]);
  }

  useEffect(function () {
    async function getAll() {
      const allWorkouts = await workoutAPI.getAllWorkouts();
      setWorkouts(allWorkouts);
    }
    getAll()
  }, [])

console.log(workouts)
  return (
    <>
      <h1>Workout Diary</h1>
      <WorkoutForm  addWorkout={addWorkout} />
      <WorkoutList workouts={workouts}/>
    </>
  );
}