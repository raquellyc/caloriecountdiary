import * as goalAPI from '../../utilities/goals-api';
import { useEffect, useState } from "react";
import WeightList from '../../components/WeightGoalForm/WeightGoalForm';

export default function GoalPage() {
  const [weight, setWeight] = useState([]);

  async function addWeight(weights) {
    const newWeight = await goalAPI.addNewWeight(weights);
    setWeight([...weight, newWeight]);
  }

  useEffect(function() {
    async function allWeight() {
      const allWeight = await goalAPI.getAllWeights();
      setWeight(allWeight);
    }
    allWeight()
  }, [])

  return (
    <>
      <h1>My Goals</h1>
      <WeightList addWeight={addWeight} weight={weight}/>
    </>
  );
}