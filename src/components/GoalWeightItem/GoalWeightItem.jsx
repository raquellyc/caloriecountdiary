export default function GoalWeightItem({ item }) {
    return(
        <ul>
            <li>Date: {item.date}</li>
            <li>Weight: {item.weight}</li>
        </ul>
    );
}