import * as foodAPI from '../../utilities/foods-api'
import { useEffect, useState } from 'react';
import CalorieForm from '../../components/CalorieForm/CalorieForm';


export default function CaloriePage() {
  const [food, setFood] = useState();
  const [query, setQuery] = useState('');


    async function getFood(query) {
      const food = await foodAPI.searchFood(query);
      const parseFood = JSON.parse(food)
      setFood(parseFood.items[0])
    }
    console.log(food)
    console.log('Query', query)
    function handleQuery(value) {
      setQuery(value)
    }
    useEffect(function(){
      getFood(query);
    }, [ query ])

  return (
    <>
    <h1>CaloriePage</h1>
    <CalorieForm handleQuery={handleQuery}/>
    </>

  );
}