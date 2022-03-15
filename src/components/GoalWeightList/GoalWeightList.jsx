import GoalWeightItem from "../GoalWeightItem/GoalWeightItem";

export default function GoalWeightList({ weights, addWeight }) {

    const goalWeightItems = weights.map(item => (
        <GoalWeightItem
            key={item._id}
            addWeight={addWeight}
            item={item}
        />
    ));

    return <ul>{goalWeightItems}</ul>
}