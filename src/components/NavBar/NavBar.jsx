import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link to="/">Home</Link>
      &nbsp; | &nbsp;
      <Link to="/diary/goal">Goals</Link>
      &nbsp; | &nbsp;
      <Link to="/diary/calorie">Calorie Diary</Link>
      &nbsp; | &nbsp;
      <Link to="/diary/workout">Workout Diary</Link>
      &nbsp; | &nbsp;
      <Link to="/diary/progress">Your Progress</Link>
      &nbsp; | &nbsp;
      <Link onClick={handleLogOut} to="">Log Out</Link>
    </nav>
  );
}