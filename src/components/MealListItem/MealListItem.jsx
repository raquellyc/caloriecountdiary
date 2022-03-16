import "./MealListItem.css";

export default function CalorieList({ item }){
    return(
        <ul className="MealListItems">
            <li><strong>{item.meal} </strong></li>
            <li>Date: {item.date.toString().substr(0, 10)} </li>
            <li>Food: {item.food} </li>
            <li>Calories: {item.calories} </li>
        </ul>   
   );
}