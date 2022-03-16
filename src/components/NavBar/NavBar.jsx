import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className="navbar">
    <object className="logo" type="image/svg+xml" data="Images/calorie_compadre1.svg"></object>
    {user ?
    <>
      <Link to="/">Home</Link>
      <Link to="/diary/goal">Weight Diary</Link>
      <Link to="/diary/calorie">Calorie Diary</Link>
      <Link to="/workouts">Workout Diary</Link>
      <Link onClick={handleLogOut} to="">Log Out</Link>
    </>
    :
    <>
    <Link to="/">HOME</Link>
    <Link to="/login">Log In / Sign Up</Link>
    </>
    }
    </nav>

  );
}