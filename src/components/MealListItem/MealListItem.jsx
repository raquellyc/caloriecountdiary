export default function CalorieList({ item }){
    return(
        <ul className="MealListItem">
            <li>Date: {item.date} </li>
            <li>Meal: {item.meal} </li>
            <li>Food: {item.food} </li>
            <li>Calories: {item.calories} </li>
        </ul>   
   );
}