export default function CalorieList({ item, food }){
    return(
        <ul className="MealListItem">
            <li>Date: {item.date} </li>
            <li>Meal: {item.meal} </li>
            <li>Food: {food && food.name} </li>
            <li>Calories: {food && food.calories} </li>
        </ul>   
   );
}