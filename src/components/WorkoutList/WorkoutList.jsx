import WorkoutItem from "../WorkoutListItem/WorkoutListItem";

export default function WorkoutList({ workouts, handleAddWorkout }) {
    // const workoutItems = workouts && workouts.map(item => (
    //     <WorkoutItem 
    //     key={item._id}
    //     handleAddWorkout={handleAddWorkout}
    //     workoutItem={item} 
    //     />
        
    // ));

    console.log('workouts',workouts)

    return <ul>workoutItems</ul>
}