import * as workoutAPI from '../../utilities/workout-api';
import * as fitnessGoalAPI from '../../utilities/fitnessGoals-api';
import { useEffect, useState } from "react";
import WorkoutForm from '../../components/WorkoutForm/WorkoutForm';
import WorkoutList from '../../components/WorkoutList/WorkoutList';
import WorkoutGoalList from '../../components/WorkoutGoalList/WorkoutGoalList';
import WorkoutGoalForm from '../../components/WorkoutGoalForm/WorkoutGoalForm';
import './WorkoutPage.css'

export default function WorkoutPage() {
  const [workouts, setWorkouts] = useState([]);
  const [fitnessGoal, setFitnessGoal] = useState([]);

  async function addWorkout(workout) {
    const newWorkout = await workoutAPI.addNewWorkout(workout);
    setWorkouts([...workouts, newWorkout]);
  }

  async function addFitnessGoal(fitness){
    const newFitGoal = await fitnessGoalAPI.addMyFitness(fitness);
    setFitnessGoal([...fitnessGoal, newFitGoal]);
  }

  useEffect(function () {
    async function getAllFitGoals() {
      const allFitGoals = await fitnessGoalAPI.getAllFitGoals();
      setFitnessGoal(allFitGoals);
    }
    getAllFitGoals()
  }, [])
  
  useEffect(function () {
    async function getAll() {
      const allWorkouts = await workoutAPI.getAllWorkouts();
      setWorkouts(allWorkouts);
    }
    getAll()
  }, [])
  
  return (
    <>
    <h1 className='WorkoutTitle'>My Workout Diary</h1>
      <main className='WorkoutDiary'>
        <div className='fitGoal'>
          <WorkoutGoalList fitnessGoal={fitnessGoal}/>
          <WorkoutGoalForm addFitnessGoal={addFitnessGoal}/>
        </div>
        <div className='workoutGoal'>
          <WorkoutForm  addWorkout={addWorkout} />
          <WorkoutList workouts={workouts}/>
        </div>
      </main>
    </>
  );
}