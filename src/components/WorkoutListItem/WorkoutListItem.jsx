
export default function WorkoutListItem({ item }){
    return(
        <ul className="WorkoutListItem">
            <li>{item.name} </li>
            <li className="time"> Start-Time: {item.time} </li>
            <li className="duration"> duration: {item.duration} </li>
        </ul>   
   );
}