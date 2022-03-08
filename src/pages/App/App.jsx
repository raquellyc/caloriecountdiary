import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import CaloriePage from '../CaloriePage/CaloriePage';
import WorkoutPage from '../WorkoutPage/WorkoutPage';
import HomePage from '../HomePage/HomePage';
import ProgressPage from '../ProgressPage/ProgressPage';
import GoalPage from '../GoalPage/GoalPage';
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [food, setFood] = useState();

  async function searchFood(query) {
    const food = await foodAPI.searchFood('apple');
    console.log(food)
  }
  searchFood();

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/" element={<HomePage />} />
              <Route path="/diary/progress" element={<ProgressPage />} />
              <Route path="/diary/goal" element={<GoalPage />} />
              <Route path="/diary/calorie" element={<CaloriePage />} />
              <Route path="/diary/workout" element={<WorkoutPage />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
