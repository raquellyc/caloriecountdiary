
export default function WorkoutListItem({ workout }){
    return(
        <ul className="WorkoutListItem">
            <li>{workout.name} </li>
            <li className="time"> Start-Time: {workout.time} </li>
            <li className="duration"> duration: {workout.duration} </li>
        </ul>   
   );
}