import * as goalAPI from '../../utilities/goals-api';
import { useEffect, useState } from "react";
import WeightGoalForm from '../../components/WeightGoalForm/WeightGoalForm';

export default function GoalPage() {
  const [weight, setWeight] = useState([]);

  async function addWeight(weight) {
    const newWeight = await goalAPI.addNewWeight(weight);
    setWeight([...weight, newWeight]);
  }

  useEffect(function() {
    async function getAll() {
      const allWeight = await goalAPI.getAllWeight();
      setWeight(allWeight);
    }
    getAll()
  }, [])

  return (
    <>
      <WeightGoalForm addWeight={addWeight} />
      <WeightList weight={weight}/>
    </>
  );
}