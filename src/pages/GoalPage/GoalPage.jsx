import * as goalAPI from '../../utilities/goals-api';
import { useEffect, useState } from "react";
import GoalWeightList from '../../components/GoalWeightList/GoalWeightList';
import GoalWeightForm from '../../components/GoalWeightForm/GoalWeightForm';

export default function GoalPage() {
  const [weights, setWeights] = useState([]);

  async function addWeight(weight) {
    const newWeight = await goalAPI.addNewWeight(weight);
    setWeights([...weights, newWeight]);
  }

  useEffect(function() {
    async function allWeight() {
      const allWeights = await goalAPI.getAllWeights();
      setWeights(allWeights);
    }
    allWeight()
  }, [])

  return (
    <>
      <h1>My Goals</h1>
      <GoalWeightForm addWeight={addWeight}/>
      <GoalWeightList weights={weights}/>
    </>
  );
}