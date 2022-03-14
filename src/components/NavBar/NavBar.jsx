import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/diary/goal">Goals</Link>
      <Link to="/diary/calorie">Calorie Diary</Link>
      <Link to="/workouts">Workout Diary</Link>
      <Link onClick={handleLogOut} to="">Log Out</Link>
    </nav>
  );
}