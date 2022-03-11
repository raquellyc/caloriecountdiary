import MealItem from "../MealListItem/MealListItem";

export default function MealList({ meals, handleAddMeal}) {

    const mealItems = meals.map(item => (
        <MealItem 
        key={item._id}
        handleAddMeal={handleAddMeal}
        handle
        item={item} 
        />
        
    ));

    console.log('meals')

    return <ul>{mealItems}</ul>
}