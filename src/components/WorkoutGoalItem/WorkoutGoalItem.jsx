export default function WorkoutGoalItem({ item }){
    return(
        <ul className="WorkoutGoalItem">
            <li>workouts: {item.workout} </li>
            <li>minutes: {item.minutes} </li>
        </ul>   
   );
}