import WorkoutGoalItem from "../WorkoutGoalItem/WorkoutGoalItem";

export default function WorkoutList({ fitnessGoal, handleAddFitnessGoal }) {
    const fitGoalItems = fitnessGoal.map(item=> (
        <WorkoutGoalItem 
        key={item._id}
        handleAddFitnessGoal={handleAddFitnessGoal}
        item={item} 
        />
        
    ));
    return <ul>{fitGoalItems}</ul>
}