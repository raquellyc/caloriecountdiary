export default function CalorieList({ item }){
    return(
        <ul className="MealListItem">
            <li><strong>{item.meal} </strong></li>
            <li>Date: {item.date} </li>
            <li>Food: {item.food} </li>
            <li>Calories: {item.calories} </li>
        </ul>   
   );
}