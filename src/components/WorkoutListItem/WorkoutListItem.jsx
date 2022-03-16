import "./WorkoutListItem.css";

export default function WorkoutListItem({ item }){
    return(
        <ul className="WorkoutListItem">
            <li><strong>{item.name}</strong></li>
            <li className="time"> Start-Time: {item.time} </li>
            <li className="duration"> duration: {item.duration} </li>
        </ul>   
   );
}