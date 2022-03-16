import * as goalAPI from '../../utilities/goals-api';
import { useEffect, useState } from "react";
import GoalWeightList from '../../components/GoalWeightList/GoalWeightList';
import GoalWeightForm from '../../components/GoalWeightForm/GoalWeightForm';
import './GoalPage.css';

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
    <h1 className='WeightTitle'>Weight Diary</h1>
    <main className='Weightinfo'>
      <GoalWeightForm addWeight={addWeight}/>
      <GoalWeightList weights={weights}/>
    </main>
    </>
  );
}