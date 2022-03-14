import WeightItem from "../WeightItem/WeightItem";

export default function WeightList({ weight, handleAddWeight }) {
   const weightItems = weight.map(item => (
       <WeightItem
       key={item._id}
       handleAddWeight={handleAddWeight}
       item={item}
       
       />
   ));
console.log(item)
    return(
        <ul>{weightItems}</ul>
    );
}