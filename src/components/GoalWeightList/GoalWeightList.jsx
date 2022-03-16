import GoalWeightItem from "../GoalWeightItem/GoalWeightItem";
import './GoalWeightList.css';
export default function GoalWeightList({ weights, addWeight }) {

    const goalWeightItems = weights.map(item => (
        <GoalWeightItem
            key={item._id}
            addWeight={addWeight}
            item={item}
        />
    ));

    return (
    <main className="GoalWeightList">
        <h1>Weight Enteries</h1>
        <li className="weightItems" >{goalWeightItems}</li>
    </main>
    );
}