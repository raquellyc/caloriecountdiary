import "./WorkoutGoalItem.css";

export default function WorkoutGoalItem({ item }){
    return(
        <ul className="WorkoutGoalItem">
            <li>workouts per week: {item.workout} </li>
            <li>minutes: {item.minutes} </li>
        </ul>   
   );
}