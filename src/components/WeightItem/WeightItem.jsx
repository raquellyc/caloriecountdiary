export default function WeightItem({ item }){
    return(
        <ul className="WeightItem">
            <li>{item.Date} </li>
            <li > weight: {item.Number} </li>
        </ul>   
   );
}