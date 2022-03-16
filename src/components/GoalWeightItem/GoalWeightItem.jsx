
export default function GoalWeightItem({ item }) {
    return(
        <ul>
            <li>Date: {item.date.toString().substr(0, 10)}</li>
            <li>Weight: {item.weight}</li>
        </ul>
    );
}