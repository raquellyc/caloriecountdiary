import WorkoutItem from "../WorkoutListItem/WorkoutListItem";

export default function WorkoutList({ workouts, handleAddWorkout }) {
    const workoutItems = workouts.map(item => (
        <WorkoutItem 
        key={item._id}
        handleAddWorkout={handleAddWorkout}
        item={item} 
        />
    ));

    return <ul>{workoutItems}</ul>
}